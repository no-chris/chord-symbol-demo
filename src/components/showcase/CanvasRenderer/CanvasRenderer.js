import React from 'react';

import { CanvasComponent } from './CanvasComponent';

const CanvasRenderer = ({ renderedChordRaw }) => {
	return (
		<div className={'Showcase_Item'}>
			<h3>Canvas Renderer</h3>
			<p>
				<code>
					<a href={'https://www.npmjs.com/package/bb-chord-symbol'}>
						bb-chord-symbol
					</a>
				</code>{' '}
				uses <code>ChordSymbol</code> to parse the symbol given.
			</p>
			<div>
				{(!renderedChordRaw.error &&
					CanvasComponent(renderedChordRaw)) || <code> - </code>}
			</div>
			<p>
				View on{' '}
				<a href={'https://www.npmjs.com/package/bb-chord-symbol'}>
					NPM
				</a>{' '}
				or on{' '}
				<a
					href={
						'https://github.com/Marr11317/Bb/tree/master/packages/format'
					}
				>
					Github
				</a>
			</p>
		</div>
	);
};

export default CanvasRenderer;
