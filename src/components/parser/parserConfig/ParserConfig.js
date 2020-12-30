import './ParserConfig.scss';

import React from 'react';

import NotationSystemsConfigList from './NotationSystemsConfigList';
import AltIntervalConfigList from './AltIntervalConfigList';

const ParserConfig = ({
	parsedChord,
	altIntervals,
	setAltIntervals,
	notationSystems,
	setNotationSystems,
}) => {
	return (
		<div className={'parserConfig_Container'}>
			<strong>Parser configuration:</strong>
			<table className={'configuration_Table'}>
				<tbody>
					<NotationSystemsConfigList
						notationSystems={notationSystems}
						setNotationSystems={setNotationSystems}
					/>
					<AltIntervalConfigList
						parsedChord={parsedChord}
						altIntervals={altIntervals}
						setAltIntervals={setAltIntervals}
					/>
				</tbody>
			</table>
		</div>
	);
};

export default ParserConfig;
