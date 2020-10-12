import React from 'react';

const HarmonizeAccidentalsConfig = ({
	harmonizeAccidentals,
	setHarmonizeAccidentals,
}) => {
	const handleChange = (e) => {
		setHarmonizeAccidentals(e.target.checked);
	};

	return (
		<div>
			<input
				type={'checkbox'}
				value={harmonizeAccidentals}
				onChange={handleChange}
				id={'harmonizeAccidentals'}
			/>
			<label htmlFor={'harmonizeAccidentals'}>
				{' '}
				Harmonize accidentals
			</label>
		</div>
	);
};

export default HarmonizeAccidentalsConfig;
