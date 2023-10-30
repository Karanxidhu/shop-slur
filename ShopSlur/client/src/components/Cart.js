import React, {useEffect, useState} from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  useEffect(()=>{
    fetchData();
  },[])

  const navigate = useNavigate();

  const handleCheckOut = async()=>{
    navigate('/checkout')
  }

  const [items, setItems] = useState([]);  

  const fetchData = async() =>{
    const response = await fetch(`http://localhost:5000/cart/`,{
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token':localStorage.getItem('token')
    }
    })
    const json = await response.json()
    setItems(json.userCart.items)
  }


  return (
    <div className='min-h-[92vh] bg-[#081B33] overflow-hidden w-full'>
        <div className='xs:w-[67%] md:w-[70%] lg:w-[55%] xl:w-[40%] bg-[#C8CBD3] mx-auto flex my-16 rounded-2xl flex flex-col items-center gap-5 p-10 overflow-hidden'>
          {items.length===0 && 'Nothing in cart. SHOP NOW'}
          {items.map((item)=>{
            console.log(item.product_id)
            return (item.quantity>0) && <CartItem p_id ={item.product_id} key={item._id} quantity={item.quantity}/>
          })}
          <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleCheckOut}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
              Check Out
            </span>
          </button>
        </div>
    </div>
  )
}

export default Cart
