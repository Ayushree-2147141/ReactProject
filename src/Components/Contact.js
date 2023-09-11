import React from 'react'

function Contact() {
    function contactFunction()
    {
      alert('event fired!')
    }

  return (
    <div className="d-flex justify-content-center">
      <h3 onClick={contactFunction}>Click Contact</h3>
    </div>
  )
}

export default Contact
