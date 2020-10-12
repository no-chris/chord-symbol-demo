import React from 'react';

const ResetConfig = ({
	setUserChordSymbol,
	setTransposeValue,
	setHarmonizeAccidentals,
	setUseFlats,
}) => {
	const handleClick = () => {
		setUserChordSymbol('');
		setTransposeValue(0);
		setHarmonizeAccidentals(false);
		setUseFlats(false);
	};

	return (
		<div className={'ui-RendererConfigItem_Container '}>
			<button onClick={handleClick}>Reset</button>
		</div>
	);
};

export default ResetConfig;
