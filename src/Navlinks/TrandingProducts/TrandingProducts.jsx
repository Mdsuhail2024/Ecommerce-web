import React from 'react'
// import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'



import Image1 from "../../assets/TrandingProd/book1.webp"
import Image2 from "../../assets/TrandingProd/toy.webp"
import Image3 from "../../assets/TrandingProd/tools.webp"
import Image4 from "../../assets/TrandingProd/book2.webp"
import Image5 from "../../assets/TrandingProd/cycle1.webp"
import Image6 from "../../assets/TrandingProd/hairdrayer.webp"
import Image7 from "../../assets/TrandingProd/handcover.webp"
import Image8 from "../../assets/TrandingProd/pandrive.webp"
import Image9 from "../../assets/TrandingProd/tools.webp"
import Image10 from "../../assets/TrandingProd/cycle2.webp"
import Image11 from "../../assets/TrandingProd/toy2.webp"



const TrandingProductsData = [
  {
    id: 1,
    img: Image1,
    brand: "ICON MANUFACTURE",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: "4.7★",
    ratingCount: "| 26",
    mrp: "₹16,999",
    oldMrp: "₹14,790",
    discount: "(13 % off)",
  },
  {
    id: 2,
    img: Image2,
    brand: "ICON MANUFECTURE",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.7★",
    ratingCount: "| 26",
    mrp: "₹16,999",
    oldMrp: "₹14,790",
    discount: "(13 % off)",
  },
  {
    id: 3,
    img: Image3,
    brand: "ICON MANUFECTURE",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.7★",
    ratingCount: "| 26",
    mrp: "₹16,999",
    oldMrp: "₹14,790",
    discount: "(13 % off)",
  },
  {
    id: 4,
    img: Image4,
    brand: "ICON MANUFECTURE",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.7★",
    ratingCount: "| 26",
    mrp: "₹16,999",
    oldMrp: "₹14,790",
    discount: "(13 % off)",
  },
  {
    id: 5,
    img: Image5,
    brand: "ICON MANUFECTURE",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.7★",
    ratingCount: "| 26",
    mrp: "₹16,999",
    oldMrp: "₹14,790",
    discount: "(13 % off)",
  },
  {
    id: 6,
    img: Image6,
    brand: "ICON MANUFECTURE",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.7★",
    ratingCount: "| 26",
    mrp: "₹16,999",
    oldMrp: "₹14,790",
    discount: "(13 % off)",
  },
  {
    id: 7,
    img: Image7,
    brand: "ICON MANUFECTURE",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.7★",
    ratingCount: "| 26",
    mrp: "₹16,999",
    oldMrp: "₹14,790",
    discount: "(13 % off)",
  },
  {
    id: 8,
    img: Image8,
    brand: "ICON MANUFECTURE",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.7★",
    ratingCount: "| 26",
    mrp: "₹16,999",
    oldMrp: "₹14,790",
    discount: "(13 % off)",
  },
  {
    id: 9,
    img: Image9,
    brand: "ICON MANUFECTURE",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.7★",
    ratingCount: "| 26",
    mrp: "₹16,999",
    oldMrp: "₹14,790",
    discount: "(13 % off)",
  },
  {
    id: 10,
    img: Image10,
    brand: "ICON MANUFECTURE",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.7★",
    ratingCount: "| 26",
    mrp: "₹16,999",
    oldMrp: "₹14,790",
    discount: "(13 % off)",
  },
  {
    id: 11,
    img: Image11,
    brand: "ICON MANUFECTURE",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.7★",
    ratingCount: "| 26",
    mrp: "₹16,999",
    oldMrp: "₹14,790",
    discount: "(13 % off)",
  },
  


  
]

const TrandingProducts = () => {
  return (
    <div className="bg-white/50 dark:bg-black/85 dark:text-white pt-20 pb-30">
      <div className="container ">
        <h1 data-aos="fade-down" className='text-2xl md:text3xl lg:text-4xl font-[500] text-center mb-20 mt-10 md:mt-20'>Tranding </h1>
         <div className="flex flex-wrap gap-6 gap-y-10 md:gap-y-20 justify-between items-senter group">
        {TrandingProductsData.map((data) => (
          <div className="w-[250px] md:w-[280px] h-[420px] mx-auto">
            {/* <div  key={data.id}> */}
           <Link  key={data.id} className='mx-auto '> 
            <Link className='px-1 bg-[#00A098] text-white font-semibold ml-3'>Tranding</Link>
             <div className=" overflow-hidden w-[90%] h-[280px]  hover:w-[100%] duration-300 mt-4 ">
              <img src={data.img} alt="topProcut Image" className='object-cover ' />
            </div>
            <div className="flex flex-col mt-4 mb-5 gap-[6px] text-center">
              <p className='text-red-400 text-xs font-semibold'>{data.brand}</p>
              <p className='text-sm'>{data.title}</p>
              <div className="w-[100px] bg-green-700 text-white flex px-1  rounded-sm mx-auto  ">
                <p className='px-2'>{data.rating} </p>
                <p> {data.ratingCount} </p>
              </div>
              <div className="flex gap-1 justify-center items-center ">
                <p className='font-bold text-sm'>{data.mrp}</p>
                <p className='text-xs font-bold text-gray-500 line-through'>{data.oldMrp}</p>
                <p className='font-semibold text-xs text-red-400'>{data.discount}</p>
              </div>
            </div>
            {/* </div> */}
           </Link> 
          </div>
        ))} 
         </div>
      </div>
      {/* <Link></Link> */}
    </div>
 
  )
}

export default TrandingProducts