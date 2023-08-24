import React, { Component } from 'react'

class Photo extends Component {

    render() {
    return (
        <img
            src={this.props.src}
            className="full-gallery1">
            </img>  
    )
  }
}

export default Photo