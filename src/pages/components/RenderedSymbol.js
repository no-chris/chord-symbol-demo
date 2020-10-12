import './RenderedSymbol.scss';

import React from 'react';

import { parseChord, chordRendererFactory } from 'chord-symbol';

const invalidChordString = '-';

const RenderedSymbol = ({
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

	const renderedDefault = renderDefault(chord) || invalidChordString;
	const renderedShort = renderShort(chord) || invalidChordString;
	const renderedSimplifiedCore =
		renderSimplifiedCore(chord) || invalidChordString;
	const renderedSimplifiedMax =
		renderSimplifiedMax(chord) || invalidChordString;

	return (
		<div>
			<h3>Symbol normalization</h3>
			<p>
				Please find below some examples of symbol normalization that{' '}
				<code>ChordSymbol</code> allows to achieve.
			</p>
			<table className={'RenderedSymbol_TableContainer'}>
				<thead className={'RenderedSymbol_TableHead'}>
					<tr className={'RenderedSymbol_TableRow'}>
						<th>Output</th>
						<th>Description</th>
						<th>Renderer config</th>
					</tr>
				</thead>
				<tbody>
					<tr className={'RenderedSymbol_TableRow'}>
						<td>
							<code className={'chordSymbol'}>
								{renderedDefault}
							</code>
						</td>
						<td>
							<strong>Default rendering</strong>
							<p>
								"Academic" rendering based on agreed upon symbol
								namings rules.
							</p>
						</td>
						<td>
							<pre className={'json'}>
								{JSON.stringify(configDefault, null, 2)}
							</pre>
						</td>
					</tr>
					<tr className={'RenderedSymbol_TableRow'}>
						<td>
							<code className={'chordSymbol'}>
								{renderedShort}
							</code>
						</td>
						<td>
							<strong>"Short" rendering</strong>
							<p>
								Usually shorter version of the default
								rendering, to reflect real-life usage of chord
								symbol in available chords charts.{' '}
								<a
									href={
										'https://github.com/no-chris/chord-symbol#rendering-and-normalization'
									}
								>
									View more details
								</a>
								.
							</p>
						</td>
						<td>
							<pre className={'json'}>
								{JSON.stringify(configShort, null, 2)}
							</pre>
						</td>
					</tr>
					<tr className={'RenderedSymbol_TableRow'}>
						<td>
							<code className={'chordSymbol'}>
								{renderedSimplifiedCore}
							</code>
						</td>
						<td>
							<strong>Simplified (core)</strong>
							<p>
								Tries to keep ony the core characteristics of
								the chord by removing suspensions, extensions,
								most alterations, adds and omits. Seventh,
								altered fifth and bass note are kept.
							</p>
						</td>
						<td>
							<pre className={'json'}>
								{JSON.stringify(configSimplifiedCore, null, 2)}
							</pre>
						</td>{' '}
					</tr>
					<tr className={'RenderedSymbol_TableRow'}>
						<td>
							<code className={'chordSymbol'}>
								{renderedSimplifiedMax}
							</code>
						</td>
						<td>
							<strong>Simplified (max)</strong>
							<p>
								Maximum simplification: remove all chord changes
								but the minor third.
							</p>
						</td>
						<td>
							<pre className={'json'}>
								{JSON.stringify(configSimplifiedMax, null, 2)}
							</pre>
						</td>{' '}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default RenderedSymbol;
