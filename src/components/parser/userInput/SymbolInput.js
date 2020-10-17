import React from 'react';

const SymbolInput = ({ userChordSymbol, setUserChordSymbol, parsedChord }) => {
	const handleSymbolChange = (e) => {
		const symbol = (e.target.value || '').trim();
		setUserChordSymbol(symbol);
	};

	const classNames = ['ui-SymbolInput_Container'];
	if (userChordSymbol !== '') {
		if (parsedChord) {
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
