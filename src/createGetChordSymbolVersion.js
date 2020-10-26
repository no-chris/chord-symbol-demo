/* eslint-env node */
const packageJson = require('../package.json');
const fs = require('fs');

const chordSymbolVersion = packageJson.dependencies['chord-symbol'].replace(
	'^',
	'v'
);

const fileContent = `export default () => '${chordSymbolVersion}';`;

fs.writeFileSync('./src/getChordSymbolVersion.js', fileContent);
