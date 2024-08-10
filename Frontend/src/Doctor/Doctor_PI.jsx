import { Link } from "react-router-dom"

// import React from 'react'
Link

const Doctor_PI = () => {
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
            <label htmlFor="first name">Medical Licence Number</label>
            <input className="border-emerald-500 border-2" type="text" />
            <label htmlFor="last name">Specialization</label>
            <input className="border-emerald-500 border-2" type="text" />
            <label htmlFor="email">Years of Experience</label>
            <input className="border-emerald-500 border-2" type="text" />
            <label htmlFor="gender">Medical School/Institution</label>
            <input className="border-emerald-500 border-2" type="text" />
            
            <Link to=""> <button className="border-emerald-300 border-2 content-center">Next</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor_PI
