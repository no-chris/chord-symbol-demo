import './ChordTable.scss';

import React from 'react';

const ChordTable = ({ parsedChord }) => {
	const intervals = parsedChord ? parsedChord.normalized.intervals : ['-'];
	const semitones = parsedChord ? parsedChord.normalized.semitones : ['-'];
	const notes = parsedChord ? parsedChord.normalized.notes : ['-'];

	return (
		<table className={'ChordTable_Table'}>
			<tbody>
				<tr>
					<th>Intervals</th>
					{join(intervals)}
				</tr>
				<tr>
					<th>Notes</th>
					{join(notes)}
				</tr>
				<tr>
					<th>Semitones</th>
					{join(semitones)}
				</tr>
			</tbody>
		</table>
	);
};

const join = (all) => {
	return all.map((element, i) => (
		<td key={i}>
			<code>{element}</code>
		</td>
	));
};

export default ChordTable;
