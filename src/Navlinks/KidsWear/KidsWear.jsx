import React from 'react'
// import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


import Image1 from "../../assets/KidsWear/cloth1.avif"
import Image2 from "../../assets/KidsWear/cloth2.avif"
import Image3 from "../../assets/KidsWear/cloth3.avif"
import Image4 from "../../assets/KidsWear/cloth4.avif"
import Image5 from "../../assets/KidsWear/cloth5.avif"
import Image6 from "../../assets/KidsWear/cloth6.avif"
import Image7 from "../../assets/KidsWear/cloth7.avif"
import Image8 from "../../assets/KidsWear/cloth8.avif"
import Image9 from "../../assets/KidsWear/cloth9.avif"
import Image10 from "../../assets/KidsWear/cloth10.avif"
import Image11 from "../../assets/KidsWear/cloth11.avif"
import Image12 from "../../assets/KidsWear/cloth12.avif"
import Image13 from "../../assets/KidsWear/cloth13.avif"
import Image14 from "../../assets/KidsWear/cloth13.webp"
import Image15 from "../../assets/KidsWear/cloth13.avif"
import Image16 from "../../assets/KidsWear/cloth12.avif"

const KidsWearData = [
  {
    id: 1,
    img: Image1,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 2,
    img: Image2,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 3,
    img: Image3,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 4,
    img: Image4,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 5,
    img: Image5,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 6,
    img: Image6,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 7,
    img: Image7,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 8,
    img: Image8,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 9,
    img: Image9,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 10,
    img: Image10,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 11,
    img: Image11,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 12,
    img: Image12,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 13,
    img: Image13,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 14,
    img: Image14,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 14,
    img: Image15,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
  {
    id: 14,
    img: Image16,
    brand: "Trampoline",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: "| 19",
    mrp: "₹616",
    oldMrp: "₹190",
    discount: "(23 % off)",
  },
]

const KidsWear = () => {
  return (
    <div className="bg-white dark:bg-black/85 dark:text-white pt-20 pb-30">
      <div className="container ">
        <h1 className='text-2xl md:text3xl lg:text-4xl font-[500] text-center mb-20'>Kids's👕 </h1>
         <div className="flex flex-wrap gap-3 justify-between items-senter group">
        {KidsWearData.map((data) => (
          <div className="w-[250px] md:w-[280px] group-hove:w-[285px] h-auto mx-auto">
            {/* <div  key={data.id}> */}
           <Link  key={data.id} className='mx-auto '> 
             <div className=" overflow-hidden w-[90%] hover:w-[100%] duration-300 ">
              <img src={data.img} alt="topProcut Image" className='object-cover ' />
            </div>
            <div className="flex flex-col mt-4 mb-5 gap-[6px] text-center">
              <p className='text-red-400 text-xs font-semibold'>{data.brand}</p>
              <p className='text-sm'>{data.title}</p>
              {/* <div className="w-[100px] bg-green-700 text-white flex px-1 rounded-sm mx-auto ">
                <p className='px-2'>{data.rating} </p>
                <p> {data.ratingCount} </p>
              </div> */}
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

export default KidsWear