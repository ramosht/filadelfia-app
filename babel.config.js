module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@services': './src/services',
          '@styles': './src/styles',
          '@config': './src/config',
          '@routes': './src/routes',
          "@templates": './src/templates',
          "@pages": './src/pages',
          "@contexts": './src/contexts',
          "@assets": './src/assets',
        },
      },
    ],
  ],
};
