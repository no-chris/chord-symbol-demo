import React from 'react';

import { parseChord } from 'chord-symbol';

const InternalRepresentation = ({ userChordSymbol }) => {
	const parsed = parseChord(userChordSymbol) || {};

	return (
		<div>
			<h3>Internal Representation</h3>
			<div>{JSON.stringify(parsed)}</div>
		</div>
	);
};

export default InternalRepresentation;
