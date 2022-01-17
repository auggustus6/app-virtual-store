module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['.'],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          "@assets": './src/assets',
          "@components": './src/presentation/components',
          "@screens": './src/presentation/screens',
          "@styles": './src/presentation/styles',
          "@hooks": './src/application/hooks',
          "@routes": './src/main/routes',
          "@shared": './src/shared',
        },
      }]
    ]
  };
};
