import React from 'react';
import SymbolPreset from './SymbolPreset';

const SymbolPresetList = ({ setUserChordSymbol }) => {
	const presets = [
		'Cm7b5',
		'Ab(b9)',
		'Bbh',
		'G7/B',
		'F#11',
		'Bbalt.',
		'Hesh',
	];

	return (
		<div className={'ui-SymbolPresetList_Container'}>
			{presets.map((preset, i) => (
				<SymbolPreset
					key={i}
					preset={preset}
					setUserChordSymbol={setUserChordSymbol}
				/>
			))}
		</div>
	);
};

export default SymbolPresetList;
