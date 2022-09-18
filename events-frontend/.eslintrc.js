module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'spaced-comment': 'off',
    'react/no-array-index-key': 'warn',
    'no-param-reassign': 'warn',
    'object-shorthand': ['error', 'consistent'],
    'react/jsx-props-no-spreading': [
      1,
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'enforce',
      },
    ],
    'no-else-return': ['error', { allowElseIf: true }],
    'class-methods-use-this': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'ignore', propElementValues: 'always' },
    ],
    'consistent-return': ['warn', { treatUndefinedAsUnspecified: true }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
