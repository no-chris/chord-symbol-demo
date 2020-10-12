import React from 'react';
import SymbolPreset from './SymbolPreset';

const SymbolPresetList = ({ setUserChordSymbol }) => {
	const presets = ['Cm7b5', 'Ab(b9)', 'C'];

	return (
		<div>
			Please enter a chord symbol or select one of the following presets:
			<br />
			{presets
				.map((preset) => (
					<SymbolPreset
						preset={preset}
						setUserChordSymbol={setUserChordSymbol}
					/>
				))
				.reduce((accu, elem) => {
					return accu === null ? [elem] : [...accu, ' - ', elem];
				}, null)}
		</div>
	);
};

export default SymbolPresetList;
