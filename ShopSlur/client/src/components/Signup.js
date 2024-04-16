import React, { useState } from 'react'
import { useNavigate } from'react-router-dom'


const Signup = () => {
  
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    role: '',
    company: ''
  })

  const handleSign = async(e)=>{
    e.preventDefault();
    // console.log(form)
    const reponse = await fetch('https://shop-slur-backend.vercel.app/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    const json = await reponse.json();
    console.log(json)
    localStorage.setItem('token', json.authtoken); 
    if(json.role === "SE"){
        localStorage.setItem('shopslurRole', json.role)
    }
    if(json.error) {
      alert(json.error)
    }else{
      navigate('/')
    }
  }

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form)
  }

  return (
    <div className='min-h-[92vh] bg-[#081B33] flex items-center justify-center'>
      <div className='w-[30%] border border-1 border-[#738599] p-6 rounded-2xl min-w-max my-8'>

        <form>
          <div className="relative z-0 w-full mb-6 group">
            <input type="email" name="email" onChange={onChange} id="floating_email" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="password" name="password" onChange={onChange} id="floating_password" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input type="password" name="confirmPassword" onChange={onChange} id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input type="text" name="firstName" onChange={onChange} id="floating_first_name" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
              <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="text" name="lastName" onChange={onChange} id="floating_last_name" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
              <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={onChange} name="phoneNumber" id="floating_phone" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
              <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
            </div>
            <div>
              <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-500">Select a Role</label>
              <select id="role" name='role' onChange={onChange} className=" border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 mb-4">
                <option defaultValue>Choose your Role</option>
                <option value="SE">Seller</option>
                <option value="BE">Buyer</option>
              </select></div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="text" name="company" onChange={onChange} id="floating_company" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
              <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company(Ex.Gucci)/BUYER</label>
            </div>
          </div>
          <button type="submit" onClick={handleSign} className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Signup
