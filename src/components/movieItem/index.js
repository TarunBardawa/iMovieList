import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { s, vs, ms } from 'react-native-size-matters/extend';
import theme from '@theme';

const getImage = (name) => {
  switch (name) {
    case 'poster1.jpg':
      return require('@images/poster1.jpg')
    case 'poster2.jpg':
      return require('@images/poster2.jpg')
    case 'poster3.jpg':
      return require('@images/poster3.jpg')
    case 'poster4.jpg':
      return require('@images/poster4.jpg')
    case 'poster5.jpg':
      return require('@images/poster5.jpg')
    case 'poster6.jpg':
      return require('@images/poster6.jpg')
    case 'poster7.jpg':
      return require('@images/poster7.jpg')
    case 'poster8.jpg':
      return require('@images/poster8.jpg')
    case 'poster9.jpg':
      return require('@images/poster9.jpg')
    case 'posterthatismissing.jpg':
      return require('@images/placeholder_for_missing_posters.png')

    default:
      break;
  }
}

const MovieItem = ({ imageName, name }) => {
  let image = getImage(imageName)
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} resizeMode='cover' source={image} />
      </View>
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: s(105),
    marginHorizontal: s(10),
    overflow: 'hidden'
  },
  image: {
    height: vs(180),
  },
  title: {
    color: '#fff',
    marginTop: vs(10),
    fontSize: ms(16),
    fontFamily: theme.fonts.TitilliumWebLight
  }
});

export default MovieItem;
