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
	const altIntervalsDesc =
		'user selection of intervals affected by the "alt" modifier (all by default). ' +
		'If you would like "alt" to consistently yield a specific set of intervals, you can specify those here.';

	return (
		<tr>
			<td>
				<div className={'parserConfigItem_Container'}>
					<div className={'pc-CheckboxList_Label'}>
						Alt intervals:
					</div>
					{altIntervalsList.map((interval) => (
						<AltIntervalConfig
							key={'AltIntervalConfig' + interval.id}
							setAltIntervals={setAltIntervals}
							altIntervals={altIntervals}
							id={interval.id}
							label={interval.label}
							disabled={
								!parsedChord.error
									? !parsedChord.normalized.intents.alt
									: true
							}
						/>
					))}
				</div>
			</td>
			<td
				className={'configuration_Desc'}
				dangerouslySetInnerHTML={{
					__html: altIntervalsDesc,
				}}
			></td>
		</tr>
	);
};

export default AltIntervalConfigList;
