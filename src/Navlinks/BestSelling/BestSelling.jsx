import React from 'react'
// import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'



import Image1 from "../../assets/BestSelling/img1.webp"
import Image2 from "../../assets/BestSelling/img2.webp"
import Image3 from "../../assets/BestSelling/img3.webp"
import Image4 from "../../assets/BestSelling/img4.webp"
import Image5 from "../../assets/BestSelling/img5.webp"
import Image6 from "../../assets/BestSelling/img6.webp"
import Image7 from "../../assets/BestSelling/img7.webp"
import Image8 from "../../assets/BestSelling/img8.webp"
import Image9 from "../../assets/BestSelling/img9.webp"
import Image10 from "../../assets/BestSelling/img10.webp"
import Image11 from "../../assets/BestSelling/img11.webp"
import Image12 from "../../assets/BestSelling/img12.webp"
import Image13 from "../../assets/BestSelling/img13.webp"
import Image14 from "../../assets/BestSelling/img14.webp"
import Image15 from "../../assets/BestSelling/img15.webp"
import Image16 from "../../assets/BestSelling/img16.webp"
import Image17 from "../../assets/BestSelling/img17.webp"
import Image18 from "../../assets/BestSelling/img18.webp"
import Image19 from "../../assets/BestSelling/img19.webp"
import Image20 from "../../assets/BestSelling/img20.webp"
import Image21 from "../../assets/BestSelling/img21.webp"
import Image22 from "../../assets/BestSelling/img22.webp"
import Image23 from "../../assets/BestSelling/img23.webp"
import Image24 from "../../assets/BestSelling/img24.webp"
import Image25 from "../../assets/BestSelling/img25.webp"
import Image26 from "../../assets/BestSelling/img26.webp"
import Image27 from "../../assets/BestSelling/img27.webp"
import Image28 from "../../assets/BestSelling/img28.webp"



const BestSellingData = [
  {
    id: 1,
    img: Image1,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹924",
    oldMrp: "₹1,650",
    discount: "(44 % off)",
  },
  {
    id: 2,
    img: Image2,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹276",
    oldMrp: "₹1,200",
    discount: "(77 % off)",
  },
  {
    id: 3,
    img: Image3,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹480",
    oldMrp: "₹4,800",
    discount: "(90 % off)",
  },
  {
    id: 4,
    img: Image4,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹750",
    oldMrp: "₹2,500",
    discount: "(70 % off)",
  },
  {
    id: 5,
    img: Image5,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹1040",
    oldMrp: "₹2,600",
    discount: "(90 % off)",
  },
  {
    id: 6,
    img: Image6,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹960",
    oldMrp: "₹1,500",
    discount: "(36 % off)",
  },
  {
    id: 7,
    img: Image7,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹160",
    oldMrp: "₹800",
    discount: "(80 % off)",
  },
  {
    id: 8,
    img: Image8,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹667",
    oldMrp: "₹2,900",
    discount: "(77 % off)",
  },
  {
    id: 9,
    img: Image9,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹275",
    oldMrp: "₹500",
    discount: "(45 % off)",
  },
  {
    id: 10,
    img: Image10,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹534",
    oldMrp: "₹890",
    discount: "(40 % off)",
  },
  {
    id: 11,
    img: Image11,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹272",
    oldMrp: "₹800",
    discount: "(66 % off)",
  },
  {
    id: 12,
    img: Image12,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹585",
    oldMrp: "₹750",
    discount: "(22 % off)",
  },
  {
    id: 13,
    img: Image13,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹320",
    oldMrp: "₹762",
    discount: "(58 % off)",
  },
  {
    id: 14,
    img: Image14,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹462",
    oldMrp: "₹600",
    discount: "(23 % off)",
  },
  {
    id: 15,
    img: Image15,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹450",
    oldMrp: "₹1,800",
    discount: "(75 % off)",
  },
  {
    id: 16,
    img: Image16,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹370",
    oldMrp: "₹740",
    discount: "(50 % off)",
  },
  {
    id: 17,
    img: Image17,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹1,197",
    oldMrp: "₹1,230",
    discount: "(33 % off)",
  },
  {
    id: 18,
    img: Image18,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹272",
    oldMrp: "₹800",
    discount: "(66 % off)",
  },
  {
    id: 19,
    img: Image19,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹558",
    oldMrp: "₹12,40",
    discount: "(55 % off)",
  },
  {
    id: 20,
    img: Image20,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹420",
    oldMrp: "₹1,400",
    discount: "(70 % off)",
  },
  {
    id: 21,
    img: Image21,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹204",
    oldMrp: "₹600",
    discount: "(66 % off)",
  },
  {
    id: 22,
    img: Image22,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹320",
    oldMrp: "₹800",
    discount: "(40 % off)",
  },
  {
    id: 23,
    img: Image23,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹560",
    oldMrp: "₹800",
    discount: "(30 % off)",
  },
  {
    id: 24,
    img: Image24,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹382",
    oldMrp: "₹850",
    discount: "(55 % off)",
  },
  {
    id: 25,
    img: Image25,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹320",
    oldMrp: "₹800",
    discount: "(60 % off)",
  },
  {
    id: 26,
    img: Image26,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹394",
    oldMrp: "₹1,970",
    discount: "(80 % off)",
  },
  {
    id: 27,
    img: Image27,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹360",
    oldMrp: "₹1800",
    discount: "(80 % off)",
  },
  {
    id: 28,
    img: Image28,
    brand: "ZARA CLOTH",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "2.7★",
    ratingCount: "| 13",
    mrp: "₹280",
    oldMrp: "₹1,400",
    discount: "(80 % off)",
  },
  


  
]

const BestSelling = () => {
  return (
    <div className="bg-white/50 dark:bg-black/85 dark:text-white pt-20 pb-30">
      <div className="container ">
        <h1 data-aos="fade-down" className='text-2xl md:text3xl lg:text-4xl font-[500] text-center mb-20  mt-10 md:mt-20'>Best selling </h1>
         <div className="flex flex-wrap gap-6 gap-y-10 md:gap-y-20 justify-between items-senter group">
        {BestSellingData.map((data) => (
          <div  key={data.id}
          className="w-[250px] md:w-[280px] h-[420px] mx-auto">
            {/* <div  key={data.id}> */}
           <Link  className='mx-auto '> 
            <span className='px-1 bg-[#00A098] text-white font-semibold ml-3'>best selling</span>
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

export default BestSelling