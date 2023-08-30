module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  // ignorePatterns: ['node_modules'],
  rules: {
    complexity: ['error', { max: 4 }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'max-lines': ['error', { max: 150 }],
    'max-depth': ['error', { max: 2 }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-max-depth': ['error', { max: 3 }],
    'react/jsx-tag-spacing': [
      'error',
      {
        beforeSelfClosing: 'proportional-always',
        beforeClosing: 'proportional-always'
      }
    ],
    'react/self-closing-comp': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline'
      }
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never'
      }
    ],
    'react/jsx-wrap-multilines': 'error'
  }
}
