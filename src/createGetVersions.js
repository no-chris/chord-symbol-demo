/* eslint-env node */
const packageJson = require('../package.json');
const fs = require('fs');

const chordSymbolVersion = packageJson.dependencies['chord-symbol'].replace(
	'^',
	'v'
);
const chordSymbolMusicXmlVersion = packageJson.dependencies[
	'chord-symbol-musicxml'
].replace('^', 'v');

const versions = {
	'chord-symbol': chordSymbolVersion,
	'chord-symbol-musicxml': chordSymbolMusicXmlVersion,
};
const serialized = JSON.stringify(versions).replace(/"/g, "'");

const fileContent = `export default () => (${serialized});`;

fs.writeFileSync('./src/getVersions.js', fileContent);
