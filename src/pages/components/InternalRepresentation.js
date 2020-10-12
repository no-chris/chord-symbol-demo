import './InternalRepresentation.scss';

import React from 'react';

import { parseChord } from 'chord-symbol';

const InternalRepresentation = ({ userChordSymbol }) => {
	const parsed = parseChord(userChordSymbol) || {};

	return (
		<div>
			<h3>Chord internal representation (Json)</h3>
			<div className={'InternalRepresentation_Container'}>
				<pre className={'json'}>{JSON.stringify(parsed, null, 2)}</pre>
			</div>
		</div>
	);
};

export default InternalRepresentation;
