import React from "react";
import BannerImg from "../../assets/4547829.jpg";
import { MdHighQuality } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Bannner = () => {
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white pt-12 md:pt-0">
     
      <div className="container">
      <div className="text-center pt-10 hidden md:block lg:hidden text-slate-500">
        <p data-aos="fade-up">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              obcaecati alias asperiores, sequi deleniti quas dolore quis
              mollitia praesentium doloribus illum numquam corporis aspernatur
              ipsam maiores inventore fugiat repellat. Dignissimos, totam
              blanditiis.
              obcaecati alias asperiores, sequi deleniti quas dolore quis
              mollitia praesentium doloribus illum numquam corporis aspernatur
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-center md:py-10">
          {/* <div className="flex md:flex-none justify-center items-center"> */}
          <div className="">
            {/* <img src={BannerImg} alt="BannerImg" className="w-140 h-60 object-fit md:w-100 md:h-full rounded-sm" /> */}
            <img data-aos='zoom-in' width='400px' src={BannerImg} alt="BannerImg" className="max-w-full h-auto mx-auto rounded-sm  transition-all duration-300 " />
          </div>
          <div data-aos="fade-up" className="flex flex-col gap-5 transition-all duration-300">
            <h1 className="font-bold text-3xl md:text-4xl">
              Winter Sale upto 50% off
            </h1>
            <p  className="text-slate-500  md:hidden lg:block">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              obcaecati alias asperiores, sequi deleniti quas dolore quis
              mollitia praesentium doloribus illum numquam corporis aspernatur
              ipsam maiores inventore fugiat repellat. Dignissimos, totam
              blanditiis.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full  bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-800 flex justify-center items-center">
                  <MdHighQuality size="20" className="text-slate-100" />
                </div>
                <span>High Quality Product</span>
              </div>

              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-gray-200 to-white hover:from-white hover:to-gray-700 flex justify-center items-center">
                  <CiDeliveryTruck size="20" className="text-slate-800" />
                </div>
                <span>Fast Delivery</span>
              </div>

              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center">
                  <MdOutlinePayment size="20" className="text-slate-800" />
                </div>
                <span>Easy Payment Methods</span>
              </div>

              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex justify-center items-center">
                  <BiSolidOffer size="20" className="text-slate-800" />
                </div>
                <span>Get Offerst</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannner;
