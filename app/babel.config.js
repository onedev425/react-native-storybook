module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Ensure propert naming of styled react components
      'babel-plugin-styled-components',
      // Allow importing .graphql files
      'import-graphql',
      [
        'module:react-native-dotenv',
        {
          safe: true,
          allowUndefined: true,
        },
      ],
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: {
            '~': './src',
          },
        },
      ],
    ],
  }
}
