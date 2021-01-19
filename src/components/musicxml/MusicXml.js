import './MusicXml.scss';
import { toXML } from 'jstoxml/jstoxml';

import React from 'react';

// https://gist.github.com/sente/1083506/d2834134cd070dbcc08bf42ee27dabb746a1c54d#gistcomment-3068708
function formatXml(xml) {
	const PADDING = ' '.repeat(2); // set desired indent size here
	const reg = /(>)(<)(\/*)/g;
	let pad = 0;

	xml = xml.replace(reg, '$1\r\n$2$3');

	return xml
		.split('\r\n')
		.map((node) => {
			let indent = 0;
			if (node.match(/.+<\/\w[^>]*>$/)) {
				indent = 0;
			} else if (node.match(/^<\/\w/) && pad > 0) {
				pad -= 1;
			} else if (node.match(/^<\w[^>]*[^/]>.*$/)) {
				indent = 1;
			} else {
				indent = 0;
			}

			pad += indent;

			return PADDING.repeat(pad - indent) + node;
		})
		.join('\r\n');
}

const MusicXml = ({ renderedChordMusicXml }) => {
	const xml = toXML(renderedChordMusicXml.musicxml);
	return (
		<div>
			<h3>MusicXml renderer</h3>
			<div className={'MusicXmlRenderer_Container'}>
				Uses the{' '}
				<a href={'https://github.com/no-chris/chord-symbol-musicxml'}>
					chord-symbol-musicxml
				</a>{' '}
				filter.
				<pre>
					<code className={'language-xml'}>{formatXml(xml)}</code>
				</pre>
			</div>
		</div>
	);
};

export default MusicXml;
