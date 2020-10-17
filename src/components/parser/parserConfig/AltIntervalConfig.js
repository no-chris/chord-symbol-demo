import React from 'react';

const AltIntervalConfig = ({
	id,
	label,
	setAltIntervals,
	altIntervals,
	disabled,
}) => {
	const handleChange = (e) => {
		altIntervals[id] = e.target.checked;
		setAltIntervals(Object.assign({}, altIntervals));
	};

	return (
		<div className={'pc-AltIntervalList_Item'}>
			<input
				id={id}
				type={'checkbox'}
				value={altIntervals[id]}
				checked={altIntervals[id]}
				onChange={handleChange}
				disabled={disabled}
				className={'pc-AltIntervalList_Checkbox'}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export default AltIntervalConfig;
