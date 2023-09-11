import React, { Component } from 'react'

import singer1 from '../assets/singer1.jpg'
import singer2 from '../assets/singer2.jpg'
import singer3 from '../assets/singer3.jpg'

export class Singers extends Component {
  render() {
    return (
      <div>
        <div className='d-flex justify-content-center'>
        <h3>Popular Singers!!</h3>
        </div>
        <div className='row d-flex justify-content-center m-2'>
          
            <div className='col-sm-3 card m-1'>
                <img src={singer1} style= {{ height : "250px"}} alt = 'Blubberworth'></img>
                <p className='d-flex justify-content-center'>Zoowee Blubberworth</p>
            </div>
            <div className='col-sm-3 card m-1'>
                <img src={singer2}  style= {{ height : "250px"}} alt= 'Wigglewhistle'></img>
                <p className='d-flex justify-content-center'>Peaberry Wigglewhistle</p>
            </div>
            <div className='col-sm-3 card m-1'>
                <img src={singer3}  style= {{ height : "250px"}} alt='Noseface'></img>
                <p className='d-flex justify-content-center'>Buritt Noseface</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Singers
