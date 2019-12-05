import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    console.log("this", movieData);

    // map over your movieData array and return an array of the correct JSX
    return movieData.map(element=>      
    <MovieCard title={element.title} poster={element.poster} genres={element.genres} IMDBRating={element.IMDBRating}/>
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
