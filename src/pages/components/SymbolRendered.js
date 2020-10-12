import React from 'react';

import { parseChord, chordRendererFactory } from 'chord-symbol';

const renderDefault = chordRendererFactory();
const renderShort = chordRendererFactory({ useShortNamings: true });
const renderSimplifiedCore = chordRendererFactory({
	useShortNamings: true,
	simplify: 'core',
});
const renderSimplifiedMax = chordRendererFactory({
	useShortNamings: true,
	simplify: 'max',
});

const SymbolRendered = ({ userChordSymbol }) => {
	const chord = parseChord(userChordSymbol);

	return (
		<div>
			<ul>
				<li>default: {renderDefault(chord)}</li>
				<li>short: {renderShort(chord)}</li>
				<li>simplified (core): {renderSimplifiedCore(chord)}</li>
				<li>simplified (max): {renderSimplifiedMax(chord)}</li>
			</ul>
		</div>
	);
};

export default SymbolRendered;
