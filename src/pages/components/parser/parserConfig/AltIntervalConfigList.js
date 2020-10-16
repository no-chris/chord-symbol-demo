import React from 'react';

import AltIntervalConfig from './AltIntervalConfig';

const AltIntervalConfigList = ({
	parsedChord,
	altIntervals,
	setAltIntervals,
}) => {
	const altIntervalsList = [
		{ id: 'fifthFlat', label: 'b5' },
		{ id: 'fifthSharp', label: '#5' },
		{ id: 'ninthFlat', label: 'b9' },
		{ id: 'ninthSharp', label: '#9' },
		{ id: 'eleventhSharp', label: '#11' },
		{ id: 'thirteenthFlat', label: 'b13' },
	];

	return (
		<div className={'parserConfigItem_Container'}>
			<div className={'pc-AltIntervalList_Label'}>Alt intervals:</div>
			{altIntervalsList.map((interval) => (
				<AltIntervalConfig
					key={interval.id}
					setAltIntervals={setAltIntervals}
					altIntervals={altIntervals}
					id={interval.id}
					label={interval.label}
					disabled={
						parsedChord ? !parsedChord.normalized.intents.alt : true
					}
				/>
			))}
		</div>
	);
};

export default AltIntervalConfigList;
