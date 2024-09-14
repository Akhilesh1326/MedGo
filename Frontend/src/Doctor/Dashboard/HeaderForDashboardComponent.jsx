import { Link } from "react-router-dom"

const HeaderForDashboardComponent = () => {
  return (
    <div>
      <header className='w-full border-b-2 border-[#174876] flex justify-between h-16 bg-[#96BADC]'>
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
