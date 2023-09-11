import React, { Component } from 'react'
import Child from './Child'

const user = {
    username : "Ayushree",
    hobby : "Painting"
}

export class Parent extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center border'>
        
        <Child {...user}></Child>
      </div>
    )
  }
}

export default Parent
