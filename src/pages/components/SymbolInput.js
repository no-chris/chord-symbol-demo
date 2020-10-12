import React, { useState } from 'react';

const SymbolInput = ({ setUserChordSymbol }) => {
	const [symbol, setSymbol] = useState('');

	const handleSymbolChange = (e) => {
		const symbol = e.target.value;
		setSymbol(symbol);
		setUserChordSymbol(symbol);
	};

	return (
		<div>
			<input type={'text'} value={symbol} onChange={handleSymbolChange} />
		</div>
	);
};

export default SymbolInput;
