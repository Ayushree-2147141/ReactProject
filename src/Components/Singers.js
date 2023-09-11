import React, { Component } from 'react'
import logo from '../logo.svg';

import singer1 from '../assets/singer1.jpg'
import singer2 from '../assets/singer2.jpg'
import singer3 from '../assets/singer3.jpg'

export class Singers extends Component {
  render() {
    return (
      <div>
        <div className='row d-flex justify-content-center m-2'>
            <div className='col-sm-3 card m-1'>
                <img src={singer1} style= {{ height : "250px"}}></img>
                <p className='d-flex justify-content-center'>Full Name</p>
            </div>
            <div className='col-sm-3 card m-1'>
                <img src={singer2}  style= {{ height : "250px"}}></img>
                <p className='d-flex justify-content-center'>Full Name</p>
            </div>
            <div className='col-sm-3 card m-1'>
                <img src={singer3}  style= {{ height : "250px"}}></img>
                <p className='d-flex justify-content-center'>Full Name</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Singers
