import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import axios from 'axios';
import Search from './components/Search.jsx';
import Movies from './components/Movies.jsx';


class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [{deway: "movies"}],
      favorites: [{deway: "favorites"}],
      showFaves: false
  	}

    this.getMovies = this.getMovies.bind(this)
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.swapFavorites = this.swapFavorites.bind(this)
  }

  getMovies(genreId) {
    //make an axios request to your server on the GET SEARCH endpoint
    axios.get('/search', {params:{genreId: genreId}})
      .then((response) => {
        console.log('SEARCH GET SUCCESFUL', response);
      })
      .catch((err) => {
        console.log(err);
      })

  }

  saveMovie() {
    //same as above but do something diff
  }

  deleteMovie() {
    //same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    })
  }

  render () {
  	return (
    <div className="app">
      <header className="navbar"><h1>Bad Movies</h1></header> 
      
      <div className="main">
        <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
        <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves}/>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));