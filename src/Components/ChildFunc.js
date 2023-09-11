import React from 'react'

function ChildFunc(props) {
  return (
    <div>
      <p>This is the Child Component!</p>
      <p>Username :  {props.username} </p>
    </div>
  )
}

export default ChildFunc
