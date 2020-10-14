import React from 'react';

import {
	chordParserFactory,
	chordRendererFactory,
} from '../../../../core/chord-symbol';

const invalidChordString = '-';

const RenderedSymbol = ({
	userChordSymbol,
	title,
	description,
	configRenderer,
}) => {
	const parseChord = chordParserFactory();
	const parsed = parseChord(userChordSymbol);

	const renderChord = chordRendererFactory(configRenderer);
	const rendered = parsed ? renderChord(parsed) : invalidChordString;

	return (
		<tr className={'RenderedSymbol_TableRow'}>
			<td>
				<code className={'chordSymbol'}>{rendered}</code>
			</td>
			<td>
				<strong>{title}</strong>
				<p dangerouslySetInnerHTML={{ __html: description }}></p>
				<details className={'Json_Details'}>
					<summary>Renderer configuration</summary>
					<pre className={'json'}>
						{JSON.stringify(configRenderer, null, 2)}
					</pre>
				</details>
			</td>
		</tr>
	);
};

export default RenderedSymbol;
