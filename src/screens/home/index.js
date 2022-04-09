import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, Keyboard, NativeModules, Dimensions, FlatList, Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import MovieItem from '../../components/movieItem';
import SearchBar from '../../components/searchBar';
import { vs } from 'react-native-size-matters/extend';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const { width } = Dimensions.get('window')

const Header = ({ fadeAnim, search, onChangeSearch, onSearchPressed, onClose }) => {
  return (
    <View style={styles.header}>
      <Image style={styles.navBar} resizeMode='cover' source={require('@images/nav_bar.png')} />
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.backImage} resizeMode='contain' source={require('@images/Back.png')} />
          <Text style={styles.pageTitle}>Romentic Comedy</Text>
        </View>
        <TouchableOpacity onPress={onSearchPressed}>
          <Image style={styles.search} resizeMode='contain' source={require('@images/search.png')} />
        </TouchableOpacity>
      </View>
      <SearchBar
        onChangeSearch={onChangeSearch}
        onClose={onClose}
        fadeAnim={fadeAnim}
        searchQuery={search} />
    </View>
  )
}

const Home = ({ movies, getMovies }) => {
  const fadeAnim = useRef(new Animated.Value(width + 5)).current
  const [page, setPage] = useState(0)
  const [state, setState] = useState({
    search: '',
    searchResult: [],
    isSearching: false
  })
  const totalPages = 3;
  useEffect(() => {
    getMoviesFromServer(page)
  }, [])

  const getMoviesFromServer = async (page) => {
    let data = {
      "page": page + 1
    }

    await getMovies(data)
    setPage(page + 1)
  }

  const onEndReached = () => {
    if (page < totalPages) {
      getMoviesFromServer(page)
    }
  }

  const onSearchPressed = () => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 350,
        useNativeDriver: true
      }
    ).start();
  }

  const onChangeSearch = (text) => {
    let filtered = movies.filter(item => {
      return item.name.toLowerCase().includes(text.trim().toLowerCase())
    })
    setState(prev => ({
      ...prev,
      search: text,
      isSearching: text.trim().length > 0,
      searchResult: filtered
    }))
  }

  const onClose = () => {
    Keyboard.dismiss()
    Animated.timing(
      fadeAnim,
      {
        toValue: width + 5,
        duration: 350,
        useNativeDriver: true
      }
    ).start();
  }

  const renderItem = ({ item, index }) => {
    return (
      <MovieItem
        imageName={item['poster-image']}
        name={item.name}
      />
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          renderItem={renderItem}
          numColumns={3}
          windowSize={2}
          initialNumToRender={1}
          showsVerticalScrollIndicator={false}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.2}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingTop: vs(56)}}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={{ backgroundColor: 'transparent', height: 50 }} />}
          data={state.isSearching ? state.searchResult : movies}
        />
        <Header
          onChangeSearch={onChangeSearch}
          onSearchPressed={onSearchPressed}
          search={state.search}
          onClose={onClose}
          fadeAnim={fadeAnim}
        />
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (data) => dispatch(actions.getMovies(data))
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Container;
