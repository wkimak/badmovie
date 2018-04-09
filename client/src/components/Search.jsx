import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: []
    }
  }

  componentDidMount() {
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios.get('http://localhost:3000/genres')
    .then((data) => {
      console.log(data);
    })

    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>
{/* 


    Make the select options dynamic from genres !!!

    How can you tell which option has been selected from here?

*/}

        <select>
          <option value="theway">The Way</option>
          <option value="thisway">This Way</option>
          <option value="thatway">That Way</option>
        </select>
        <br/><br/>

        <button>Search</button>

      </div>)
  }
}

export default Search