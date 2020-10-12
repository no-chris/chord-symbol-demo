import React from 'react';

import { parseChord } from 'chord-symbol';

const InternalRepresentation = ({ userChordSymbol }) => {
	const parsed = parseChord(userChordSymbol) || {};

	return (
		<div>
			<h2>Internal Representation</h2>
			<div>{JSON.stringify(parsed)}</div>
		</div>
	);
};

export default InternalRepresentation;
