import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';


import './Movie.css';

class Movie extends React.Component {
    //Se ejecuta luego de renderizado por primera vez
    componentDidMount(){
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }

    render() {
        return (
            <div className="movie-detail">
                <h2>Titulo: {this.props.movieDetail.Title} </h2>
                <p>Director: {this.props.movieDetail.Director}</p>
                <p>Lenguaje: {this.props.movieDetail.Language}</p>
                <img src={this.props.movieDetail.Poster} />
                <p>{this.props.movieDetail.Plot}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        movieDetail: state.movieDetail
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getMovieDetail: id => dispatch(getMovieDetail(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);