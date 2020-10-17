module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	plugins: ['react', 'react-hooks'],

	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
		jsx: true,
	},
	rules: {
		'no-console': 'error',
		'linebreak-style': ['error', 'unix'],
		'no-shadow': ['error', { builtinGlobals: true }],
		'no-mixed-spaces-and-tabs': ['off'],

		'react/prop-types': ['off'],

		'react-hooks/rules-of-hooks': ['error'],
		'react-hooks/exhaustive-deps': ['warn'],
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
};
