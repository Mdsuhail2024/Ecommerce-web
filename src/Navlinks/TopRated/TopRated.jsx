import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Image1 from "../../assets/TopProcusts/browontshirt.avif";
import Image2 from "../../assets/TopProcusts/babytoy.avif";
import Image3 from "../../assets/TopProcusts/blackwatch.avif";
import Image4 from "../../assets/TopProcusts/bag.avif";
import Image5 from "../../assets/TopProcusts/brownearbirds.webp";
import Image6 from "../../assets/TopProcusts/cap.avif";
import Image7 from "../../assets/TopProcusts/earbirds.webp";
import Image8 from "../../assets/TopProcusts/grayjeans.avif";
import Image9 from "../../assets/TopProcusts/handbag2.avif";
import Image10 from "../../assets/TopProcusts/handbag.avif";
import Image11 from "../../assets/TopProcusts/smartwatch.avif";
import Image12 from "../../assets/TopProcusts/trolly.avif";
import Image13 from "../../assets/TopProcusts/waistbag.avif";
import Image14 from "../../assets/TopProcusts/whitecap.avif";
import Image15 from "../../assets/TopProcusts/Tshirt check.avif";
import Image16 from "../../assets/TopProcusts/sunglasses.avif";

const TopProductsData = [
  {
    id: 1,
    img: Image1,
    productName: "Black Tshirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ",
    rating: 4.1,
    ratingCount: 80,
    mrp: 1350,
    oldMrp: 3300,
    discount: 55,
  },
  {
    id: 2,
    img: Image2,
    productName: "Toy baby",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 80,
    mrp: 715,
    oldMrp: 1300,
    discount: 45,
  },
  {
    id: 3,
    img: Image3,
    productName: "Black Watch",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 80,
    mrp: 1035,
    oldMrp: 2300,
    discount: 55,
  },
  {
    id: 4,
    img: Image4,
    productName: "Turist Bag",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 80,
    mrp: 1350,
    oldMrp: 1430,
    discount: 35,
  },
  {
    id: 5,
    img: Image5,
    productName: "Earbird Noise",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 80,
    mrp: 1299,
    oldMrp: 1999,
    discount: 35,
  },
  {
    id: 6,
    img: Image6,
    productName: "Black Cap",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 80,
    mrp: 315,
    oldMrp: 700,
    discount: 55,
  },
  {
    id: 7,
    img: Image7,
    productName: "Black Earbirds",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 44,
    mrp: 1935,
    oldMrp: 4300,
    discount: 55,
  },
  {
    id: 8,
    img: Image8,
    productName: "Jeans Gary",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 30,
    mrp: 1144,
    oldMrp: 1300,
    discount: 12,
  },
  {
    id: 9,
    img: Image9,
    productName: "Hand Bag",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 40,
    mrp: 315,
    oldMrp: 700,
    discount: 55,
  },
  {
    id: 10,
    img: Image10,
    productName: "Hand Bag",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 50,
    mrp: 495,
    oldMrp: 900,
    discount: 45,
  },
  {
    id: 11,
    img: Image11,
    productName: "Apple Smart Watch",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: "4.1★",
    ratingCount: 60,
    mrp: 6599,
    oldMrp: 9999,
    discount: 34,
  },
  {
    id: 12,
    img: Image12,
    productName: "American Trolly",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 20,
    mrp: 10337,
    oldMrp: 12020,
    discount: 14,
  },
  {
    id: 13,
    img: Image13,
    productName: "Waist Bag",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 40,
    mrp: 1035,
    oldMrp: 2300,
    discount: 55,
  },
  {
    id: 14,
    img: Image14,
    productName: "White Cap",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 44,
    mrp: 300,
    oldMrp: 300,
    discount: 0,
  },
  {
    id: 15,
    img: Image15,
    productName: "Cheack Tshirt",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 34,
    mrp: 585,
    oldMrp: 1300,
    discount: 55,
  },
  {
    id: 16,
    img: Image16,
    productName: "Sunglases",
    title: "Regulat Fit Lorem, ipsum dolor sit ame",
    rating: 4.1,
    ratingCount: 55,
    mrp: 1350,
    oldMrp: 3300,
    discount: 55,
  },
];

