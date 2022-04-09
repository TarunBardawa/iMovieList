import React from 'react';
import { Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import theme from '@theme';
import { vs, ms } from 'react-native-size-matters/extend';

const SearchBar = ({ fadeAnim, onChangeSearch, searchQuery, onClose}) => {
  return (
    <Animated.View style={[styles.container, {transform: [{ translateX: fadeAnim }]}]}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{width: '75%', height: vs(45)}}
      />
      <TouchableOpacity onPress={onClose} style={styles.cancelBtn}>
        <Text style={styles.cancel}>Cancel</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: vs(50),
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  cancel: {
    color: '#fff',
    fontSize: ms(16)
  },
  cancelBtn: {
    width: '25%',
    alignItems: 'center'
  }
});

export default SearchBar;
