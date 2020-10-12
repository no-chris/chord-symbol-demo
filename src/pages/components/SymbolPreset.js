import React from 'react';

const SymbolPreset = ({ setUserChordSymbol, preset }) => {
	const handleClick = () => {
		setUserChordSymbol(preset);
	};

	return <a onClick={handleClick}>{preset}</a>;
};

export default SymbolPreset;
