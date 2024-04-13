/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'generator-star-spacing': 'off',
		'arrow-parens': 'off',
		'one-var': 'off',
		'no-void': 'off',
		'multiline-ternary': 'off',

		'import/first': 'off',
		'import/namespace': 'error',
		'import/default': 'error',
		'import/export': 'error',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',

		// The core 'import/named' rules
		// does not work with type definitions
		'import/named': 'off',

		'prefer-promise-reject-errors': 'off',

		quotes: ['warn', 'single', { avoidEscape: true }],

		// this rule, if on, would require explicit return type on the `render` function
		'@typescript-eslint/explicit-function-return-type': 'off',

		// in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-empty-function': 'off',

		// The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
		// does not work with type definitions
		'no-unused-vars': 'off',

		// allow debugger during development only
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// eslint
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'array-bracket-newline': ['error', 'consistent'],
		'array-element-newline': ['error', 'consistent'],
		'block-spacing': 'error',
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'func-call-spacing': 'off',
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		'implicit-arrow-linebreak': ['error', 'beside'],
		indent: ['error', 'tab'],
		'key-spacing': ['error', { beforeColon: false, afterColon: true }],
		'keyword-spacing': [
			'error',
			{
				overrides: {
					if: { after: false },
					for: { after: false },
					while: { after: false },
					switch: { after: false },
				},
			},
		],
		'object-curly-newline': ['error', { consistent: true }],
		'object-curly-spacing': ['error', 'always'],
		'one-var': ['error', 'never'],
		'padded-blocks': ['error', 'never'],
		'quote-props': ['error', 'as-needed', { numbers: true }],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		semi: ['error', 'always', { omitLastInOneLineBlock: true }],
		'semi-spacing': ['error', { before: false, after: true }],
		'semi-style': ['error', 'last'],
		'space-before-blocks': ['error'],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'space-infix-ops': ['error', { int32Hint: false }],
		'space-unary-ops': ['error', { words: true, nonwords: false }],
		'switch-colon-spacing': ['error', { after: true, before: false }],
		'no-var': 'error',
		'no-tabs': 'off',

		// vue
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		'vue/no-v-html': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/no-setup-props-destructure': 'off',
		'vue/arrow-spacing': ['error'],
		'vue/block-spacing': ['error'],
		'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'vue/key-spacing': ['error', { afterColon: true }],
		'vue/comma-spacing': ['error', { before: false, after: true }],
		'vue/space-infix-ops': ['error'],
	},
};
