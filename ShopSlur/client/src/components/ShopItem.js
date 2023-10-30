import React  from 'react'
import {useNavigate, Link} from 'react-router-dom'

const ShopItem = (prop) => {
   

    const navigate = useNavigate()
    const { item } = prop
    var review = []
    for (let index = 0; index < Math.floor(item.review); index++) {
        review.push(1)
    }
    const handleCardClick = () => {
        navigate(`/productpage/${item._id}`)
    }
    return (

        <div className="w-full max-w-[18rem] bg-white rounded-lg shadow mx-3 my-5" onClick={handleCardClick}>
                <img className="p-6 transition duration-300 ease-in-out hover:scale-110 rounded-t-lg" src={item.images[0]} alt="product image" />

            <div className="px-5 pb-5">

                    <h5 className="text-sm font-semibold tracking-tight text-gray-900">{item.title}</h5>
                <div className="flex items-center mt-2.5 mb-5">
                    {review.map((e)=>{
                    return <svg className="w-2 h-2 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    })}
                    <span className="bg-slate-100 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-slate-500 dark:text-white ml-3">{item.review}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 ">${item.price}</span>
                    <Link to="/" className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center ">More </Link>
                </div>
            </div>
        </div>

    )
}
export default ShopItem
