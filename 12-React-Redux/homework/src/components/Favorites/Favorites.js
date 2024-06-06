import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorites } from "../../actions";
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies?.map(m =>
            <div>
            <Link to={`/movie/${m.id}`}>
              {m.title}
            </Link>
            <button onClick={() => {this.props.remove(m.id)}}>X</button>
          </div>
          )}
        </ul>
      </div>
    );
  }
}

//primero que queremos es que despache
function mapDispatchToProps(dispatch) {
  return{
    remove:(id) => dispatch(removeMovieFavorites(id))
  }
}

function mapStateToProps(state) {
  return{
    movies: state.moviesFavourites
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);