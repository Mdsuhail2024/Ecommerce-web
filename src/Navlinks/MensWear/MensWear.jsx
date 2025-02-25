import React from 'react'
// import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'



import Image6 from "../../assets/MensWear/jeans1.webp"
import Image8 from "../../assets/MensWear/jeans1.avif"
import Image3 from "../../assets/MensWear/jeans4.avif"
import Image4 from "../../assets/MensWear/outfit2.avif"
import Image5 from "../../assets/MensWear/jeans2.avif"
import Image1 from "../../assets/MensWear/outfit1.avif"
import Image7 from "../../assets/MensWear/jeans3.avif"
import Image2 from "../../assets/MensWear/shirt3.avif"
import Image9 from "../../assets/MensWear/outfit3.avif"
import Image10 from "../../assets/MensWear/jeans1.avif"
import Image11 from "../../assets/MensWear/shirt2.avif"
import Image12 from "../../assets/MensWear/shirt5.avif"
import Image13 from "../../assets/MensWear/Tshirt4.avif"
import Image14 from "../../assets/MensWear/trauser1.avif"
import Image15 from "../../assets/MensWear/shirt1.avif"
import Image16 from "../../assets/MensWear/trauser2.avif"
import Image17 from "../../assets/MensWear/Tshirt1.avif"
import Image18 from "../../assets/MensWear/shirt4.avif"
import Image73 from "../../assets/MensWear/unown2.avif"
import Image20 from "../../assets/MensWear/Tshirt2.avif"
import Image21 from "../../assets/MensWear/Tshirt3.avif"
import Image22 from "../../assets/MensWear/unown1.avif"
import Image23 from "../../assets/MensWear/Tshirt5.avif"

const MensWearData = [
  {
    id: 1,
    img: Image1,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 2,
    img: Image2,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 3,
    img: Image3,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 4,
    img: Image4,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 5,
    img: Image5,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 6,
    img: Image6,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 7,
    img: Image7,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 8,
    img: Image8,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 9,
    img: Image9,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 10,
    img: Image10,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 11,
    img: Image11,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 12,
    img: Image12,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 13,
    img: Image13,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 14,
    img: Image14,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 15,
    img: Image15,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 16,
    img: Image16,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 17,
    img: Image17,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 18,
    img: Image18,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 73,
    img: Image73,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 20,
    img: Image20,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 21,
    img: Image21,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 22,
    img: Image22,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  {
    id: 23,
    img: Image23,
    brand: "ICON FASHION",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.3★",
    ratingCount: "| 73",
    mrp: "₹1,312",
    oldMrp: "₹1,600",
    discount: "(18 % off)",
  },
  
]

const MensWear = () => {
  return (
    <div className="bg-white dark:bg-black/85 dark:text-white pt-20 pb-30">
      <div className="container ">
        <h1 data-aos="fade-right" className='text-2xl md:text3xl lg:text-4xl font-[500] text-center mb-20'>MensWear </h1>
         <div className="flex flex-wrap gap-3 justify-between items-senter group">
        {MensWearData.map((data) => (
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

export default MensWear