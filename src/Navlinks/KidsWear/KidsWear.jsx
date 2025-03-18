import React, { useEffect, useState } from "react";
// import { FaStar } from 'react-icons/fa6'
import { Link } from "react-router-dom";

import Image1 from "../../assets/KidsWear/cloth1.avif";
import Image2 from "../../assets/KidsWear/cloth2.avif";
import Image3 from "../../assets/KidsWear/cloth3.avif";
import Image4 from "../../assets/KidsWear/cloth4.avif";
import Image5 from "../../assets/KidsWear/cloth5.avif";
import Image6 from "../../assets/KidsWear/cloth6.avif";
import Image7 from "../../assets/KidsWear/cloth7.avif";
import Image8 from "../../assets/KidsWear/cloth8.avif";
import Image9 from "../../assets/KidsWear/cloth9.avif";
import Image10 from "../../assets/KidsWear/cloth10.avif";
import Image11 from "../../assets/KidsWear/cloth11.avif";
import Image12 from "../../assets/KidsWear/cloth12.avif";
import Image13 from "../../assets/KidsWear/cloth13.avif";
import Image14 from "../../assets/KidsWear/cloth13.webp";
import Image15 from "../../assets/KidsWear/cloth13.avif";
import Image16 from "../../assets/KidsWear/cloth12.avif";

// const KidsWearData = [
// {
//   id: 1,
//   img: "Image1",
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },

// {
//   id: 2,
//   img: "../../assets/KidsWear/cloth2.avif",
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 3,
//   img: Image3,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 4,
//   img: Image4,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 5,
//   img: Image5,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 6,
//   img: Image6,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 7,
//   img: Image7,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 8,
//   img: Image8,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 9,
//   img: Image9,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 10,
//   img: Image10,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 11,
//   img: Image11,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 12,
//   img: Image12,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 13,
//   img: Image13,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 14,
//   img: Image14,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 14,
//   img: Image15,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// {
//   id: 14,
//   img: Image16,
//   brand: "Trampoline",
//   title: "Regulat Fit Lorem, ipsum dolor sit ame",
//   rating: "4.1★",
//   ratingCount: "| 19",
//   mrp: "₹616",
//   oldMrp: "₹190",
//   discount: "(23 % off)",
// },
// ];

const KidsWearData = [
  {
    id: 1,
    img: Image1,
    productName: "Boys & Girls Casual T-shirt Shorts",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 693,
    oldMrp: 900,
    discount: 23,
  },
  {
    id: 2,
    img: Image2,
    productName: "Boys Casual T-shirt Shorts",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.2,
    ratingCount: 12,
    mrp: 864,
    oldMrp: 1200,
    discount: 28,
  },
  {
    id: 3,
    img: Image3,
    productName: "Girls Casual Frock Shorts",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.4,
    ratingCount: 30,
    mrp: 835,
    oldMrp: 1099,
    discount: 24,
  },
  {
    id: 4,
    img: Image4,
    productName: "Boys & Girls Casual Track Paint",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 540,
    oldMrp: 600,
    discount: 10,
  },
  {
    id: 5,
    img: Image5,
    productName: "Boys & Girls T-shirt ",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 25,
    mrp: 857,
    oldMrp: 1299,
    discount: 34,
  },
  {
    id: 6,
    img: Image6,
    productName: "Girls Casual Frock",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 1299,
    oldMrp: 1999,
    discount: 35,
  },
  {
    id: 7,
    img: Image7,
    productName: "Baby Boys & Baby Girls Casual T-shirt Shorts",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 459,
    oldMrp: 999,
    discount: 24,
  },
  {
    id: 8,
    img: Image8,
    productName: "Boys Casual Trauser",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 308,
    oldMrp: 350,
    discount: 12,
  },
  {
    id: 9,
    img: Image9,
    productName: "Baby Boys & Baby Girls Party(Festive) T-shirt Shorts",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 607,
    oldMrp: 1350,
    discount: 55,
  },
  {
    id: 10,
    img: Image10,
    productName: "Girls Casual White Frock Shorts",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 1288,
    oldMrp: 2800,
    discount: 54,
  },
  {
    id: 11,
    img: Image11,
    productName: "Baby Girls Red Top",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 1079,
    oldMrp: 1499,
    discount: 28,
  },
  {
    id: 12,
    img: Image12,
    productName: "Baby Boys Casual T-shirt Shorts",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 346,
    oldMrp: 450,
    discount: 23,
  },
  {
    id: 13,
    img: Image13,
    productName: "Baby Boys Casual T-shirt Shorts",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 1518,
    oldMrp: 2300,
    discount: 34,
  },
  {
    id: 14,
    img: Image14,
    productName: "Baby Boys Casual T-shirt Shorts",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 1839,
    oldMrp: 2090,
    discount: 12,
  },
  {
    id: 15,
    img: Image15,
    productName: "Baby Boys Casual T-shirt Shorts",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 1532,
    oldMrp: 1990,
    discount: 23,
  },
  {
    id: 16,
    img: Image16,
    productName: "Baby Boys Casual T-shirt Shorts",
    title: "Regulat Fit Lorem, ipsum dolor sit",
    rating: 4.1,
    ratingCount: 19,
    mrp: 1122,
    oldMrp: 2040,
    discount: 45,
  },
];

