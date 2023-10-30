import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import ShopItem from './ShopItem'
const SellerDashboard = () => {
  const initItems = []
  const [items, setItems] = useState(initItems)
  useEffect(() => {
    fetchItems()
    // eslint-disable-next-line
}, [])
  const fetchItems =async () => {
    const response = await fetch('http://localhost:5000/api/products/fetchproductseller/',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      }
    })
  const json = await response.json()
  console.log(json)
  setItems(json)
  }
  let navigate = useNavigate();
  const onClick = ()=>{
    navigate('/addproduct')
  }

  return (
    <div className='min-h-[92vh] py-10 bg-slate-200'>
      <h1 className='text-5xl font-bold text-center text-[#081B33]'>YOUR PRODUCTS</h1>
      <div className='w-[80%] mx-auto mt-4 flex justify-around flex-wrap'>
          {items.map((item)=>{
              return <ShopItem item = {item} key={item._id}/>
          })}
          <div onClick={onClick} className='min-h-[200px] w-full max-w-[18rem] flex justify-self-center items-center bg-white rounded-lg shadow mx-3 my-5'>
              <h1 className=' ease-in-out text-4xl font-bold text-center  hover:scale-110 transition duration-700'>Add a new product</h1>
          </div>
      </div>
    </div>
  )
}

export default SellerDashboard
