import React, {useEffect, useState} from 'react'
import ShopItem from './ShopItem'
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();
  const initItems = []
  const [items, setItems] = useState(initItems)
  useEffect(() => {
    fetchItems()
    // eslint-disable-next-line
}, [])
  const fetchItems =async () => {
    const response = await fetch('http://localhost:5000/api/products/fetchallproducts',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      }
    })
  const json = await response.json()
  console.log(json)
  if(json.error){
    navigate('/login')
  }
  setItems(json)
  }
  
  return (
    <div className='min-h-[92vh] py-10 bg-slate-200'>
      <h1 className='text-5xl font-bold text-center text-[#081B33]'>BEST SELLERS</h1>
      <div className='w-[80%] mx-auto mt-4 flex justify-around flex-wrap'>
          {items.map((item)=>{
              return <ShopItem item = {item} key={item._id}/>
          })}
      </div>
    </div>
  )
}

export default Shop
