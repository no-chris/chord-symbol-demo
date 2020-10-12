import React from 'react';

import { parseChord } from 'chord-symbol';

const IntervalsList = ({ userChordSymbol }) => {
	const parsed = parseChord(userChordSymbol);
	const intervals = parsed ? parsed.normalized.intervals : ['-'];

	return (
		<div>
			<h3>Chord intervals</h3>
			<div>{intervals.join(', ')}</div>
		</div>
	);
};

export default IntervalsList;
