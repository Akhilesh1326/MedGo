// import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>medGo HomePage</h1>
      <Link to="/user/checkuser"><button>Go to checkuser</button></Link>
    </div>
  )
}

export default Home
