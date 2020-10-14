import './Parsed.scss';

import React from 'react';

import {
	chordParserFactory,
	chordRendererFactory,
} from '../../../../core/chord-symbol';

import ChordTable from '../../ChordTable';

const Parsed = ({ userChordSymbol, altIntervals }) => {
	const parseChord = chordParserFactory({ altIntervals });
	const parsed = parseChord(userChordSymbol);

	const renderChord = chordRendererFactory();
	const rendered = renderChord(parsed);

	return (
		<div>
			<div className={'Parsed_Container'}>
				<div className={'Parsed_Symbol'}>
					<code className={'chordSymbol-h2'}>{rendered}</code>
				</div>

				<ChordTable parsedChord={parsed} />

				<details className={'Json_Details'}>
					<summary>JSON representation of parsed chord</summary>
					<pre className={'json'}>
						{JSON.stringify(parsed || {}, null, 2)}
					</pre>
				</details>
			</div>
		</div>
	);
};

export default Parsed;
