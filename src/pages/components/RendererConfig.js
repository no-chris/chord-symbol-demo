import React from 'react';
import TransposeValueConfig from './TransposeValueConfig';
import HarmonizeAccidentalsConfig from './HarmonizeAccidentalsConfig';
import UseFlatsConfig from './UseFlatsConfig';

const RendererConfig = ({
	transposeValue,
	harmonizeAccidentals,
	useFlats,
	setTransposeValue,
	setHarmonizeAccidentals,
	setUseFlats,
}) => {
	return (
		<div>
			<ul>
				<li>
					<TransposeValueConfig
						transposeValue={transposeValue}
						setTransposeValue={setTransposeValue}
					/>
				</li>
				<li>
					<HarmonizeAccidentalsConfig
						harmonizeAccidentals={harmonizeAccidentals}
						setHarmonizeAccidentals={setHarmonizeAccidentals}
					/>
				</li>
				<li>
					<UseFlatsConfig
						useFlats={useFlats}
						setUseFlats={setUseFlats}
						harmonizeAccidentals={harmonizeAccidentals}
					/>
				</li>
			</ul>
		</div>
	);
};

export default RendererConfig;
