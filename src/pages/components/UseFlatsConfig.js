import React from 'react';

const UseFlatsConfig = ({ useFlats, setUseFlats, harmonizeAccidentals }) => {
	const isDisabled = !harmonizeAccidentals;
	const handleChange = (e) => {
		setUseFlats(e.target.checked);
	};

	return (
		<div>
			<input
				type={'checkbox'}
				value={useFlats}
				onChange={handleChange}
				id={'useFlats'}
				disabled={isDisabled}
			/>
			<label htmlFor={'useFlats'}> Use flats</label>
		</div>
	);
};

export default UseFlatsConfig;
