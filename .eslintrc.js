module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'prettier'],
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
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-indent-props': [2, 2],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true
      }
    ],
    'react/prefer-es6-class': [2, 'always'],
    'react/button-has-type': [1],
    'react/no-direct-mutation-state': [2],
    'react/jsx-pascal-case': [
      2,
      {
        ignore: [
          'TEST_COMPONENT',
          'TEST',
          'COMPONENT',
          'TESTCOMPONENT',
          'CHECK',
          'ANY'
        ]
      }
    ],
    'react/no-is-mounted': [2],
    'react/jsx-no-useless-fragment': [1],
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/jsx-max-depth': [1, { max: 4 }],
    'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
