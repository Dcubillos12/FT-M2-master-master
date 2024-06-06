import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite } from "../../actions";


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {//const [title, setTitle] = useState('') con hook
      title: ""
    };
  }
  //Manejador de Cambios
  handleChange(event) {
    console.log(event.target.value)
    //modificar el estado local
    this.setState({ title: event.target.value });
  }
  //Funcion que envia la data
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    //toda la parte de la interfas todo lo que ve el cliente
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input //siempre un input tendra el evento onChange
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {this.props.movies.map(m => 
          <div>
            <Link to={`/movie/${m.imdbID}`}>
              {m.Title}
            </Link>
            <button onClick={() => {this.props.addMovieFavorite({title: m.Title, id: m.imdbID})} }>Fav</button>
          </div>
         )}   
        </ul>
      </div>
    );
  }
}
//permmite al componente recibir el estado global o parte del estado global en forma de props
function mapStateToProps(state) {
  console.log(state)
  return {
    movies: state.moviesLoaded
  };
}
//va a permitir al componente ejecutar action creator
//permitir al componente recibiri la action creator en forma de props para utilizarlas
function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);