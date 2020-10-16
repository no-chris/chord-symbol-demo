import './Renderer.scss';

import React from 'react';

import RendererConfig from './rendererConfig/RendererConfig';
import Rendered from './rendered/Rendered';

const Renderer = ({
	harmonizeAccidentals,
	simplify,
	transposeValue,
	useFlats,
	useShortNamings,
	setHarmonizeAccidentals,
	setSimplify,
	setTransposeValue,
	setUseFlats,
	setUseShortNamings,
	renderedChordTxt,
	renderedChordRaw,
}) => {
	return (
		<div>
			<h3>Renderer</h3>
			<div className={'Renderer_Container'}>
				<RendererConfig
					harmonizeAccidentals={harmonizeAccidentals}
					simplify={simplify}
					transposeValue={transposeValue}
					useFlats={useFlats}
					useShortNamings={useShortNamings}
					setHarmonizeAccidentals={setHarmonizeAccidentals}
					setSimplify={setSimplify}
					setTransposeValue={setTransposeValue}
					setUseFlats={setUseFlats}
					setUseShortNamings={setUseShortNamings}
				/>
				<Rendered
					renderedChordTxt={renderedChordTxt}
					renderedChordRaw={renderedChordRaw}
				/>
			</div>
		</div>
	);
};

export default Renderer;
