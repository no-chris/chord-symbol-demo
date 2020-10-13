import './Results.scss';

import React from 'react';

import {
	chordParserFactory,
	chordRendererFactory,
} from '../../core/chord-symbol';

const Results = ({
	userChordSymbol,
	useFlats,
	harmonizeAccidentals,
	transposeValue,
}) => {
	const parseChord = chordParserFactory();
	const parsed = parseChord(userChordSymbol);

	const renderChord = chordRendererFactory({
		transposeValue,
		harmonizeAccidentals,
		useFlats,
	});
	const rendered = renderChord(parsed);

	const reParsed = parseChord(rendered);

	const intervals = parsed ? parsed.normalized.intervals : ['-'];
	const semitones = parsed ? parsed.normalized.semitones : ['-'];
	const notes = parsed ? reParsed.normalized.notes : ['-'];

	return (
		<div>
			<h3>Results</h3>
			<div className={'IntervalsList_Container'}>
				<table className={'IntervalsList_Table'}>
					<tbody>
						<tr>
							<th>Normalized symbol</th>
							<td colSpan={intervals.length}>
								<code>{rendered}</code>
							</td>
						</tr>
						<tr>
							<th>Intervals</th>
							{join(intervals, ', ')}
						</tr>
						<tr>
							<th>Notes</th>
							{join(notes, ', ')}
						</tr>
						<tr>
							<th>Semitones</th>
							{join(semitones, ', ')}
						</tr>
					</tbody>
				</table>
				<details className={'Json_Details'}>
					<summary>Internal chord representation (Json)</summary>
					<pre className={'json'}>
						{JSON.stringify(parsed || {}, null, 2)}
					</pre>
				</details>
			</div>
		</div>
	);
};

export default Results;

const join = (all, glue) => {
	return all.map((element) => (
		<td>
			<code>{element}</code>
		</td>
	));
};
