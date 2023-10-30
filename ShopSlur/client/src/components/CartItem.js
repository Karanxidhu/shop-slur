import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CartItem = (props) => {
    useEffect(() => {
        fetchData()
    }, [])
    const navigate = useNavigate();
    const [product, setProduct] = useState({ name: '', desc: '', price: '', image: '' })
    const { p_id, quantity } = props
    const fetchData = async () => {
        const response = await fetch(`http://localhost:5000/api/products/fetchproduct/${p_id}`)
        const json = await response.json()
        setProduct({ name: json[0].title, desc: json[0].description, price: json[0].price, image: json[0].images[0] })
    }

    const handleminus = async()=>{
        const response = await fetch(`http://localhost:5000/cart/dec/${p_id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':localStorage.getItem('token')
                }
        })
        const json = await response.json()
        console.log(json)
        window.location.reload(false);
    }
    const handleplus = async()=>{
        const response = await fetch(`http://localhost:5000/cart/addproduct/${p_id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':localStorage.getItem('token')
                }
        })
        const json = await response.json()
        console.log(json)
        window.location.reload(false);
    }

    const handleImg = ()=>{
        navigate(`/productpage/${p_id}`)
    }
    
    return (
        <>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-w-full">
                <img onClick={handleImg} className="m-2 object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-lg" src={product.image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.desc.substring(0, 100)}....</p>
                    <p className='mb-2 text-xl tracking-tight text-gray-900 dark:text-white'> <span className='font-bold'> Price:</span> $ {product.price}</p>
                    <div className=''>
                        <p className='mb-2 text-md tracking-tight text-gray-900 dark:text-white'> <span className='font-bold'> Quantity:</span> {quantity}</p>
                        <div className='flex gap-3'>
                            <svg onClick={handleplus} xmlns="http://www.w3.org/2000/svg" className='h-8' viewBox="0 0 24 24" id="plus"><path fill="#ffffff" d="M13.7554969,-4.61852778e-14 C17.5901495,-4.61852778e-14 20,2.39226033 20,6.25329815 L20,6.25329815 L20,8.82145998 C20,9.02359667 19.9191181,9.21732894 19.775362,9.35943259 C19.631606,9.50153624 19.4369515,9.58018684 19.2348285,9.57783641 L19.2348285,9.57783641 L19.2348285,9.56024626 C18.8122359,9.56024626 18.469657,9.21766731 18.469657,8.79507476 L18.469657,8.79507476 L18.469657,6.25329815 C18.469657,3.20140721 16.7985928,1.53034301 13.7554969,1.53034301 L13.7554969,1.53034301 L6.25329815,1.53034301 C3.21020229,1.53034301 1.53034301,3.21020229 1.53034301,6.25329815 L1.53034301,6.25329815 L1.53034301,13.7554969 C1.53034301,16.7897977 3.21020229,18.469657 6.25329815,18.469657 L6.25329815,18.469657 L13.7554969,18.469657 C16.7985928,18.469657 18.469657,16.7897977 18.469657,13.7554969 C18.469657,13.3329044 18.812236,12.9903255 19.2348285,12.9903255 C19.657421,12.9903255 20,13.3329044 20,13.7554969 C20,17.6077397 17.6077397,20 13.7554969,20 L13.7554969,20 L6.25329815,20 C2.39226033,20 -1.77635684e-14,17.6077397 -1.77635684e-14,13.7554969 L-1.77635684e-14,13.7554969 L-1.77635684e-14,6.25329815 C-1.77635684e-14,2.39226033 2.39226033,-4.61852778e-14 6.25329815,-4.61852778e-14 L6.25329815,-4.61852778e-14 Z M10.0703606,11.644679 C10.2741412,11.6491963 10.4674733,11.7357687 10.6065507,11.8847802 C10.7456281,12.0337917 10.8186774,12.232628 10.8091469,12.4362357 L10.8091469,12.4362357 L10.8091469,13.4036939 L10.7955242,13.5238147 C10.7649048,13.6813039 10.685283,13.826302 10.5665048,13.9371617 C10.4180321,14.0757363 10.2205591,14.1496 10.0175901,14.1424802 C9.59703523,14.1234633 9.2688063,13.7717894 9.27880387,13.3509235 L9.27880387,13.3509235 L9.27880387,12.3834653 C9.28568227,12.180488 9.37297317,11.9885721 9.52144592,11.8499975 C9.66991867,11.7114229 9.86739169,11.6375592 10.0703606,11.644679 Z M10.0351803,5.84872469 C10.1203259,5.84870167 10.2039709,5.86303427 10.2828907,5.89036543 C10.5977648,5.98519473 10.826737,6.27720335 10.826737,6.62269129 L10.826,9.014 L13.4300792,9.01495163 C13.5177801,9.01392578 13.6040633,9.02814945 13.685387,9.05617989 C13.8039309,9.09234507 13.9138048,9.15791752 14.0032321,9.24838466 C14.1453357,9.39214068 14.2239863,9.58679518 14.2216871,9.78891821 C14.2216871,10.2047356 13.8897621,10.5445307 13.4740545,10.5540897 L6.65787159,10.5540897 C6.58627001,10.552462 6.5171219,10.5411482 6.45166777,10.5214177 C6.11715106,10.43812 5.87028403,10.1381217 5.86626366,9.78012313 C5.86396444,9.57800011 5.94261504,9.38334561 6.08471869,9.23958959 C6.22682234,9.09583357 6.42055461,9.01493796 6.62269129,9.01495163 L6.62269129,9.01495163 L9.26121372,9.01495163 L9.26121372,6.61389622 C9.27067438,6.19186946 9.61307298,5.85336175 10.0351803,5.84872469 Z" transform="translate(2 2)" class="color200e32 svgShape"></path></svg>
                            <svg onClick={handleminus} xmlns="http://www.w3.org/2000/svg" className='h-8' viewBox="0 0 24 24" id="Minus"><path d="M9,13h6a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
