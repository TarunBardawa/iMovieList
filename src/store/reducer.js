import * as types from './types';
import _ from 'lodash';
import firstPage from '../../mock/CONTENTLISTINGPAGE-PAGE1.json';
import secondPage from '../../mock/CONTENTLISTINGPAGE-PAGE2.json';
import thirdPage from '../../mock/CONTENTLISTINGPAGE-PAGE3.json';

const initialState = {
  movies: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.GET_MOVIES: {
      if (action.payload) {
        const { page } = action.payload;
        let oldMovies = _.cloneDeep(state.movies)
        let movies = []
        if(page == 1) {
          let nextMovies = firstPage.page['content-items'].content;
          movies = oldMovies.concat(nextMovies)
        }
        if(page == 2) {
          let nextMovies = secondPage.page['content-items'].content;
          movies = oldMovies.concat(nextMovies)
        }
        if(page == 3) {
          let nextMovies = thirdPage.page['content-items'].content;
          movies = oldMovies.concat(nextMovies)
        }
        return {
          ...state,
          movies: movies,
        };
      } else {
        return { ...state }
      }
    }
    
    default: {
      return { ...state };
    }
  }
};

export default reducer;
