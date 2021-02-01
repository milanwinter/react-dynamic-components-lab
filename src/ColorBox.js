import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let newValue = this.props.opacity
    return (
      
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {newValue >= 0.2 ? <ColorBox opacity={newValue -= .1}/> : null}
      </div>
    )
  }

}

