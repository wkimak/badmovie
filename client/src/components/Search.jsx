import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('/genres')
    .then((response) => {
      this.setState({
        genres: response.data.genres,
        selectValue: ''
      })
    })
    .catch((err) => {
      console.log(err);
    })

  }

  handleChange(event){
    this.setState({
      selectValue: event.target.value
    })
  }

  render() {

    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>

        <select value={this.state.value} onChange={this.handleChange}>
          {this.state.genres.map((genre, i) => {
            return(
              <option key={i} value={genre.id}>{genre.name}</option>
            );
          })}
        </select>
        <br/><br/>

        <button onClick={() => this.props.getMovies(this.state.selectValue)}>Search</button>

      </div>)
  }
}

export default Search