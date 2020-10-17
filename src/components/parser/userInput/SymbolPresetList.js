import React from 'react';
import SymbolPreset from './SymbolPreset';

const SymbolPresetList = ({ setUserChordSymbol }) => {
	const presets = [
		'G7/B',
		'Cm7b5',
		'Abb9#11',
		'Fish',
		'Bbalt.',
		'C#5',
		'F#/Bb',
		'RéM7mi',
		'EbMINOR69',
		'G#MI7(add 11, omit 5)',
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
