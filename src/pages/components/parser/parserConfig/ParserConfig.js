import './ParserConfig.scss';

import React from 'react';

import AltIntervalConfigList from './AltIntervalConfigList';

const ParserConfig = ({ userChordSymbol, altIntervals, setAltIntervals }) => {
	const altIntervalsDesc =
		'user selection of intervals affected by the "alt" modifier (all by default). ' +
		'If you would like "alt" to consistently yield a specific set of intervals, you can specify those here.';
	return (
		<div className={'parserConfig_Container'}>
			<strong>Parser configuration:</strong>
			<table className={'configuration_Table'}>
				<tbody>
					<tr>
						<td>
							<AltIntervalConfigList
								parsedChord={parsedChord}
								altIntervals={altIntervals}
								setAltIntervals={setAltIntervals}
							/>
						</td>
						<td
							className={'configuration_Desc'}
							dangerouslySetInnerHTML={{
								__html: altIntervalsDesc,
							}}
						></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ParserConfig;
