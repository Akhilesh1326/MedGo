import { Link } from "react-router-dom"

const HeaderForDashboardComponent = () => {
  return (
    <div>
      <header className='w-full border-b-2 border-[#174876] flex justify-between  bg-[#96BADC] px-5 py-4'>
        <span>Logo</span>
        <div>
        <Link to="/user/doctor/dashboard"><button className='bg-[#1c5081] py-2 px-2 rounded-md font-thin hover:shadow-md hover:shadow-[#3794eb] duration-300 hover:-translate-y-1'>Dashboard</button></Link>
        </div>
      </header>
    </div>
  )
}

export default HeaderForDashboardComponent
