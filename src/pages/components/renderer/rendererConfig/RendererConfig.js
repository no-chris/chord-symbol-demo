import './RendererConfig.scss';

import React from 'react';

import TransposeValueConfig from './TransposeValueConfig';
import HarmonizeAccidentalsConfig from './HarmonizeAccidentalsConfig';
import UseFlatsConfig from './UseFlatsConfig';
import ResetConfig from './ResetConfig';
import SimplifyConfig from './SimplifyConfig';
import UseShortNamingsConfig from './UseShortNamingsConfig';

const RendererConfig = ({
	harmonizeAccidentals,
	simplify,
	transposeValue,
	useFlats,
	useShortNamings,
	setHarmonizeAccidentals,
	setSimplify,
	setTransposeValue,
	setUseFlats,
	setUseShortNamings,
}) => {
	return (
		<div className={'ui-RendererConfig_Container'}>
			<strong>Renderer configuration</strong>
			<table className={'configuration_Table'}>
				<tbody>
					<tr>
						<td>
							<UseShortNamingsConfig
								useShortNamings={useShortNamings}
								setUseShortNamings={setUseShortNamings}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<SimplifyConfig
								setSimplify={setSimplify}
								simplify={simplify}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<TransposeValueConfig
								transposeValue={transposeValue}
								setTransposeValue={setTransposeValue}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<HarmonizeAccidentalsConfig
								harmonizeAccidentals={harmonizeAccidentals}
								setHarmonizeAccidentals={
									setHarmonizeAccidentals
								}
							/>
						</td>
					</tr>
					<tr>
						<td>
							<UseFlatsConfig
								useFlats={useFlats}
								setUseFlats={setUseFlats}
								harmonizeAccidentals={harmonizeAccidentals}
							/>
						</td>
					</tr>
				</tbody>
			</table>
			<ResetConfig
				setTransposeValue={setTransposeValue}
				setHarmonizeAccidentals={setHarmonizeAccidentals}
				setUseFlats={setUseFlats}
				setSimplify={setSimplify}
				setUseShortNamings={setUseShortNamings}
			/>
		</div>
	);
};

export default RendererConfig;
