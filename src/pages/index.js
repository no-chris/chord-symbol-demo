import React, { useState } from 'react';

import SymbolInput from './components/SymbolInput';
import SymbolRendered from './components/SymbolRendered';
import RendererConfig from './components/RendererConfig';

const defaultUserSymbol = 'Ab(b9)';

export default function Home() {
	const [userChordSymbol, setUserChordSymbol] = useState(defaultUserSymbol);
	const [transposeValue, setTransposeValue] = useState(0);
	const [harmonizeAccidentals, setHarmonizeAccidentals] = useState(false);
	const [useFlats, setUseFlats] = useState(false);

	return (
		<div>
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
			<SymbolRendered
				userChordSymbol={userChordSymbol}
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				useFlats={useFlats}
			/>
		</div>
	);
}
