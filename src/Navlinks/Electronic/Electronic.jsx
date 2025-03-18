import React, { useEffect, useState } from 'react'
// import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'



import Image1 from "../../assets/Electronic/camera1.webp"
import Image2 from "../../assets/Electronic/d2h1.webp"
import Image3 from "../../assets/Electronic/dishtv.webp"
import Image4 from "../../assets/Electronic/hometheater1.webp"
import Image5 from "../../assets/Electronic/led1.webp"
import Image6 from "../../assets/Electronic/mi1.webp"
import Image7 from "../../assets/Electronic/hometheater2.webp"
import Image8 from "../../assets/Electronic/led2.webp"
import Image9 from "../../assets/Electronic/minibox.webp"
import Image10 from "../../assets/Electronic/minicamera.webp"
import Image11 from "../../assets/Electronic/printer.webp"
import Image12 from "../../assets/Electronic/projector1.webp"
import Image13 from "../../assets/Electronic/printer2.webp"
import Image14 from "../../assets/Electronic/printer.webp"
import Image15 from "../../assets/Electronic/projector2.webp"
import Image16 from "../../assets/Electronic/projector3.webp"
import Image17 from "../../assets/Electronic/trimer1.webp"
import Image18 from "../../assets/Electronic/trimer2.webp"


const ElectronicData = [
  {
    id: 1,
    img: Image1,
    productName: "Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens (Black)",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.7,
    ratingCount: 832,
    mrp: 40278,
    oldMrp: 47950,
    discount: 16,
  },
  {
    id: 2,
    img: Image2,
    productName: "D2H SMART+ HD Set Top Box - DTH Connection Hindi 1 Month Royal Sports Kids SD Pack ",
    title: "5 year warranty on Set top box and, ",
    rating: 3.2,
    ratingCount: 26,
    mrp: 1199,
    oldMrp: 1999,
    discount: 13,
  },
  {
    id: 3,
    img: Image3,
    productName: "Airtel Digital TV Only HD Set Top Box",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 3.7,
    ratingCount: 27,
    mrp: 1053,
    oldMrp: 2053,
    discount: 48,
  },
  {
    id: 4,
    img: Image4,
    productName: "PHILIPS MMS8085B/94 Convertible 80 W Bluetooth Home Theatre",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.9,
    ratingCount: 454,
    mrp: 9660,
    oldMrp: 7999,
    discount: 17,
  },
  {
    id: 5,
    img: Image5,
    productName: "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.7,
    ratingCount:170,
    mrp: 14990,
    oldMrp: 18900,
    discount: 20,
  },
  {
    id: 6,
    img: Image6,
    productName: "REDMI A4 5G only on Jio SIM (Starry Black, 64 GB)  (4 GB RAM)",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 315,
    mrp: 9025,
    oldMrp: 1099,
    discount: 17,
  },
  {
    id: 7,
    img: Image7,
    productName: "Bluetooth Soundbar",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 389,
    mrp: 6499,
    oldMrp: 1999,
    discount: 67,
  },
  {
    id: 8,
    img: Image8,
    productName: "Thomson 126 cm (50 inch) QLED Ultra HD (4K) Smart Google TV with HDR 10 ",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.4,
    ratingCount: 224,
    mrp: 25999,
    oldMrp: 49999,
    discount: 48,
  },
  {
    id: 9,
    img: Image9,
    productName: "LIMBRO home theatre 1000W 1000 W Bluetooth Home Theatre",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4,
    ratingCount: 8,
    mrp: 1490,
    oldMrp: 4999,
    discount: 70,
  },
  {
    id: 10,
    img: Image10,
    productName: "Camera for Girls Boys Digital Selfie Camera Toy for Kids 13MP 1080P",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.7,
    ratingCount: 26,
    mrp: 688,
    oldMrp: 2999,
    discount: 77,
  },
  {
    id: 11,
    img: Image11,
    productName: "Epson L3251 Multi-function WiFi Color Ink Tank Printer",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 189,
    mrp: 13499,
    oldMrp: 17999,
    discount: 35,
  },
  {
    id: 12,
    img: Image12,
    productName:    "DIGIBUDS HY300 1GB/8GB, HD Android 11 Projector WiFi 6/BT 5.0 180° Rotation Auto Keystone",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 2.7,
    ratingCount: 3,
    mrp: 4998,
    oldMrp: 14999,
    discount: 66,
  },
  {
    id: 13,
    img: Image13,
    productName: "brother HL-L2321D IND Single Function Monochrome Laser Printer (Borderless Printing) with Auto Duplex Feature",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.4,
    ratingCount: 502,
    mrp: 12149,
    oldMrp: 14999,
    discount: 18,
  },
  {
    id: 14,
    img: Image14,
    productName: "rother HL-L2440DW Single Function WiFi Monochrome Laser Printer",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.4,
    ratingCount: 193,
    mrp: 13249,
    oldMrp: 17990,
    discount: 26,
  },
  {
    id: 15,
    img: Image15,
    productName: 'Thomson FA Series 100 cm (40 inch) Full HD LED Smart Android TV',
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.3,
    ratingCount: 130,
    mrp: 14499,
    oldMrp: 26999,
    discount: 46,
  },
  {
    id: 16,
    img: Image16,
    productName: "GOOD FUN Newly Launched 5 W Bluetooth Gaming Speaker",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 3.9,
    ratingCount: 48,
    mrp: 420,
    oldMrp: 2499,
    discount: 83,
  },
  {
    id: 17,
    img: Image17,
    productName: "Trimmer 90 min Runtime 40 Length Settings  (Black, Silver)",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.2,
    ratingCount: 129,
    mrp: 1799,
    oldMrp: 2499,
    discount: 28,
  },
  {
    id: 18,
    img: Image18,
    productName: 'BEARDO Ape-X 3-in-1 Trimmer, nose trimmer, shaver, manscaping.',
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 505,
    mrp: 1049,
    oldMrp: 1499,
    discount: 30,
  },
]

