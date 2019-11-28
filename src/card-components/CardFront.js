import React, { Component } from 'react';

export default class CardFront extends Component {

  render(props) {
    return (
      // only poster in front card!!!
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
     
      </div>
    )
  }
}
