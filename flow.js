module.exports = {
  extends: [
    './rules/base',
    './rules/low'
  ].map(require.resolve),
  rules: {}
};
