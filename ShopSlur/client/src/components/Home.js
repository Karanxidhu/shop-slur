import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  const openShop = ()=>{
    if(localStorage.getItem('shopslurRole')== 'SE'){
      navigate('/sellerproducts');
    }
    else{
      alert("create a seller account for adding your shop")
      navigate('/signup');
    }
  }

  const handleShopClick = () => {
    navigate('/shop')
  }
  return (
    
    <div className='min-h-[92vh] bg-[#081B33] overflow-hidden pb-10'>
      <div className='w-full mx-auto flex '>
        <img src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=673&q=80" alt="" className='h-[92vh] transition duration-300 ease-in-out hover:scale-110' />
        <img src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" alt="" className='h-[92vh] transition duration-300 ease-in-out hover:scale-110' />
        <img src="https://images.unsplash.com/photo-1637536701369-f815af927b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80" alt="" className='h-[92vh] transition duration-300 ease-in-out hover:scale-110' />
        <img src="https://images.unsplash.com/photo-1651165044804-23f06a49ad08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" className='h-[92vh] transition duration-300 ease-in-out hover:scale-110' />
      </div>
      <div className='w-full flex flex-wrap xl:flex-nowrap'>
        <div className='w-full overflow-hidden'>
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className='transition duration-300 ease-in-out hover:scale-110' />
        </div>
        <div className='w-full flex flex-col items-center'>

          <h1 className='text-6xl lg:text-7xl xl:text-8xl px-10 font-semibold text-[#C8CBD3] text-center mt-10 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-slate-800 to-slate-100 transition duration-300 ease-in-out '>Discover Your Perfect Look!</h1>
          <p className='px-10 mt-9 text-[#767D92] text-2xl'>
            <span className='hover:text-[#C8CBD3] transition duration-500 ease-in-out'>Get ready to elevate your style with our exquisite collection of clothing</span>.
            <span className='hover:text-[#C8CBD3] transition duration-500 ease-in-out'>Whether you're searching for the latest trends or timeless classics</span>,
            <span className='hover:text-[#C8CBD3] transition duration-500 ease-in-out'> we've got something for everyone</span>.
            <span className='hover:text-[#C8CBD3] transition duration-500 ease-in-out'>Explore our curated selection and find your favorite outfit that expresses your unique personality</span> </p>
            <div className='mt-3'>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleShopClick}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
              Go to shop
            </span>
          </button></div>
        </div>
      </div>

      <div className='w-full flex flex-wrap xl:flex-nowrap'>
        <div className='w-full flex flex-col items-center'>
          <h1 className='text-6xl lg:text-7xl xl:text-8xl px-10 font-semibold text-[#C8CBD3] text-center mt-10 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-slate-100 to-slate-800 transition duration-300 ease-in-out'>Unveil Your Unique Style!</h1>
          <p className='px-10 mt-9 text-2xl text-[#767D92]'>
            <span className='hover:text-[#C8CBD3] transition duration-500 ease-in-out'>But that's not all – we're not just about buying</span> ,
            <span className='hover:text-[#C8CBD3] transition duration-500 ease-in-out'>we're about empowering you to become a trendsetter yourself</span>  .
            <span className='hover:text-[#C8CBD3] transition duration-500 ease-in-out'>If you're a fashion-forward individual with an eye for design</span>
            ,
            <span className='hover:text-[#C8CBD3] transition duration-500 ease-in-out'>why not turn your passion into profit?</span>
            <span className='hover:text-[#C8CBD3] transition duration-500 ease-in-out'> Join our community and start selling your own brand's clothing right here on our platform</span> .</p>
            <div className='mt-5'>
              
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span onClick={openShop} className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
              Open your store
            </span>
          </button></div>
        </div>
        <div className='w-full overflow-hidden'>
          <img src="https://images.unsplash.com/photo-1621018987522-73cf1cf9ae8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className='transition duration-300 ease-in-out hover:scale-110' />
        </div>
      </div>
    </div>
  )
}

export default Home
