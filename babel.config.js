module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["dotenv-import", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": false
    }],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@components': ['./src/components'],
          '@screens': ['./src/screens'],
          '@services': ['./src/services'],
          '@images': ['./assets/images'],
          '@config': ['./src/config'],
          '@utils': ['./src/utils'],
          '@store': ['./src/store'],
          '@theme': ['./src/themes/theme']
        },
      },
    ],
  ]
};
