// import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <h1>MedLinea HomePage</h1>
      <Link to="/user/checkuser"><button>Go to checkuser</button></Link>
      <Link to="/user/login"><button>Log in user</button></Link>
    </div>
  )
}

export default Home
