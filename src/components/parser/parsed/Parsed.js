import './Parsed.scss';

import React from 'react';

import ChordTable from '../../ChordTable';

const Parsed = ({ parsedChord, renderedChordTxt }) => {
	return (
		<div>
			<div className={'Parsed_Container'}>
				<div className={'Parsed_Symbol'}>
					<code className={'chordSymbol-h2'}>{renderedChordTxt}</code>
				</div>

				<ChordTable parsedChord={parsedChord} />

				<details className={'Json_Details'}>
					<summary>JSON representation of the parsed chord</summary>
					<pre className={'json'}>
						{JSON.stringify(parsedChord || {}, null, 2)}
					</pre>
				</details>
			</div>
		</div>
	);
};

export default Parsed;
