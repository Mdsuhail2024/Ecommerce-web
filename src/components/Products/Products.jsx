import React from 'react'
import Image1 from "../../assets/women/women.png"
import Image2 from "../../assets/women/women2.jpg"
import Image3 from "../../assets/women/women3.jpg"
import Image4 from "../../assets/women/women4.jpg"
import Image5 from "../../assets/women/women5.jpg"
import Image6 from "../../assets/women/women6.png"
import { FaStar } from 'react-icons/fa6'

const ProductsList = [
    {
        id: 1,
        name: "Women Ethenic",
        color: "red",
        image: Image1,
        rating: 4.0,
    },
    {
        id: 2,
        name: "Goggles",
        color: "blakc",
        image: Image5,
        rating: 4.5,
    },
    {
        id: 3,
        name: "Women Westorn",
        color: "pink",
        image: Image3,
        rating: 4.7,
    },
    {
        id: 4,
        name: "Inidan lengha",
        color: "red",
        image: Image6,
        rating: 4.0,
    },
    {
        id: 5,
        name: "Goggles",
        color: "blakc",
        image: Image2,
        rating: 4.5,
    },
    {
        id: 6,
        name: "Goggles",
        color: "blakc",
        image: Image4,
        rating: 4.5,
    },
]

const Products = () => {
  return (
    <div data-aos="fade-up" className=' bg-white dark:bg-slate-900 dark:text-white  pb-10 '>
      <div className="container pt-12 flex flex-col gap-0 items-center ">
        <p className='text-primary text-sm'>Top Selling Products for you</p>
        <h1 className='text-4xl font-bold'>Produts</h1>
        <p className='text-sm text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates ipsum necessitatibus!</p>
      </div>
   <div className='container flex justify-center sm:justify-between sm:items-center  pt-12 flex-wrap gap-5'>
    {ProductsList.map((data )=> (
        <div data-aos='fade-bottom' key={data.id} className="flex flex-col ">
            <img src={data.image} alt="Top Product Image" className='w-[180px] h-[220px] object-cover rounded-sm' />
             <h1 className='font-medium pt-2'>{data.name}</h1>
             <p className='text-xs text-gray-400'>{data.color}</p>
             <p className='flex items-center gap-2'>
                <FaStar className='text-yellow-400' /> 
                <span>{data.rating}</span>
                </p>
        </div>
    ))}
   </div>
   <div className='pt-10 pb-8 md:pb-0 text-center'>
    <button data-aos="zoom-in" className='px-6 py-2 bg-primary rounded-full cursor-pointer  text-white'>View All Product</button>
   </div>
    </div>
  )
}

export default Products