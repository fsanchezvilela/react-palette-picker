module.exports = {
	env: {
		node: true,
		browser: true,
		es6: true
	},
	extends: [ 'eslint:recommended', 'plugin:react/recommended' ],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [ 'react', 'react-hooks' ],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/display-name': [ 0 ]
	}
};