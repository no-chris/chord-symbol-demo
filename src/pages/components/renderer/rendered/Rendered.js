import './Rendered.scss';

import React from 'react';

import {
	chordParserFactory,
	chordRendererFactory,
} from '../../../../core/chord-symbol';
import ChordTable from '../../ChordTable';

const Rendered = ({
	userChordSymbol,
	simplify,
	transposeValue,
	harmonizeAccidentals,
	useFlats,
	useShortNamings,
	altIntervals,
}) => {
	const config = {
		harmonizeAccidentals,
		simplify,
		transposeValue,
		useFlats,
		useShortNamings,
	};
	const configRaw = Object.assign({}, config, { printer: 'raw' });

	const parseChord = chordParserFactory({ altIntervals });
	const parsed = parseChord(userChordSymbol);

	const renderChordTxt = chordRendererFactory(config);
	const renderedTxt = renderChordTxt(parsed);

	const renderChordRaw = chordRendererFactory(configRaw);
	const renderedRaw = renderChordRaw(parsed);

	return (
		<div>
			<div className={'Rendered_Symbol'}>
				<code className={'chordSymbol-h2'}>{renderedTxt}</code>
			</div>

			<ChordTable parsedChord={renderedRaw} />

			<details className={'Json_Details'}>
				<summary>
					JSON representation of rendered chord ("Raw" printer)
				</summary>
				<pre className={'json'}>
					{JSON.stringify(renderedRaw || {}, null, 2)}
				</pre>
			</details>
		</div>
	);
};

export default Rendered;
