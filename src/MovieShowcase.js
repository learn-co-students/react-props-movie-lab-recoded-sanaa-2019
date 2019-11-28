import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {

    console.log("this", movieData);
    return movieData.map(obj => 
      <MovieCard title={obj.title} poster={obj.poster} genres={obj.genres} IMDBRating={obj.IMDBRating}/>

     // console.log(obj.poster)
    )
    // map over your movieData array and return an array of the correct JSX
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
