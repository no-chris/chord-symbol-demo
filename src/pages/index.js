import React, { useState } from 'react';

//todo: tokenise user input to avoid weird bhavior

import InternalRepresentation from './components/InternalRepresentation';
import IntervalsList from './components/IntervalsList';
import RendererConfig from './components/RendererConfig';
import SymbolInput from './components/SymbolInput';
import SymbolPresetList from './components/SymbolPresetList';
import SymbolRendered from './components/SymbolRendered';

const defaultUserSymbol = 'Ab(b9)';

export default function Home() {
	const [userChordSymbol, setUserChordSymbol] = useState(defaultUserSymbol);
	const [transposeValue, setTransposeValue] = useState(0);
	const [harmonizeAccidentals, setHarmonizeAccidentals] = useState(false);
	const [useFlats, setUseFlats] = useState(false);

	return (
		<div>
			<h1>ChordSymbol demo</h1>
			<div>
				<a href={'https://github.com/no-chris/chord-symbol'}>Github</a>
			</div>
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
			<InternalRepresentation userChordSymbol={userChordSymbol} />
		</div>
	);
}
