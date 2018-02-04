import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

class Fetch extends Component {
  state = {
    movieList: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=ae3ea9f6&s=star&page=1&type=movie')
      .then(response => response.json())
      .then((itemList) => { 
        this.setState({ 
          movieList: [
            ...this.state.movieList,
            ...itemList.Search
          ] 
        }) 
      })
    
      console.log("async")
  }

  renderMovie() {
    const { movieList } = this.state
    return (
      <div>
        {
          movieList.map(movie => (
            <div key={movie.imdbID}>
              <span>
                <img src={movie.Poster} />
              </span>
              <span>
                {movie.Title}
              </span>
            </div>
          ))
        }
      </div>
    )
  }

  render() {
    console.log('render', this.state)
    return (
      <div>
        {this.renderMovie()}
      </div>
    )
  }
}

export default Fetch
