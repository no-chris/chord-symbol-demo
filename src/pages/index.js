import '../../scss/styles.scss';

import React, { useState } from 'react';

import Results from './components/Results';
import Intro from './components/Intro';
import Logo from './components/Logo';
import RenderedSymbolList from './components/RenderedSymbolList';
import UserInput from './components/userInput/UserInput';

const defaultUserSymbol = 'Ab(b9)';

export default function Home() {
	const [userChordSymbol, setUserChordSymbol] = useState(defaultUserSymbol);
	const [transposeValue, setTransposeValue] = useState(0);
	const [harmonizeAccidentals, setHarmonizeAccidentals] = useState(false);
	const [useFlats, setUseFlats] = useState(false);

	return (
		<div className={'main'}>
			<Logo />
			<Intro />
			<h2>Demo</h2>
			<UserInput
				userChordSymbol={userChordSymbol}
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				useFlats={useFlats}
				setUserChordSymbol={setUserChordSymbol}
				setTransposeValue={setTransposeValue}
				setHarmonizeAccidentals={setHarmonizeAccidentals}
				setUseFlats={setUseFlats}
			/>
			<Results
				userChordSymbol={userChordSymbol}
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				useFlats={useFlats}
			/>
			<RenderedSymbolList
				userChordSymbol={userChordSymbol}
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				useFlats={useFlats}
			/>
		</div>
	);
}
