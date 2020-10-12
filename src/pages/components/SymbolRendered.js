import React from 'react';

import { parseChord, chordRendererFactory } from 'chord-symbol';

const SymbolRendered = ({
	userChordSymbol,
	transposeValue,
	harmonizeAccidentals,
	useFlats,
}) => {
	const chord = parseChord(userChordSymbol);

	const configDefault = {
		transposeValue,
		harmonizeAccidentals,
		useFlats,
	};
	const configShort = Object.assign({}, configDefault, {
		useShortNamings: true,
	});
	const configSimplifiedCore = Object.assign({}, configShort, {
		simplify: 'core',
	});
	const configSimplifiedMax = Object.assign({}, configShort, {
		simplify: 'max',
	});

	const renderDefault = chordRendererFactory(configDefault);
	const renderShort = chordRendererFactory(configShort);
	const renderSimplifiedCore = chordRendererFactory(configSimplifiedCore);
	const renderSimplifiedMax = chordRendererFactory(configSimplifiedMax);

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
