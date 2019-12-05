import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      // will only be used to display the movie poster.
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
