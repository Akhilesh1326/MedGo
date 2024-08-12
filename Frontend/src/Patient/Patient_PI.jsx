// import React from 'react'
import { Link } from "react-router-dom"

const Paitent_PI = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
      <h1>Patient{"'"}s Sign in page - page3</h1>
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
            
            <Link to="/user/patient/validation"> <button className="border-emerald-300 border-2 content-center">Next</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paitent_PI
