import { Carousel } from "@material-tailwind/react";
import { useState } from "react"; 

export default function CarouselTransition(props) {
  const images = props.images;
  let imagesArr = []
  for(let key in images){
    if (images.hasOwnProperty(key)) {
      imagesArr.push(images[key])
  }
  }
  return (
    <Carousel transition={{ duration: 2 }} className="">
      {
        imagesArr.map((image)=>{
          return <img
          key={image}
          src={image}
          alt="image 1"
          className="h-full w-full md:object-cover object-fit my-auto" 
        />
        })
      }
      
    </Carousel>
  );
}