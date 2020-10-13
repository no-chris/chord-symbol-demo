import './RenderedSymbolList.scss';

import React from 'react';

import RenderedSymbol from './RenderedSymbol';

const RenderedSymbolList = ({
	userChordSymbol,
	transposeValue,
	harmonizeAccidentals,
	useFlats,
}) => {
	const configDefault = {
		transposeValue,
		harmonizeAccidentals,
		useFlats,
	};

	const renderList = [
		{
			title: 'Default rendering',
			configRenderer: configDefault,
			description:
				'Academic rendering based on the rules defined in the books ' +
				'<code>Contemporary Music Theory Series</code> (by Mark Harrison) ' +
				'and <code>Standardized Chord Symbol Notation</code> (by Carl Brandt and Clinton Roemer)',
		},
		{
			title: '"Short" rendering',
			configRenderer: Object.assign({}, configDefault, {
				useShortNamings: true,
			}),
			description:
				'Usually shorter version of the default rendering, ' +
				'to reflect real-life usage of chord symbol in available chords charts. ' +
				'<a href="https://github.com/no-chris/chord-symbol#rendering-and-normalization">View more details</a>.',
		},
		{
			title: 'Simplified (core)',
			configRenderer: Object.assign({}, configDefault, {
				useShortNamings: true,
				simplify: 'core',
			}),
			description:
				'Tries to keep ony the core characteristics of the chord by removing suspensions, ' +
				'extensions, most alterations, adds and omits. Seventh, altered fifth and bass note are kept.',
		},
		{
			title: 'Simplified (max)',
			configRenderer: Object.assign({}, configDefault, {
				useShortNamings: true,
				simplify: 'max',
			}),
			description:
				'Maximum simplification: remove all chord changes but the minor third.',
		},
	];

	return (
		<div>
			<h3>Normalization variants</h3>
			<p>
				Here are a few examples of symbol normalization that you can
				achieve with <code>ChordSymbol</code>.
			</p>
			<table className={'RenderedSymbol_TableContainer'}>
				<thead className={'RenderedSymbol_TableHead'}>
					<tr className={'RenderedSymbol_TableRow'}>
						<th>Output</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{renderList.map((props) => (
						<RenderedSymbol
							userChordSymbol={userChordSymbol}
							{...props}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default RenderedSymbolList;
