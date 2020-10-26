import React, { useEffect, useRef } from 'react';
import { BbFormat } from 'bb-chord-symbol'

import './CanvasRenderer.scss';

export const CanvasComponent = (renderedChordRaw) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		draw(context);
	}, [renderedChordRaw]);

	const font = '80px Petaluma Script';

	const draw = (ctx) => {
		ctx.save();
		ctx.font = font;
		const formatter = new BbFormat(ctx);

		const laidOutChord = formatter.layoutChordSymbol(
			renderedChordRaw.input.symbol
		);
		if (!laidOutChord) return;

		const margin = 10;

		ctx.canvas.width = laidOutChord.bbox.width + margin * 2;
		ctx.canvas.height = laidOutChord.bbox.height + margin * 2;

		// After resizing the canvas, the context is reset
		ctx.font = font;

		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		ctx.translate(margin, margin - laidOutChord.bbox.y);
		formatter.fillText(
			laidOutChord,
			laidOutChord.bbox.x,
			laidOutChord.bbox.y + laidOutChord.yOverflow
		);
		ctx.restore();
	};

	return <canvas ref={canvasRef} />;
};
