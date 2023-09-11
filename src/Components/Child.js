import React, { Component } from 'react'

export class Child extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.username}</p>
        <p>Hobby : {this.props.hobby}</p>

      </div>
    )
  }
}

export default Child
