import '../../scss/styles.scss';

import React, { useState } from 'react';

//todo: tokenise user input to avoid weird bhavior

import InternalRepresentation from './components/InternalRepresentation';
import IntervalsList from './components/IntervalsList';
import SymbolRendered from './components/SymbolRendered';
import UserInput from './components/userInput/UserInput';

const defaultUserSymbol = 'Ab(b9)';

export default function Home() {
	const [userChordSymbol, setUserChordSymbol] = useState(defaultUserSymbol);
	const [transposeValue, setTransposeValue] = useState(0);
	const [harmonizeAccidentals, setHarmonizeAccidentals] = useState(false);
	const [useFlats, setUseFlats] = useState(false);

	return (
		<div className={'main'}>
			<h1>ChordSymbol</h1>
			<div>
				<a href={'https://github.com/no-chris/chord-symbol'}>Github</a>
				<a href={'https://www.npmjs.com/package/chord-symbol'}>NPM</a>
			</div>
			<p>
				<code>ChordSymbol</code> is a Javascript/NodeJs parser and
				renderer for chord symbols. It transforms a string representing
				a chord (<code>Cm7</code>, for example), into a suite of
				intervals: <code>1</code>, <code>b3</code>, <code>5</code>,{' '}
				<code>b7</code>. It also normalizes the chord characteristics by
				isolating its quality, extensions, alterations, added and
				omitted notes, which later allows rendering the chords in a
				normalized way.
			</p>
			<p>
				See the full{' '}
				<a href={'https://github.com/no-chris/chord-symbol#readme'}>
					README
				</a>
				.
			</p>
			<h2>Live Demo</h2>
			<UserInput
				userChordSymbol={userChordSymbol}
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				useFlats={useFlats}
				setUserChordSymbol={setUserChordSymbol}
				setTransposeValue={setTransposeValue}
				setHarmonizeAccidentals={setHarmonizeAccidentals}
				setUseFlats={setUseFlats}
				setUserChordSymbol={setUserChordSymbol}
			/>
			<IntervalsList userChordSymbol={userChordSymbol} />
			<SymbolRendered
				userChordSymbol={userChordSymbol}
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				useFlats={useFlats}
			/>
			<InternalRepresentation userChordSymbol={userChordSymbol} />
		</div>
	);
}
