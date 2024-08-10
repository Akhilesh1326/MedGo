// import React from 'react'
import { Link } from "react-router-dom"
const Doctor_SignIn = () => {
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
            <label htmlFor="first name">First Name</label>
            <input className="border-emerald-500 border-2" type="text" />
            <label htmlFor="last name">First Name</label>
            <input className="border-emerald-500 border-2" type="text" />
            <label htmlFor="email">DOB</label>
            <input className="border-emerald-500 border-2" type="text" />
            <label htmlFor="gender">gender</label>
            <input className="border-emerald-500 border-2" type="text" />
            
            <Link to=""> <button className="border-emerald-300 border-2 content-center">Next</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor_SignIn
