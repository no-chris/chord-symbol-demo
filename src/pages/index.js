import '../../scss/styles.scss';

import React, { useState } from 'react';

import { chordParserFactory, chordRendererFactory } from 'chord-symbol';

import Parser from '../components/parser/Parser';
import Intro from '../components/Intro';
import Logo from '../components/Logo';
import Renderer from '../components/renderer/Renderer';
import Showcase from '../components/showcase/Showcase';

import getChordSymbolVersion from '../getChordSymbolVersion';

const defaultUserSymbol = 'Ab(b9)';
const defaultNotationSystems = ['english', 'german', 'latin'];
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
	const [rendererNotationSystem, setRendererNotationSystem] = useState(
		'english'
	);
	const [parserNotationSystems, setParserNotationSystems] = useState(
		defaultNotationSystems
	);
	const [altIntervals, setAltIntervals] = useState(defaultAltIntervals);

	const parseChord = chordParserFactory({
		notationSystems: parserNotationSystems,
		altIntervals,
	});
	const parsedChord = parseChord(userChordSymbol);

	let parsingErrors;
	if (parsedChord.error) {
		parsingErrors = parsedChord.error;
	}

	const rendererConfig = {
		useShortNamings,
		transposeValue,
		harmonizeAccidentals,
		useFlats,
		simplify,
		notationSystem: rendererNotationSystem,
	};
	const renderDefault = chordRendererFactory();
	const renderedChordDefault = renderDefault(parsedChord);
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
				notationSystems={parserNotationSystems}
				setNotationSystems={setParserNotationSystems}
				altIntervals={altIntervals}
				userChordSymbol={userChordSymbol}
				setAltIntervals={setAltIntervals}
				setUserChordSymbol={setUserChordSymbol}
				parsedChord={parsedChord}
				renderedChordDefault={renderedChordDefault}
				parsingErrors={parsingErrors}
			/>
			<Renderer
				useFlats={useFlats}
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				notationSystem={rendererNotationSystem}
				simplify={simplify}
				useShortNamings={useShortNamings}
				setUseShortNamings={setUseShortNamings}
				setSimplify={setSimplify}
				setTransposeValue={setTransposeValue}
				setHarmonizeAccidentals={setHarmonizeAccidentals}
				setNotationSystem={setRendererNotationSystem}
				setUseFlats={setUseFlats}
				renderedChordTxt={renderedChordTxt}
				renderedChordRaw={renderedChordRaw}
			/>
			<Showcase renderedChordRaw={renderedChordRaw} />
			<div className={'License'}>
				&copy; Christophe Noël (2019-{new Date().getFullYear()}) - MIT
				License
				<br />
				chord-symbol {getChordSymbolVersion()}
			</div>
		</div>
	);
}
