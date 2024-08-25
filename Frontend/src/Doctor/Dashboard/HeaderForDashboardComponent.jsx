import { Link } from "react-router-dom"

const HeaderForDashboardComponent = () => {
  return (
    <div>
      <header className='w-full border-2 border-black flex justify-between h-16'>
        <span>Logo</span>
        <div>
        <span className='ml-10'>button1</span>
        <Link to="/user/doctor/dashboard"><button className='ml-10'>Dashboard</button></Link>
        </div>
      </header>
    </div>
  )
}

export default HeaderForDashboardComponent
