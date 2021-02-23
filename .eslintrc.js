module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['prettier', 'react', 'jsx-a11y', 'import', 'graphql'],
  env: {
    browser: true,
  },
  globals: {
    __PATH_PREFIX__: true,
    graphql: true,
    config: true,
  },
  settings: {
    'import/core-modules': ['react', 'prop-types'],
    'import/resolver': {
      node: {
        paths: ['./'],
      },
    },
  },
  rules: {
    // Style
    'brace-style': [
      'error',
      'stroustrup',
      {
        allowSingleLine: true,
      },
    ],
    'class-methods-use-this': 'off',
    'function-paren-newline': 'off',
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      {
        ignorePattern: '\\s*<|\\s*className|^import|^\\s*\\{.*\\},$',
      },
    ],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-irregular-whitespace': [
      'error',
      {
        skipTemplates: true,
      },
    ],
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      },
    ],
    'no-underscore-dangle': 'off',

    // Jsx a11y
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',

    // React
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-danger': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unused-prop-types': 'off',
  },
};
