import React from 'react';

import 'custom-piano-keys';

const allRootNoteIndex = {
	C: 0,
	'C#': 1,
	Db: 1,
	D: 2,
	'D#': 3,
	Eb: 3,
	E: 4,
	F: 5,
	'F#': 6,
	Gb: 6,
	G: 7,
	'G#': 8,
	Ab: 8,
	A: 9,
	'A#': 10,
	Bb: 10,
	B: 11,
};

const CustomPianoKeys = ({ renderedChordRaw }) => {
	return (
		<div className={'Showcase_Item'}>
			<h3>Custom Piano Keys</h3>
			<p>
				<code>ChordSymbol</code>'s output data is used as an input to{' '}
				<code>Custom piano keys</code>.
			</p>
			<div>
				{(renderedChordRaw &&
					getPianoKeysComponent(renderedChordRaw)) || <code>-</code>}
			</div>
			<p>
				View on{' '}
				<a href={'https://github.com/jutunen/custom-piano-keys'}>
					Github
				</a>
			</p>
		</div>
	);
};

const getPianoKeysComponent = (chord) => {
	const rootNoteIndex = allRootNoteIndex[chord.normalized.rootNote];

	const mappedNotes = chord.normalized.semitones.map(
		(x) => x + 1 + rootNoteIndex
	);

	const highestNote = mappedNotes[mappedNotes.length - 1];
	const octCount = highestNote > 24 ? 3 : highestNote > 12 ? 2 : 1;

	return (
		<custom-piano-keys
			marked-keys={mappedNotes.join(' ')}
			oct-count={octCount}
		></custom-piano-keys>
	);
};

export default CustomPianoKeys;
