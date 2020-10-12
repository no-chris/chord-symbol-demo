import './UserInput.scss';

import React from 'react';

import SymbolPresetList from './SymbolPresetList';
import SymbolInput from './SymbolInput';
import RendererConfig from './RendererConfig';

const UserInput = ({
	userChordSymbol,
	transposeValue,
	harmonizeAccidentals,
	useFlats,
	setUserChordSymbol,
	setTransposeValue,
	setHarmonizeAccidentals,
	setUseFlats,
}) => {
	return (
		<div className={'ui-UserInput_Container'}>
			<p>
				Please enter a chord symbol or select one of the following
				presets:
			</p>
			<SymbolPresetList setUserChordSymbol={setUserChordSymbol} />
			<SymbolInput
				userChordSymbol={userChordSymbol}
				setUserChordSymbol={setUserChordSymbol}
			/>
			<RendererConfig
				transposeValue={transposeValue}
				harmonizeAccidentals={harmonizeAccidentals}
				useFlats={useFlats}
				setTransposeValue={setTransposeValue}
				setHarmonizeAccidentals={setHarmonizeAccidentals}
				setUseFlats={setUseFlats}
				setUserChordSymbol={setUserChordSymbol}
			/>
		</div>
	);
};

export default UserInput;
