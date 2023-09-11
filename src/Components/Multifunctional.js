import React from 'react'

function Multifunctional() {
    function hello()
    {
        alert('Hello! welcome to multifunctional component1');
    }
    function thankyou()
    {
        alert('Thanks for your patience! Good bye!');
    }
  return (
    <div className="d-flex justify-content-center mt-3 mb-1">
      <input type="button" className="btn btn-danger" value="Click me!" onClick={()=>{hello(); thankyou();}} />
    </div>
  )
}

export default Multifunctional
