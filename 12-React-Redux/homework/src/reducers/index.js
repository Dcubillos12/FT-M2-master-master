import { GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITES} from "../actions";

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};

//getMovies, getMovieDetail, removeMovieFavorite,addMovieFavorite
function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    // dispatch({ type: GET_MOVIES, payload: json });
    if (action.type === GET_MOVIES) {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    //dispatch({ type: GET_MOVIE_DETAIL, payload: json});
    if (action.type === GET_MOVIE_DETAIL) {
      return{
        ...state,
        movieDetail: action.payload
      }
    }
    // REMOVE_MOVIE_FAVORITES, payload: id
    if (action.type === REMOVE_MOVIE_FAVORITES) {
      return{
        ...state,
        moviesFavourites : state.moviesFavourites.filter(movie => movie.id !== action.payload)//eliminar un elemento filtrado por id
      }
    }
    return state;
}
  
export default rootReducer;