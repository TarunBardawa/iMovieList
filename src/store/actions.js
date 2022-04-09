import * as types from './types';
// import { movies } from '../services'

export function getMovies(data) {
  return {
    type: types.GET_MOVIES,
    payload: data
    // payload: movies.getMovies(data),
  }
}