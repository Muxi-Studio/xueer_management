module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
      sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: ['html'],
  // check if imports actually resolve
  'settings': {
      'import/resolver': {
          'webpack': {
              'config': './webpack.dev.config.js'
          }
      }
  },
  'globals': {
      'document': true,
      'fetch': true,
      'window': true,
      'history': true
  },
  // add your custom rules here
  'rules': {
      // don't require .vue extension when importing
      'import/extensions': [0, 'always', {
          'js': 'never',
          'vue': 'never'
      }],
      'import/no-unresolved': [0, {
          ignore: ['\.vue$', '\.js$']
      }],
      'eqeqeq': 'off',
      'quotes': ['error', 'single'],
      'no-console': 1,
      'no-tabs': 0,
      'indent': ['error', 'tab'],
      'semi': ['error', 'never'],
      'camelcase': 0,
      'no-plusplus': 0,
      'arrow-parens': 0,
      'prefer-template': 0,
      'no-param-reassign': 0,
      'no-shadow': 0,
      'func-names': 0,
      'no-unused-expressions': 0,
      'arrow-body-style': 0,
  }
}
