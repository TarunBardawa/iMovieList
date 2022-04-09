import { Platform } from 'react-native';
const theme = {
  dark: false,
  colors: {
    white: '#fff',
    background: '#000',
  },

  fonts: Platform.select({
    ios: {
      'TitilliumWebRegular': "TitilliumWeb-Regular",
      'TitilliumWebLight': "TitilliumWeb-Light",
      'TitilliumWebBold': "TitilliumWeb-Bold",
      'TitilliumWebSemibold': "TitilliumWeb-Semibold",
    },
    android: {
      'TitilliumWebRegular': "TitilliumWeb-Regular",
      'TitilliumWebLight': "TitilliumWeb-Light",
      'TitilliumWebBold': "TitilliumWeb-Bold",
      'TitilliumWebSemibold': "TitilliumWeb-Semibold",
    }
  })
};

export default theme;
