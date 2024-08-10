import { Link } from "react-router-dom"

// import React from 'react'

const Doctor_Validation = () => {
  return (
<div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex border-black border-2 mt-20 ">
          <div className="border-black border-2">
            <div className="border-blue-400 mx-4 my-4">
              logo
            </div>
          </div>
          <div className="border-black border-2 flex flex-col">
            <label htmlFor="first name">Upload Proof of Medical License</label>
            <input className="border-emerald-500 border-2" type="text" />
            <label htmlFor="last name">Government-issued ID</label>
            <input className="border-emerald-500 border-2" type="text" />
            <label htmlFor="email">Phone number</label>
            <input className="border-emerald-500 border-2" type="text" />
            <label htmlFor="gender">Get OTP</label>
            <input className="border-emerald-500 border-2" type="text" />
            
            <Link to=""> <button className="border-emerald-300 border-2 content-center">Next</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor_Validation
