module.exports = function(api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // alias config
          }
        }
      ],
      [
        'react-native-reanimated/plugin', 
        {
          transform: 'react-native-reanimated/plugin/transformWithIdentifierUtils',  
          assetPlugins: ['react-native-assets-plugin']
        }  
      ]
    ]
  };
};