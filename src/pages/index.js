import '../../scss/styles.scss';

import React, { useState } from 'react';

import InternalRepresentation from './components/InternalRepresentation';
import IntervalsList from './components/IntervalsList';
import Intro from './components/Intro';
import Logo from './components/Logo';
import RenderedSymbol from './components/RenderedSymbol';
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
			<IntervalsList userChordSymbol={userChordSymbol} />
			<RenderedSymbol
				userChordSymbol={userChordSymbol}
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				useFlats={useFlats}
			/>
			<InternalRepresentation userChordSymbol={userChordSymbol} />
		</div>
	);
}
