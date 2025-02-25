import React from 'react'
import Image1 from "../../assets/shirt/shirt.png"
import Image2 from "../../assets/shirt/shirt2.png"
import Image3 from "../../assets/shirt/shirt3.png"
import Image4 from "../../assets/shirt/maroon-.avif"
import { FaStar } from 'react-icons/fa6'

const TopProduct = [
  {
    id: 1,
    image: Image1,
    title: "Causel Wear",
    description: "Lorem ipsum dolor sit amet debitis,  enim itaque quibusdam porro omnis!"
  },
  {
    id: 2,
    image: Image2,
    title: "Printed Shirt",
    description: "Lorem ipsum dolor sit amet debitis, enim itaque quibusdam porro omnis! "
  },
  {
    id: 3,
    image: Image3,
    title: "Girl's Shirt",
    description: "Lorem ipsum dolor sit amet debitis, enim itaque quibusdam cporro omnis!"
  },
  // {
  //   id: 3,
  //   image: Image4,
  //   title: "Party Wear",
  //   description: "Lorem ipsum dolor sit amet debitis, enim itaque quibusdam cporro omnis!"
  // },
]

const BestProduct = () => {
  return (
    
    <div className=' bg-white dark:bg-slate-900 dark:text-white pt-10 '>
        <div className="container">
            <div data-aos="fade-down" className="flex flex-col text-left gap-0">
            <p className='text-primary text-sm'>Top Rated products for you.</p>
        <h1 className='text-4xl font-bold'>Best Products</h1>
        <p className='text-sm text-gray-400'>            Lorem ipsum dolor sit, amet  consectetur adipisicing elit. Labore natus optio officiis provident, nesciunt, voluptas possimus ut cum debitis, nobis obcaecati?
        </p>
            </div>
        </div>
        <div className="container pt-24 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-28 lg:gap-10 ">
              {TopProduct.map((data) => (
                <div data-aos="zoom-out" key={data.id} className="group relative bg-white hover:bg-slate-700 hover:text-white dark:bg-slate-800 
                 dark:hover:bg-primary/90 duration-300 w-[300px] h-[350px] flex flex-col items-center justify-center p-3.5 rounded-2xl shadow-2xl">
                  <img src={data.image} alt="Casual Shirt" className='w-[150px] object-cover absolute -top-20 group-hover:w-[170px] duration-300' />
                  <div className='flex mt-40 text-yellow-400 gap-1'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <h1 className='text-xl font-bold'>{data.title}</h1>
                  <p className='text-slate-400 text-center text-sm group-hover:text-inherit'>{data.description}</p>
                  <button className='px-4 py-1 mt-3 font-semibold rounded-full bg-primary group-hover:bg-white group-hover:text-black hover:bg-slate-300 duration-200  cursor-pointer text-white'>Order Now</button>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default BestProduct