const Electronic = () => {
  const [productData, setProductData] = useState(ElectronicData)
  const [currentFilter, setCurrentFilter] = useState("")
  useEffect(() => {
    let filteredList = [...productData]
    if(currentFilter == "price_low_to_high" ){
      filteredList.sort((a, b) => a.mrp - b.mrp)
    }else if(currentFilter == "price_high_to_low"){
      filteredList.sort((a, b) => b.mrp - a.mrp)
    }
    setProductData(filteredList)
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

        <h1 data-aos="fade-down" className='text-2xl md:text3xl lg:text-4xl font-[500] text-center mb-10 md:mb-20  mt-10 md:mt-15'>Electronic </h1>
         <div className="flex flex-wrap gap-3 justify-between items-senter group">
        {productData.map((data) => (
          <div  key={data.id}
          className="w-[250px] md:w-[280px] h-[420px] mx-auto">
            {/* <div  key={data.id}> */}
           <Link  className='mx-auto '> 
             <div className=" overflow-hidden w-[90%] h-[280px]  hover:w-[100%] duration-300 ">
              <img src={data.img} alt="topProcut Image" className='object-cover ' />
            </div>
            <div className="flex flex-col mt-4 mb-5 gap-[6px] text-center">
              <p className='text-red-400 text-xs font-semibold'>{data.productName}</p>
              <p className='text-sm'>{data.title}</p>
              <div className="w-[100px] bg-green-700 text-white flex px-1  rounded-sm mx-auto  ">
                <p className='px-2'>{data.rating} ★ | </p>
                <p> {data.ratingCount} </p>
              </div>
              <div className="flex gap-1 justify-center items-center ">
                <p className='font-bold text-sm'>₹ {data.mrp.toLocaleString()}</p>
                <p className='text-xs font-bold text-gray-500 line-through'>{data.oldMrp}</p>
                <p className='font-semibold text-xs text-red-400'>{data.discount} % off</p>
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

export default Electronic