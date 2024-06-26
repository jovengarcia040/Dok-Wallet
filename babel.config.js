module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // 'module-resolver',
    // {
    //   alias: {
    //     crypto: 'react-native-quick-crypto',
    //     stream: 'stream-browserify',
    //     buffer: '@craftzdog/react-native-buffer',
    //   },
    // },
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
      },
    ],
    ['react-native-paper/babel'],
  ],
};
