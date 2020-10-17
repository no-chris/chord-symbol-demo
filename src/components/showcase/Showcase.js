import React from 'react';

import CustomPianoKeys from './CustomPianoKeys';

const Showcase = ({ renderedChordRaw }) => {
	return (
		<div className={'Showcase_Container'}>
			<h2>Integrations examples</h2>
			Please find below examples of how <code>ChordSymbol</code> can be
			used with other libraries. If you want your library to be featured
			here, feel free to{' '}
			<a href={'https://github.com/no-chris/chord-symbol/'}>
				submit a PR
			</a>
			.
			<CustomPianoKeys renderedChordRaw={renderedChordRaw} />
		</div>
	);
};

export default Showcase;
