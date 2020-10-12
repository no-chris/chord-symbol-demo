import React, { useState } from 'react';

const SymbolInput = ({ userChordSymbol, setUserChordSymbol }) => {
	const handleSymbolChange = (e) => {
		const symbol = e.target.value;
		setUserChordSymbol(symbol);
	};

	return (
		<div>
			<input
				type={'text'}
				value={userChordSymbol}
				onChange={handleSymbolChange}
			/>
		</div>
	);
};

export default SymbolInput;
