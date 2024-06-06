export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const REMOVE_MOVIE_FAVORITES = 'REMOVE_MOVIE_FAVORITES'; 


const API_KEY = 'fbd86058';

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE,
             payload: payload
            };
}

export function removeMovieFavorites(id) {
    return{
        type: REMOVE_MOVIE_FAVORITES, payload: id};
}

export function getMovies(titulo) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
            console.log("consoloe desde la action")
            console.log(json.Search)
            dispatch({ type: GET_MOVIES, payload: json });
        });
    };
}

export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_MOVIE_DETAIL, payload: json});
        });
    };
}