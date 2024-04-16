import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

let image_array = []
const ProductUpload = () => { 
  const navigate = useNavigate();
  const [details, setDetails] = useState({
                                  title: '',
                                  description: '',
                                  price: '',
                                  images: '',
                                  tag:''
                                });
  const [file, setFile] = useState('');

  const onFileUpload = async(e)=>{
    setFile(e.target.files[0]);
    console.log(e.target.files)
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    chosenFiles.map(async(file)=>{
      console.log(file)
      const data = new FormData();
      data.append('file', file)
      data.append('upload_preset', 'shopslur')
      try {
          const respone =await fetch('https://api.cloudinary.com/v1_1/dtrkpiqse/image/upload',{
          method: "POST",
          body: data
        })
        const json = await respone.json()
        console.log(typeof json.secure_url)
        await image_array.push(json.secure_url)
        console.log(image_array)
        image_array.map((item)=>{
          console.log(item)
        })
        
      } catch (error) {
        console.log(error)
      }
      setDetails({...details, images: image_array})
    })
  }
  
  const formSubmit = async()=>{
    try {
      console.log(details)
      const response2 = await fetch('https://shop-slur-backend.vercel.app/api/products/addproduct',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body:JSON.stringify({title:details.title, description: details.description, images: details.images, price: details.price, tag: details.tag})
      })
      const json2 = await response2.json() 
      console.log(json2)
    } catch (error) {
      alert(error)
    }
    navigate("/shop")
    }

  const onChange = (e)=>{
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details)
  }                             

  return (
    <div className='min-h-[92vh] bg-[#081B33]'>
      <div className='w-1/2 mx-auto py-20'>
        <div className='pb-7'>
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
          <input type="title" name="title" onChange={onChange} id="title" aria-describedby="helper-text-explanation" className="border text-sm rounded-lg  block w-full p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Eg.Gucci Shoe 8981" /></div>
        <div className='pb-7'>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
          <textarea id="description" name="description" onChange={onChange} rows="5" className="block p-2.5 w-full text-sm rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Add product decription..."></textarea>
        </div>
        <div className='pb-10'>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2  border-dashed text-white rounded-lg cursor-pointer hover:bg-gray-800 bg-gray-700 hover:bg-gray-100 border-gray-600 hover:border-gray-500 hover:bg-gray-600">Put images of product
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" multiple onChange={onFileUpload} type="file" className="hidden" />
            </label>
          </div>
                <div>
                  {image_array.map((item)=>{
                     <img src={item} alt="" />
                  })}
                </div>
          <div className='pt-7'>
            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input type="price" name="price" onChange={onChange} id="price" aria-describedby="helper-text-explanation" className="border text-sm rounded-lg  block w-full p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="999/199" />
          </div>
        </div>
        <div>
          <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
          <input type="tags" name="tag" id="tags" onChange={onChange} aria-describedby="helper-text-explanation" className="border text-sm rounded-lg  block w-full p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="shoes, jackets" />
        </div>
        <div>
        <button className="relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl" onClick={formSubmit}>
              Publish Product
            </span>
          </button></div>
      </div>
    </div>
  )
}

export default ProductUpload
