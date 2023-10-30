import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('shopslurRole')
    navigate("/")
  }

  const handleLoginClick = () => {
  
      navigate('/login')
    
  }
  const handleLogoClick = () => {
    navigate('/')
  }
  return (
    <nav className='h-[8vh] w-full bg-[#081B33] border-b-2 border-[#738599]'>
      <div className='h-full w-[95vw] flex items-center mx-auto justify-around'>
        <a1 onClick={handleLogoClick} >
        <h11 className='text-white font-bold text-3xl'>
          Shop<span1 className='text-[#738599]'>Slur</span1>
        </h11></a1>
        <div className='h-[55%] bg-[#767D92] rounded-md flex items-center invisible absolute sm:visible sm:relative'>
          <input className='px-2 text-xs bg-[#767D92] border-r-2 border-[#081B33] rounded-l-md shadow-sm focus:outline-none focus:border-none placeholder="Search for anything..."' />
          <button className='h-full mx-2'>
            <img src="search-svgrepo-com.svg" alt="search" className='h-[60%]' />
          </button>
        </div>
        <div className='h-full flex items-center'>
          <Link to="/cart" className='h-[50%] mx-2'>
            <svg viewBox="0 0 24 24" className='h-full mx-2' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.2998 5H22L20 12H8.37675M21 16H9L7 3H4M4 8H2M5 11H2M6 14H2M10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19C9.55228 19 10 19.4477 10 20ZM21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="#738599" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg></Link> 
          <Link to="/login" className='h-[45%] mx-2' >
            <img src="profile-round-1342-svgrepo-com.svg" className='h-full mx-2' alt="" /></Link> 
            {localStorage.getItem('token')?<img src="logout.svg" onClick={logout} className='h-[70%] mx-2' alt="" />:<></>}
            
        </div>
      </div>
    </nav>
  )
}
export default Navbar
