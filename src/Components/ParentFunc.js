import React from 'react'
import ChildFunc from './ChildFunc'

const parentData = 
{
    username : "Parent"
}

export default function ParentFunc() {
  return (
    <div className="d-flex justify-content-center border">
        
        <ChildFunc {...parentData} />
        
      
    </div>
  )
}
