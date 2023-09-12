import React, { Component } from 'react'

export class Value extends Component {
  render() {
    return (
      <div
        className="size"
        style={{
          background: this.props.value,
          color: this.props.value
        }}
      >
        {this.props.value}
      </div>
    )
  }
}
export default Value;
