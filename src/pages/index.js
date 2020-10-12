import React, { useState } from 'react';

import SymbolInput from './components/SymbolInput';
import SymbolPresetList from './components/SymbolPresetList';
import SymbolRendered from './components/SymbolRendered';
import RendererConfig from './components/RendererConfig';
import IntervalsList from './components/IntervalsList';

const defaultUserSymbol = 'Ab(b9)';

export default function Home() {
	const [userChordSymbol, setUserChordSymbol] = useState(defaultUserSymbol);
	const [transposeValue, setTransposeValue] = useState(0);
	const [harmonizeAccidentals, setHarmonizeAccidentals] = useState(false);
	const [useFlats, setUseFlats] = useState(false);

	return (
		<div>
			<h1>Chord-Symbol</h1>
			<p>
				ChordSymbol is a Javascript/NodeJs parser and renderer for chord
				symbols. It transforms a string representing a chord (Cm7, for
				example), into a suite of intervals: 1, b3, 5, b7. It also
				normalizes the chord characteristics by isolating its quality,
				extensions, alterations, added and omitted notes, which later
				allows rendering the chords in a normalized way.
			</p>
			<SymbolPresetList setUserChordSymbol={setUserChordSymbol} />
			<SymbolInput
				userChordSymbol={userChordSymbol}
				setUserChordSymbol={setUserChordSymbol}
			/>
			<RendererConfig
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				useFlats={useFlats}
				setTransposeValue={setTransposeValue}
				setHarmonizeAccidentals={setHarmonizeAccidentals}
				setUseFlats={setUseFlats}
			/>
			<IntervalsList userChordSymbol={userChordSymbol} />
			<SymbolRendered
				userChordSymbol={userChordSymbol}
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				useFlats={useFlats}
			/>
		</div>
	);
}
