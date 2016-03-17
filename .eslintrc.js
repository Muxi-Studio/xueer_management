module.exports = {
  extends: 'airbnb',
  rules: {
    semi: [2, 'never'],
    'no-console': 0,
  },
  env: {
    browser: 1,
  },
  globals: {
    it: 1,
    describe: 1,
    beforeEach: 1,
    angular: 1,
    expect: 1,
    componentHandler: 1,
  },
}

