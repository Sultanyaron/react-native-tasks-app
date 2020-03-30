module.exports = {
	root: true,
	extends: '@react-native-community',
	rules: {
		'prettier/prettier': 0,
		'jsx-quotes': ['error', 'prefer-single'],
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
};
