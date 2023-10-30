import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();

    const handleSignClick = () => {
        navigate('/signup');
    }

    const [creds, setCreds] = useState({email: '', password:''})

    const onChange = (e)=>{
        setCreds({...creds, [e.target.name]: e.target.value})
        console.log(creds)
    }

    const handleLogin= async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: creds.email, password: creds.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            if(json.role === "SE"){
                localStorage.setItem('shopslurRole', json.role)
            }
            navigate("/shop");

        }
        else{
            alert("Invalid credentials");
        }
    
    }
    return (
        <div className='min-h-[92vh] bg-[#081B33] flex items-center justify-center'>
            <div className='w-[30%] border border-1 border-[#738599] p-6 rounded-2xl min-w-max'>
            <form>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                    <input type="email" name='email' value={creds.email} onChange={onChange} id="email" className=" text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="JohnDoe123@gmail.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                    <input type="password" name='password' value={creds.password} onChange={onChange} id="password" className=" text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder='*******' required />
                </div>
                <button type="submit" onClick = {handleLogin} className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            <p className='text-xs pt-5 text-white font-bold' onClick={handleSignClick}> <Link >Sign up?</Link> </p>
            {localStorage.getItem('token') ? <p className='text-xs pt-5 text-white font-bold'>You are already signed in</p>:<></>}
            </div>
        </div>
    )
}

export default Login
