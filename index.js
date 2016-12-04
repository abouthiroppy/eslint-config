module.exports = {
  extends: [
    './rules/base',
    './rules/flow',
    './rules/react'
  ].map(require.resolve),
  rules: {
    'react/prop-types': 0
  }
};
