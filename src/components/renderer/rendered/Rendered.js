import './Rendered.scss';

import React from 'react';

import ChordTable from '../../ChordTable';

const Rendered = ({ renderedChordTxt, renderedChordRaw }) => {
	return (
		<div>
			<div className={'Rendered_Symbol'}>
				<code className={'chordSymbol-h2'}>{renderedChordTxt}</code>
			</div>

			<ChordTable parsedChord={renderedChordRaw} />

			<details className={'Json_Details'}>
				<summary>
					JSON representation of the rendered chord (&quot;Raw&quot;
					printer)
				</summary>
				<pre className={'json'}>
					{JSON.stringify(renderedChordRaw, null, 2)}
				</pre>
			</details>
		</div>
	);
};

export default Rendered;
