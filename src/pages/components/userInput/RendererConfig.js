import React from 'react';

import TransposeValueConfig from './TransposeValueConfig';
import HarmonizeAccidentalsConfig from './HarmonizeAccidentalsConfig';
import UseFlatsConfig from './UseFlatsConfig';
import ResetConfig from './ResetConfig';

const RendererConfig = ({
	transposeValue,
	harmonizeAccidentals,
	useFlats,
	setTransposeValue,
	setHarmonizeAccidentals,
	setUseFlats,
	setUserChordSymbol,
}) => {
	return (
		<div className={'ui-RendererConfig_Container'}>
			<TransposeValueConfig
				transposeValue={transposeValue}
				setTransposeValue={setTransposeValue}
			/>
			<HarmonizeAccidentalsConfig
				harmonizeAccidentals={harmonizeAccidentals}
				setHarmonizeAccidentals={setHarmonizeAccidentals}
			/>
			<UseFlatsConfig
				useFlats={useFlats}
				setUseFlats={setUseFlats}
				harmonizeAccidentals={harmonizeAccidentals}
			/>
			<ResetConfig
				setUserChordSymbol={setUserChordSymbol}
				setTransposeValue={setTransposeValue}
				setHarmonizeAccidentals={setHarmonizeAccidentals}
				setUseFlats={setUseFlats}
			/>
		</div>
	);
};

export default RendererConfig;
