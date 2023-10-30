import React, { useState, useEffect } from 'react'
import Carousel from './Carousel'
import { useParams, useNavigate } from 'react-router-dom'

const ProductPage = () => {
  const { id } = useParams()
  useEffect(() => {
    fetchProduct();
  }, [])
  const navigate = useNavigate()
  const initProduct = []
  const [productDetails, setProductDetails] = useState(initProduct)
  const addToCart = async()=>{
    const response = await fetch(`http://localhost:5000/cart/addproduct/${id}`,{
      method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':localStorage.getItem('token')
              }
    })
    const json = await response.json()
    console.log(json)
    navigate('/cart')
  }

  const fetchProduct = async () => {
    console.log('fetching product')
    const response = await fetch(`http://localhost:5000/api/products/fetchproduct/${id}`)
    const json = await response.json()
    setProductDetails(json[0])
  }
  return (
    <div className='w-full flex md:min-h-[92vh] md:flex-nowrap flex-wrap flex-col md:flex-row'>
      <div className='md:w-1/2 w-full'>
        <Carousel images={productDetails.images} />
      </div>
      <div className="md:w-1/2 bg-[#081B33] md:min-h-[86vh] w-full pb-5">
        <div className='w-[80%] mx-auto mt-10 relative md:h-full'>
          <div className=''>
            <h1 className="text-7xl font-bold text-white text-right "><span className='hover:text-transparent bg-clip-text hover:bg-[#738599] transition duration-700 ease-in-out'>{productDetails.title}</span></h1>
            <p className='text-xl text-slate-400 hover:text-slate-100 transition duration-700 ease-in-out mt-10'>{productDetails.description}</p></div>
            <p className="text-5xl font-bold text-white text-center mt-5 pb-2"> ${productDetails.price}</p>
            <button className="mx-auto relative flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span onClick={addToCart} className="relative text-xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                Add to cart
              </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
