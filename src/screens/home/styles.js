import { StyleSheet, Platform } from 'react-native';
import { s, vs, ms } from 'react-native-size-matters/extend';
import theme from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    width: "100%",
    height: vs(50),
    top: Platform.OS == 'ios' ? vs(38) : vs(0),
    position: 'absolute'
  },
  navBar: {
    width: "100%",
    position: 'absolute',
    height: vs(65),
  },
  backImage: {
    width: s(16), 
    alignSelf: 'center',
    height: s(16),
  },
  search: {
    width: s(24),
    height: s(24),
    tintColor: '#fff'
  },
  headerContainer: {
    width: '100%',
    height: vs(65),
    paddingHorizontal: s(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  pageTitle: {
    marginLeft: s(10),
    color: '#fff',
    fontSize: ms(20),
    fontFamily: theme.fonts.TitilliumWebLight
  }
});