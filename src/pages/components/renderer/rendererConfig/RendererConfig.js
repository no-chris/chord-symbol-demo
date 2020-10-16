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
	const useShortNamingsDesc = useShortNamings
		? 'Usually shorter version of the default rendering (sometimes identical), ' +
		  'to reflect real-life usage of chord symbol in available chords charts. ' +
		  '<a href="https://github.com/no-chris/chord-symbol#rendering-and-normalization">View more details</a>.'
		: '"Academic" rendering based on the rules defined in the books ' +
		  '<code>Contemporary Music Theory Series</code> (by Mark Harrison) ' +
		  'and <code>Standardized Chord Symbol Notation</code> (by Carl Brandt and Clinton Roemer)';

	const simplifyDesc =
		simplify === 'none'
			? 'No simplification'
			: simplify === 'core'
			? 'Tries to keep ony the core characteristics of the chord by removing suspensions, ' +
			  'extensions, most alterations, adds and omits. Seventh, altered fifth and bass note are kept.'
			: 'Maximum simplification: remove all chord changes but the minor third.';

	return (
		<div className={'ui-RendererConfig_Container'}>
			<strong>Renderer configuration:</strong>
			<table className={'configuration_Table'}>
				<tbody>
					<tr>
						<td width={'33%'}>
							<UseShortNamingsConfig
								useShortNamings={useShortNamings}
								setUseShortNamings={setUseShortNamings}
							/>
						</td>
						<td
							className={'configuration_Desc'}
							width={'67%'}
							dangerouslySetInnerHTML={{
								__html: useShortNamingsDesc,
							}}
						></td>
					</tr>
					<tr>
						<td>
							<SimplifyConfig
								setSimplify={setSimplify}
								simplify={simplify}
							/>
						</td>
						<td
							className={'configuration_Desc'}
							dangerouslySetInnerHTML={{
								__html: simplifyDesc,
							}}
						></td>
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
