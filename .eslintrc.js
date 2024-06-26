module.exports = {
  plugins: [
    // ...
    'redux-saga',
    'react-redux',
  ],
  extends: [
    '@react-native-community',
    'plugin:redux-saga/recommended',
    'plugin:react-redux/recommended',
  ],
  root: true,
  parser: '@babel/eslint-parser',
};
