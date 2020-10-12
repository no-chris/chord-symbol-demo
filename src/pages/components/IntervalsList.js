import './IntervalsList.scss';

import React from 'react';

import { parseChord } from 'chord-symbol';

const IntervalsList = ({ userChordSymbol }) => {
	const parsed = parseChord(userChordSymbol);
	const intervals = parsed ? parsed.normalized.intervals : ['-'];

	return (
		<div>
			<h3>Detected intervals</h3>
			<div className={'IntervalsList_Container'}>
				{intervals
					.map((degree) => <code>{degree}</code>)
					.reduce((acc, element) => {
						return acc === null
							? [element]
							: [...acc, ', ', element];
					}, null)}
			</div>
		</div>
	);
};

export default IntervalsList;
