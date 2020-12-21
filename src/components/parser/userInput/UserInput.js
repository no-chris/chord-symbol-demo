import './UserInput.scss';

import React from 'react';

import SymbolPresetList from './SymbolPresetList';
import SymbolInput from './SymbolInput';
import UserFeedback from './UserFeedback';

const UserInput = ({ parsingError, userChordSymbol, setUserChordSymbol }) => {
	return (
		<div>
			<div className={'ui-UserInput_Container'}>
				<div>
					Please enter a chord symbol or select one of the following
					presets:
				</div>
				<SymbolPresetList setUserChordSymbol={setUserChordSymbol} />
				<SymbolInput
					parsingError={parsingError}
					userChordSymbol={userChordSymbol}
					setUserChordSymbol={setUserChordSymbol}
				/>
				<UserFeedback parsingError={parsingError} />
			</div>
		</div>
	);
};

export default UserInput;