const KidsWear = () => {
  const [products, setProducts] = useState(KidsWearData);
  const [curretFilter, setCurrentFilter] = useState("");
  //   let filteredList;

  //   if (curretFilter == "price_high_to_low") {
  //     filteredList = products.sort((a, b) => b.mrp - a.mrp);
  //   } else if (curretFilter == "price_low_to_high") {
  //     filteredList = products.sort((a, b) => a.mrp - b.mrp);
  //   } else {
  //     filteredList = products;
  //   }

  //   setProducts(filteredList);
  // },[curretFilter]);

  useEffect(() => {
    let sortedProducts = [...products]
    if(curretFilter == "price_low_to_high"){
      sortedProducts.sort((a, b) =>  a.mrp - b.mrp)
    }else if(curretFilter == "price_high_to_low"){
      sortedProducts.sort((a, b) => b.mrp - a.mrp)
    }
    setProducts(sortedProducts)
  }, [curretFilter])
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
              onChange={(e) => {
                setCurrentFilter(e.target.value);
              }}
              value={curretFilter}
            >
              <option value="">Select</option>
              <option value="price_low_to_high">Price (Low to High)</option>
              <option value="price_high_to_low">Price (High to Low)</option>
            </select>
          </form>
        </div>

        <h1 className="text-2xl md:text3xl lg:text-4xl font-[500] text-center mb-10 md:mb-20  mt-10 md:mt-15">
          Kids's👕{" "}
        </h1>
        <div className="flex flex-wrap gap-3 justify-between items-senter group ">
          {products.map((data, index) => (
            <div
              key={data.id}
              className="w-[250px] md:w-[280px] group-hove:w-[285px] h-auto mx-auto "
            >
              {/* <div  key={data.id}> */}
              <Link className="mx-auto ">
                <div className=" overflow-hidden w-[90%] hover:w-[100%] duration-300 ">
                  <img
                    src={data.img}
                    alt="topProcut Image"
                    className="object-cover "
                  />
                </div>
                <div className="flex flex-col mt-4 mb-5 gap-[6px] text-center">
                  <p className="text-red-400 text-xs font-semibold mx-auto">
                    {data.productName}
                  </p>
                  <p className="text-sm">{data.title}</p>
                  <div className="w-[100px] bg-green-700 text-white flex px-1 rounded-sm mx-auto ">
                <p className='px-2'>{data.rating} ★ | </p>
                <p> {data.ratingCount} </p>
              </div>
                  <div className="flex gap-1 justify-center items-center ">
                    <p className="font-bold text-sm">₹{data.mrp.toLocaleString()}</p>
                    <p className="text-xs font-bold text-gray-500 line-through">
                      ₹{data.oldMrp}
                    </p>
                    <p className="font-semibold text-xs text-red-400">
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

export default KidsWear;
