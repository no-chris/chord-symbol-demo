import '../../scss/styles.scss';

import React, { useState } from 'react';

import { chordParserFactory, chordRendererFactory } from '../core/chord-symbol';

import Parser from './components/parser/Parser';
import Intro from './components/Intro';
import Logo from './components/Logo';
import Renderer from './components/renderer/Renderer';
import Showcase from './components/showcase/Showcase';

const defaultUserSymbol = 'Ab(b9)';
const defaultAltIntervals = {
	fifthFlat: true,
	fifthSharp: true,
	ninthFlat: true,
	ninthSharp: true,
	eleventhSharp: true,
	thirteenthFlat: true,
};

export default function Home() {
	const [userChordSymbol, setUserChordSymbol] = useState(defaultUserSymbol);
	const [simplify, setSimplify] = useState('none');
	const [useShortNamings, setUseShortNamings] = useState(false);
	const [transposeValue, setTransposeValue] = useState(0);
	const [harmonizeAccidentals, setHarmonizeAccidentals] = useState(false);
	const [useFlats, setUseFlats] = useState(false);
	const [altIntervals, setAltIntervals] = useState(defaultAltIntervals);

	const parseChord = chordParserFactory({ altIntervals });
	const parsedChord = parseChord(userChordSymbol);

	const rendererConfig = {
		useShortNamings,
		transposeValue,
		harmonizeAccidentals,
		useFlats,
		simplify,
	};
	const renderChordTxt = chordRendererFactory(rendererConfig);
	rendererConfig.printer = 'raw';
	const renderChordRaw = chordRendererFactory(rendererConfig);
	const renderedChordTxt = renderChordTxt(parsedChord);
	const renderedChordRaw = renderChordRaw(parsedChord);

	return (
		<div className={'main'}>
			<Logo />
			<Intro />
			<h2>Demo</h2>
			<Parser
				altIntervals={altIntervals}
				userChordSymbol={userChordSymbol}
				setAltIntervals={setAltIntervals}
				setUserChordSymbol={setUserChordSymbol}
				parsedChord={parsedChord}
			/>
			<Renderer
				useFlats={useFlats}
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				simplify={simplify}
				useShortNamings={useShortNamings}
				setUseShortNamings={setUseShortNamings}
				setSimplify={setSimplify}
				setTransposeValue={setTransposeValue}
				setHarmonizeAccidentals={setHarmonizeAccidentals}
				setUseFlats={setUseFlats}
				renderedChordTxt={renderedChordTxt}
				renderedChordRaw={renderedChordRaw}
			/>
			<Showcase
				renderedChordTxt={renderedChordTxt}
				renderedChordRaw={renderedChordRaw}
			/>
			<div>MIT License (2019-2020)</div>
		</div>
	);
}
