import React, { useEffect, useState } from 'react'
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
    productName: "Men Printed Round Neck Cotton Blend Light Green T-Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.3,
    ratingCount: 73,
    mrp: 983,
    oldMrp: 1199,
    discount: 18,
  },
  {
    id: 2,
    img: Image2,
    productName: "Men Regular Fit Self Design, Solid Lapel Collar Casual Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1232,
    oldMrp: 1600,
    discount: 23,
  },
  {
    id: 3,
    img: Image3,
    productName: "Women Relaxed Black Cotton Trauser Paint Pajama Plajo",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1148,
    oldMrp: 1400,
    discount: 18,
  },
  {
    id: 4,
    img: Image4,
    productName: "Men Printed Round Neck Cotton Full Light Gary T-Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1121,
    oldMrp: 1699,
    discount: 34,
  },
  {
    id: 5,
    img: Image5,
    productName: "Men Relaxed Fit High Rise Light Blue Jeans",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1279,
    oldMrp: 1999,
    discount: 36,
  },
  {
    id: 6,
    img: Image6,
    productName: "Men Relaxed Fit High Rise Dark Blue Jeans",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1080,
    oldMrp: 1100,
    discount: 20,
  },
  {
    id: 7,
    img: Image7,
    productName: "Men Relaxed Fit High Rise Dark Blue Jeans",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 987,
    oldMrp: 1299,
    discount: 24,
  },
  {
    id: 8,
    img: Image8,
    productName: "Men Relaxed Fit High Rise Dark Black Jeans",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1242,
    oldMrp: 1350,
    discount: 18,
  },
  {
    id: 9,
    img: Image9,
    productName: "Men  Round Neck With Cap Full Light Maroon T-Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1312,
    oldMrp: 2200,
    discount: 19,
  },
  {
    id: 10,
    img: Image10,
    productName: "Men Relaxed Fit High Rise Dark Black Jeans",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1782,
    oldMrp: 1600,
    discount: 18,
  },
  {
    id: 11,
    img: Image11,
    productName: "Men Regular Fit Self Design, Solid Check Collar Casual Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1517,
    oldMrp: 3299,
    discount: 54,
  },
  {
    id: 12,
    img: Image12,
    productName: "Womeen Fit Plane, Solid Lapel Collar Casual White Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 3060,
    oldMrp: 3600,
    discount: 15,
  },
  {
    id: 13,
    img: Image13,
    productName: "Men  Round Neck Cotton Blend Light Pink T-Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1924,
    oldMrp: 2600,
    discount: 26,
  },
  {
    id: 14,
    img: Image14,
    productName: "Men Relaxed Fit High Rise Cargos",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1458,
    oldMrp: 1800,
    discount: 19,
  },
  {
    id: 15,
    img: Image15,
    productName: "Men Fit Plane, Solid Lapel Collar Casual Dark Cream Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1087,
    oldMrp: 1650,
    discount: 22,
  },
  {
    id: 16,
    img: Image16,
    productName: "Men Cotton Blend Light creak Belly Trauser",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1656,
    oldMrp: 4600,
    discount: 64,
  },
  {
    id: 17,
    img: Image17,
    productName: "Men Round Neck Cotton Blend Plane FullT-Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 2512,
    oldMrp: 3490,
    discount: 28,
  },
  {
    id: 18,
    img: Image18,
    productName: "Men Neckcap Cotton Blend Light Green Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 2889,
    oldMrp: 3399,
    discount: 15,
  },
  {
    id: 73,
    img: Image73,
    productName: "Men Cotton Blend Full Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 1536,
    oldMrp: 2260,
    discount: 32,
  },
  {
    id: 20,
    img: Image20,
    productName: "Men Printed Round Neck Cotton Blend Half T-Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 2468,
    oldMrp: 4570,
    discount: 46,
  },
  {
    id: 21,
    img: Image21,
    productName: "Men Round Neck Cotton Blend Full Black T-Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 2508,
    oldMrp: 4560,
    discount: 45,
  },
  {
    id: 22,
    img: Image22,
    productName: "Men Face Cover Mask ",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 2552,
    oldMrp: 2900,
    discount: 12,
  },
  {
    id: 23,
    img: Image23,
    productName: "Men Neck Cotton Light Green Black T-Shirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 73,
    mrp: 2571,
    oldMrp: 3340,
    discount: 23 ,
  },
  
]

const MensWear = () => {
  const [productData, setProductData] = useState(MensWearData)
  const [currentFilter, setCurrentFilter] = useState("")
  useEffect(() => {
    let sortedProducts = [...productData]
    if(currentFilter == "price_low_to_high"){
      sortedProducts.sort((a, b) => a.mrp - b.mrp)
    }else if(currentFilter == "price_high_to_low"){
      sortedProducts.sort((a, b) => b.mrp - a.mrp)
    }
    setProductData(sortedProducts)
  },[currentFilter])

  return (
    <div className="bg-white dark:bg-black/85 dark:text-white pt-8 md:pt-20 pb-30">
      <div className="container ">

      <div className="w-full max-w-[170px] mt-16">
          <form action="#" className="w-full">
            {/* <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
              Sort By:
            </label> */}
            <select
              name="sort"
              id="sort"
              className="w-full border border-gray-300 rounded-lg px-1 py-0.5 text-gray-700 focus:outline-none 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              onChange={(e) => setCurrentFilter(e.target.value)}
              value={currentFilter}
            >
              <option value="">Select</option>
              <option value="price_low_to_high">Price (Low to High)</option>
              <option value="price_high_to_low">Price (High to Low)</option>
            </select>
          </form>
        </div>


        <h1 data-aos="fade-right" className='text-2xl md:text3xl lg:text-4xl font-[500] text-center mb-10 md:mb-20  mt-10 md:mt-15'>MensWear </h1>
         <div className="flex flex-wrap gap-3 justify-between items-senter group">
        {productData.map((data) => (
          <div  key={data.id}
          className="w-[250px] md:w-[280px] group-hove:w-[285px] h-auto mx-auto">
            {/* <div  key={data.id}> */}
           <Link  className='mx-auto '> 
             <div className=" overflow-hidden w-[90%] hover:w-[100%] duration-300 ">
              <img src={data.img} alt="topProcut Image" className='object-cover ' />
            </div>
            <div className="flex flex-col mt-4 mb-5 gap-[6px] text-center overflow-hidden">
              <p className='text-red-400 text-xs font-semibold '>{data.productName}</p>
              <p className='text-sm'>{data.title}</p>
              <div className="w-[100px] bg-green-700 text-white flex px-1 rounded-sm mx-auto ">
                <p className='px-2'>{data.rating} ★ | </p>
                <p> {data.ratingCount} </p>
              </div>
              <div className="flex gap-1 justify-center items-center ">
                <p className='font-bold text-sm'>₹ {data.mrp}</p>
                <p className='text-xs font-bold text-gray-500 line-through'>{data.oldMrp}</p>
                <p className='font-semibold text-xs text-red-400'>({data.discount} % off)</p>
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