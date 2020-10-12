import React from 'react';

import { parseChord } from 'chord-symbol';

const SymbolInput = ({ userChordSymbol, setUserChordSymbol }) => {
	const handleSymbolChange = (e) => {
		const symbol = e.target.value;
		setUserChordSymbol(symbol);
	};

	const classNames = ['ui-SymbolInput_Container'];
	if (userChordSymbol !== '') {
		if (parseChord(userChordSymbol)) {
			classNames.push('ui-SymbolInput_Container-isValid');
		} else {
			classNames.push('ui-SymbolInput_Container-isInvalid');
		}
	}

	return (
		<div className={classNames.join(' ')}>
			<input
				type={'text'}
				className={'ui-SymbolInput_Input'}
				value={userChordSymbol}
				onChange={handleSymbolChange}
				placeholder={'Type-in a chord symbol'}
			/>
		</div>
	);
};

export default SymbolInput;
