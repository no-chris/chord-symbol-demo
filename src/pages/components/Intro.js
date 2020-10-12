import React from 'react';

const Intro = () => {
	return (
		<div>
			<p>
				<code>ChordSymbol</code> is a Javascript/NodeJs library for
				parsing and rendering chord symbols. It transforms a string
				representing a chord (<code>Cm7</code>, for example), into a
				suite of intervals: <code>1</code>, <code>b3</code>,{' '}
				<code>5</code>, <code>b7</code>. It also normalizes the chord
				characteristics by isolating its quality, extensions,
				alterations, added and omitted notes, which allows rendering the
				chords in a normalized way.
			</p>
			<ul>
				<li>
					Read the full{' '}
					<a href={'https://github.com/no-chris/chord-symbol#readme'}>
						README
					</a>
				</li>
				<li>
					<a
						href={
							'https://github.com/no-chris/chord-symbol/blob/master/API.md'
						}
					>
						API documentation
					</a>
				</li>
				<li>
					See the{' '}
					<a href={'https://github.com/no-chris/chord-symbol'}>
						Github repository
					</a>
				</li>
				<li>
					See on{' '}
					<a href={'https://www.npmjs.com/package/chord-symbol'}>
						NPM
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Intro;
