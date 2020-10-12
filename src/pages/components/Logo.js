import './Logo.scss';

import React from 'react';

const Logo = () => {
	return (
		<div className={'Logo_Container'}>
			<img src={'/logo.png'} alt={'ChordSymbol'} />
		</div>
	);
};

export default Logo;
