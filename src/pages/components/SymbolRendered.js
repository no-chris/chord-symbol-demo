import React from 'react';

import { parseChord, chordRendererFactory } from 'chord-symbol';

const invalidChordString = '-';

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
	const configSimplifiedCore = Object.assign({}, configDefault, {
		simplify: 'core',
	});
	const configSimplifiedMax = Object.assign({}, configDefault, {
		simplify: 'max',
	});

	const renderDefault = chordRendererFactory(configDefault);
	const renderShort = chordRendererFactory(configShort);
	const renderSimplifiedCore = chordRendererFactory(configSimplifiedCore);
	const renderSimplifiedMax = chordRendererFactory(configSimplifiedMax);

	const renderedDefault = renderDefault(chord) || invalidChordString;
	const renderedShort = renderShort(chord) || invalidChordString;
	const renderedSimplifiedCore =
		renderSimplifiedCore(chord) || invalidChordString;
	const renderedSimplifiedMax =
		renderSimplifiedMax(chord) || invalidChordString;

	return (
		<div>
			<h3>Symbol normalization</h3>
			<table>
				<thead>
					<tr>
						<th>&nbsp;</th>
						<th>Normalized chord</th>
						<th>Renderer configuration</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Academic rendering</td>
						<td>{renderedDefault}</td>
						<td>{JSON.stringify({})}</td>
					</tr>
					<tr>
						<td>Common rendering</td>
						<td>
							{renderedShort !== renderedDefault
								? renderedShort
								: '-'}
						</td>
						<td>{JSON.stringify({ useShortNamings: true })}</td>
					</tr>
					<tr>
						<td>
							Simplified (core)
							<br />
							Keep seventh and altered fifth
						</td>
						<td>{renderedSimplifiedCore}</td>
						<td>{JSON.stringify({ simplify: 'core' })}</td>
					</tr>
					<tr>
						<td>
							Simplified (max)
							<br />
							Only render major or minor
						</td>
						<td>{renderedSimplifiedMax}</td>
						<td>{JSON.stringify({ simplify: 'max' })}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default SymbolRendered;
