import './UserInput.scss';

import React from 'react';

import SymbolPresetList from './SymbolPresetList';
import SymbolInput from './SymbolInput';

const UserInput = ({ altIntervals, userChordSymbol, setUserChordSymbol }) => {
	return (
		<div>
			<div className={'ui-UserInput_Container'}>
				<div>
					Please enter a chord symbol or select one of the following
					presets:
				</div>
				<SymbolPresetList setUserChordSymbol={setUserChordSymbol} />
				<SymbolInput
					altIntervals={altIntervals}
					userChordSymbol={userChordSymbol}
					setUserChordSymbol={setUserChordSymbol}
				/>
			</div>
		</div>
	);
};

export default UserInput;
