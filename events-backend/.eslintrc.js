module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'react/require-default-props': 'off',
    'spaced-comment': 'off',
    'no-param-reassign': 'warn',
    'object-shorthand': ['error', 'consistent'],
    'no-else-return': ['error', { allowElseIf: true }],
    'class-methods-use-this': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    'consistent-return': ['warn', { treatUndefinedAsUnspecified: true }],
  },
};