const TopRated = () => {
  const [productData, setProductData] = useState(TopProductsData);
  const [currentData, setCurrentData] = useState('');
  useEffect(() => {
    let filteredList = [...productData]
    if(currentData == "price_low_to_high"){
      filteredList.sort((a, b) => a.mrp - b.mrp)
    }else if(currentData == "price_high_to_low"){
      filteredList.sort((a, b) => b.mrp - a.mrp)
    }
    setProductData(filteredList)
  },[currentData])
 

  return (
    <div className="bg-white dark:bg-black/85 dark:text-white pt-8 md:pt-20 pb-30">
      <div className="container ">
        <div className="w-full max-w-[170px] mt-16">
          <form action="#" className="w-full">
            <label
              htmlFor="sort"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Sort By:
            </label>
            <select
              name="sort"
              id="sort"
              className="w-full border border-gray-300 rounded-lg px-1 py-0.5 text-gray-700 focus:outline-none 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              onChange={(e) => setCurrentData(e.target.value)}
              value={currentData}
            >
              <option value="">Select</option>
              <option value="price_low_to_high">Price (Low to High)</option>
              <option value="price_high_to_low">Price (High to Low)</option>
            </select>
          </form>
        </div>

        <h1 className="text-2xl md:text3xl lg:text-4xl font-[500] text-center mb-10 md:mb-20  mt-10 md:mt-15">
          Top Rated
        </h1>
        <div className="flex flex-wrap gap-3 justify-between items-senter group">
          {productData.map((data, index) => (
            <div key={index} className="w-[250px] md:w-[280px] group-hove:w-[285px] h-auto mx-auto">
              {/* <div  key={data.id}> */}
              <Link className="mx-auto bg-red-300">
                <div className="  overflow-hidden w-[90%] h-[280px]  hover:w-[100%] duration-300 ">
                  <img
                    src={data.img}
                    alt="topProcut Image"
                    className="object-cover "
                  />
                </div>
                <div className="flex flex-col mt-4 mb-5 gap-[6px] text-center">
                  <p className="text-red-400 text-xs font-semibold">
                    {data.productName}
                  </p>
                  <p className="text-sm">{data.title}</p>
                  <div className="w-[100px] bg-green-700 text-white flex px-1 rounded-sm mx-auto ">
                    <p className="px-2">{data.rating} ★ |</p>
                    <p> {data.ratingCount} </p>
                  </div>
                  <div className="flex gap-1 justify-center items-center ">
                  <p className="font-bold text-sm">₹{data.mrp.toLocaleString()}</p>
                    <p className="text-xs font-bold text-gray-500 line-through">
                    ₹ {data.oldMrp}
                    </p>
                    <p className="font-semibold text-xs text-red-500">
                      ({data.discount} % off)
                    </p>
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
  );
};

export default TopRated;





// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// // Import images
// import Image1 from "../../assets/TopProcusts/browontshirt.avif";
// import Image2 from "../../assets/TopProcusts/babytoy.avif";
// import Image3 from "../../assets/TopProcusts/blackwatch.avif";
// import Image4 from "../../assets/TopProcusts/bag.avif";
// import Image5 from "../../assets/TopProcusts/brownearbirds.webp";
// import Image6 from "../../assets/TopProcusts/cap.avif";
// import Image7 from "../../assets/TopProcusts/earbirds.webp";
// import Image8 from "../../assets/TopProcusts/grayjeans.avif";
// import Image9 from "../../assets/TopProcusts/handbag2.avif";
// import Image10 from "../../assets/TopProcusts/handbag.avif";
// import Image11 from "../../assets/TopProcusts/smartwatch.avif";
// import Image12 from "../../assets/TopProcusts/trolly.avif";
// import Image13 from "../../assets/TopProcusts/waistbag.avif";
// import Image14 from "../../assets/TopProcusts/whitecap.avif";
// import Image15 from "../../assets/TopProcusts/Tshirt check.avif";
// import Image16 from "../../assets/TopProcusts/sunglasses.avif";

// const TopProductsData = [
//     {
//       id: 1,
//       img: Image1,
//       productName: "Black Tshirt",
//       title: "Regulat Fit Lorem, ipsum dolor sit ",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 1350,
//       oldMrp: "₹3,300",
//       discount: "(55% off)",
//     },
//     {
//       id: 2,
//       img: Image2,
//       productName: "Toy baby",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 715,
//       oldMrp: "₹1,300",
//       discount: "(45% off)",
//     },
//     {
//       id: 3,
//       img: Image3,
//       productName: "Black Watch",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 1035,
//       oldMrp: "₹2,300",
//       discount: "(55% off)",
//     },
//     {
//       id: 4,
//       img: Image4,
//       productName: "Turist Bag",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 1350,
//       oldMrp: "₹1,430",
//       discount: "(35% off)",
//     },
//     {
//       id: 5,
//       img: Image5,
//       productName: "Earbird Noise",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 1299,
//       oldMrp: "₹1,999",
//       discount: "(35% off)",
//     },
//     {
//       id: 6,
//       img: Image6,
//       productName: "Black Cap",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 315,
//       oldMrp: "₹700",
//       discount: "(55% off)",
//     },
//     {
//       id: 7,
//       img: Image7,
//       productName: "Black Earbirds",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 1935,
//       oldMrp: "₹4,300",
//       discount: "(55% off)",
//     },
//     {
//       id: 8,
//       img: Image8,
//       productName: "Jeans Gary",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 1144,
//       oldMrp: "₹1,300",
//       discount: "(12% off)",
//     },
//     {
//       id: 9,
//       img: Image9,
//       productName: "Hand Bag",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 315,
//       oldMrp: "₹700",
//       discount: "(55% off)",
//     },
//     {
//       id: 10,
//       img: Image10,
//       productName: "Hand Bag",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 495,
//       oldMrp: "₹900",
//       discount: "(45% off)",
//     },
//     {
//       id: 11,
//       img: Image11,
//       productName: "Apple Smart Watch",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 6599,
//       oldMrp: "₹9,999",
//       discount: "(34% off)",
//     },
//     {
//       id: 12,
//       img: Image12,
//       productName: "American Trolly",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 10337,
//       oldMrp: "₹12,020",
//       discount: "(14% off)",
//     },
//     {
//       id: 13,
//       img: Image13,
//       productName: "Waist Bag",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 1035,
//       oldMrp: "₹2,300",
//       discount: "(55% off)",
//     },
//     {
//       id: 14,
//       img: Image14,
//       productName: "White Cap",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 300,
//       oldMrp: "₹300",
//       discount: "(0% off)",
//     },
//     {
//       id: 15,
//       img: Image15,
//       productName: "Cheack Tshirt",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 585,
//       oldMrp: "₹1,300",
//       discount: "(55% off)",
//     },
//     {
//       id: 16,
//       img: Image16,
//       productName: "Sunglases",
//       title: "Regulat Fit Lorem, ipsum dolor sit ame",
//       rating: "4.1★",
//       ratingCount: "| 80",
//       mrp: 1350,
//       oldMrp: "₹3,300",
//       discount: "(55% off)",
//     },
//   ];

// const TopRated = () => {
//   const [productData, setProductData] = useState(TopProductsData);
//   const [sortType, setSortType] = useState("");

//   useEffect(() => {
//     let sortedProducts = [...productData]; // Create a copy of the array

//     if (sortType === "price_low_to_high") {
//       sortedProducts.sort((a, b) => a.mrp - b.mrp);
//     } else if (sortType === "price_high_to_low") {
//       sortedProducts.sort((a, b) => b.mrp - a.mrp);
//     }

//     setProductData(sortedProducts);
//   }, [sortType]);

//   return (
//     <div className="bg-white dark:bg-black/85 dark:text-white pt-8 md:pt-20 pb-30">
//       <div className="container">
//         <div className="w-full max-w-[170px] mt-16">
//           <form>
//             <label
//               htmlFor="sort"
//               className="block text-sm font-medium text-gray-700 mb-1"
//             >
//               Sort By:
//             </label>
//             <select
//               name="sort"
//               id="sort"
//               className="w-full border border-gray-300 rounded-lg px-1 py-0.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//               onChange={(e) => setSortType(e.target.value)}
//               value={sortType}
//             >
//               <option value="">Select</option>
//               <option value="price_low_to_high">Price (Low to High)</option>
//               <option value="price_high_to_low">Price (High to Low)</option>
//             </select>
//           </form>
//         </div>

//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-[500] text-center mb-10 md:mb-20  mt-10 md:mt-15">
//           Top Rated
//         </h1>
//         <div className="flex flex-wrap gap-3 justify-between items-center">
//           {productData.map((data) => (
//             <div
//               key={data.id}
//               className="w-[250px] md:w-[280px] h-auto mx-auto transition-all duration-300 hover:scale-105"
//             >
//               <Link to="#" className="block">
//                 <div className="overflow-hidden w-[90%] h-[280px] mx-auto hover:w-full duration-300">
//                   <img
//                     src={data.img}
//                     alt={`${data.productName} - ${data.title}`}
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 <div className="flex flex-col mt-4 mb-5 gap-1.5 text-center">
//                   <p className="text-red-400 text-xs font-semibold">
//                     {data.productName}
//                   </p>
//                   <p className="text-sm text-gray-700 dark:text-gray-300">
//                     {data.title}
//                   </p>
//                   <div className="w-[100px] bg-green-700 text-white flex px-1 rounded-sm mx-auto">
//                     <p className="px-2">{data.rating}</p>
//                     <p>{data.ratingCount}</p>
//                   </div>
//                   <div className="flex gap-1 justify-center items-center">
//                     <p className="font-bold text-sm">
//                       ₹{data.mrp.toLocaleString()}
//                     </p>
//                     <p className="text-xs font-bold text-gray-500 line-through">
//                       {data.oldMrp}
//                     </p>
//                     <p className="font-semibold text-xs text-red-500">
//                       {data.discount}
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopRated;