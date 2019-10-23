module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
        alias: {
          '@app': './src/app',
          '@assets': './src/assets',
          '@config': './src/config',
          '@constants': './src/constants',
          '@components': './src/app/components',
          '@screens': './src/app/screens',
          '@services': './src/services',
          '@redux': './src/redux',
          '@utils': './src/utils'
        }
      }
    ]
  ]
};
