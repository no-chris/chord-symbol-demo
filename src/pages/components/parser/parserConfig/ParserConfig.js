import './ParserConfig.scss';

import React from 'react';

import AltIntervalConfigList from './AltIntervalConfigList';

const ParserConfig = ({ userChordSymbol, altIntervals, setAltIntervals }) => {
	return (
		<div className={'parserConfig_Container'}>
			<strong>Parser configuration:</strong>
			<table className={'configuration_Table'}>
				<tbody>
					<tr>
						<td>
							<AltIntervalConfigList
								userChordSymbol={userChordSymbol}
								altIntervals={altIntervals}
								setAltIntervals={setAltIntervals}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ParserConfig;
