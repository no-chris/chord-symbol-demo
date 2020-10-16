import React from 'react';

import { chordParserFactory } from '../../../../core/chord-symbol';

import AltIntervalConfig from './AltIntervalConfig';

const AltIntervalConfigList = ({
	userChordSymbol,
	altIntervals,
	setAltIntervals,
}) => {
	const parseChord = chordParserFactory({ altIntervals });
	const parsed = parseChord(userChordSymbol);

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
					disabled={parsed ? !parsed.normalized.intents.alt : true}
				/>
			))}
		</div>
	);
};

export default AltIntervalConfigList;
