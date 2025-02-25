import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa6";


const ShopeMeData = [
    {
        id: 1,
        title: "Who We Are",
        link: "/#whoaweare",
    },
    {
        id: 2,
        title: "Join Our Team",
        link: "/#joinourteam",
    },
    {
        id: 3,
        title: "Term & Condition",
        link: "/#term&condition",
    },
    {
        id: 4,
        title: "We Respect Your Privacy",
        link: "/#werespectyourprivect",
    },
    {
        id: 5,
        title: "Fees and Payments",
        link: "/#feesandpayments",
    },
    {
        id: 6,
        title: "Returnd & Refund Policy",
        link: "/#returnpolicy",
    },
    {
        id: 7,
        title: "Promotion Term & Condition",
        link: "/#promotioncondition",
    },
    {
        id: 8,
        title: "Who We Are",
        link: "/#whoweare",
    },
]
const HelpData = [
    {
        id: 1,
        title: "Track Your Order",
        link: "/#trackyouorder",
    },
    {
        id: 2,
        title: "Frequently Ask Question",
        link: "/#frequentlyaskquestion",
    },
    {
        id: 3,
        title: "Returns",
        link: "/#returns",
    },
    {
        id: 4,
        title: "Cancellations",
        link: "/#cancellations",
    },
    {
        id: 5,
        title: "Payment",
        link: "/#payment",
    },
    {
        id: 6,
        title: "Custmer Care",
        link: "/#custmercard",
    },
    {
        id: 7,
        title: "Track Your Order",
        link: "3",
    },
    {
        id: 8,
        title: "How Do| Redeen My Coupon",
        link: "/#redeemmycoupon",
    },
]


const Footer = () => {

  return (
    <div className='py-25 bg-black/90 text-white'>
        <div className="container ">
            {/* <div className='flex flex-col md:flex-row gap-8 justify-between items-center'>

                <div className='flex flex-col gap-5'>
                    <div className='flex gap-3 items-center'>
                        <FiShoppingBag size={40} /> 
                        <span className='text-3xl font-bold'>Shope Me</span>
                    </div>
                    <p className=' text-slate-400 '>Apart from shopping and browsing, you can also earn money! Become a seller on Meesho and turn your passion into profit. Explore our wholesale pricing, easily share products with your network, and earn a commission on every sale. </p>
                </div>

                <div className='flex flex-col gap-5'>
                    <h1 className='text-xl font-bold'>Important Links</h1>
                </div>
                
                <div className='flex flex-col gap-5'>
                    <h1>Help!</h1>
                </div>

                <div className='flex flex-col gap-5'>
                    <h1>Follow us </h1>
                </div>

            </div> */}
            <div data-aos="zoom-in" className="grid grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4  gap-5 ">

                <div className='flex flex-col gap-5 md:px- bg-red-30'>
                    <div className='flex gap-3 items-center'>
                        <FiShoppingBag size={40} /> 
                        <span className='text-xl md:text-3xl font-bold'>Shope Me</span>
                    </div>
                    <p className=' text-slate-400 text-sm '>Apart from shopping and browsing, you can also earn money! Become a seller on Meesho and turn your passion into profit. Explore our wholesale pricing, easily share products with your network, and earn a commission on every sale  Explore our wholesale pricing, easily share products with your network . </p>
                    <span className='text-slate-400 text-sm hidden md:block'> 
                    passion into profit. Explore our  pricing,  and earn a commission on every sale Explore our wholesale.!
                    </span>
                    <span className='text-slate-400 text-sm hidden md:block'> 
                    Home Products: Style Beyond the Closet.!
                    </span>
                    
                </div>

                <div className='flex flex-col text-center md:text-right'>
                    <h1 className='text-xl font-bold mb-4  '>Shome Me</h1>
                    {ShopeMeData.map((data) => (
                        <div key={data.id} className=''>
                            <a className='text-xs text-slate-400 hover:text-primary inline-block 
                            hover:translate-x-2 duration-300' href={data.link}>{data.title}</a>
                        </div>
                    ))}
                </div>
                
                <div className='flex flex-col text-center md:text-right'>
                    <h1  className='text-xl font-bold mb-4'>Help!</h1>
                    {HelpData.map((data) => (
                       <div key={data.id} className=''>
                       <a className='text-xs text-slate-400 hover:translate-x-2 duration-300 inline-block hover:text-primary ' href={data.link}>{data.title}</a>
                   </div>
                    ))}
                </div>

                <div className='flex flex-col text-center md:text-right'>
                    <h1  className='text-xl font-bold mb-4'>Follow us </h1> 
                    <div className=' text-slate-400 text-center md:text-right'>
                        <a className='inline-block mx-1' href="https://www.instagram.com"> <FaInstagram size="25" /></a>
                        <a className='inline-block mx-1' href="https://www.twitter.com"> <FaTwitter size="25" /></a>
                        <a className='inline-block mx-1' href="https://www.facebook.com"> <MdOutlineFacebook size="25" /></a>
                        <a className='inline-block' href="https://www.linkedin.com/"> <FaLinkedinIn size="25" /></a>
                    </div>
                    <div className='flex items-center justify-center md:justify-end gap-2 text-slate-400 py-2'>
                       <a href="https://www.google.co.in/maps/@24.4328289,85.5212746,14.25z?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"> <IoLocationSharp size="25" /></a>
                        <span className='text-xs text-slate-400' >Jharkhand, Haiderabad, Mumbai</span>
                    </div>

                    <div className='flex items-center justify-center md:justify-end gap-2 text-slate-400 '>
                        <a href="https://mail.google.com"><MdOutlineAttachEmail size="20" /></a>
                        <a className='text-xs text-slate-400' href="mailto:mdsuhail30111@gmail.com">mdsuhail30111@gmail.com</a>
                        {/* <span className='text-xs text-slate-400' >Share your thought </span> */}
                    </div>
                    <div className='flex items-center justify-center md:justify-end gap-2 text-slate-400  py-2 '>
                        <MdCall size="20" />
                        <a className='text-xs text-slate-400' href="tel:+916206621689">+91 620-662-1689</a>
                    </div>
                </div>

            </div>

            <div data-aos="zoom-in"  className='flex flex-col mt-12 '>
                <div className="h-[0.5px] w-full   bg-slate-400"></div>
                <p className='text-xs text-slate-400 mt-5'>Kurtas and Kurtis: Where tradition meets trend. Explore vibrant prints, flattering cuts, and unmatched comfort for any event.
                 Jeans and Pants: From high-waist marvels to relaxed wide-leg options, find styles that match your mood and movement.
                 Beauty Products: Complete your look with bold lipsticks, glowing serums, and signature fragrances.</p>
                 <p className='text-slate-300 mt-1'>Men’s Fashion Shopping: Effortlessly Cool, Always Stylish</p>
                 <p className='text-xs text-slate-400 mt-2' >Who says looking good has to be complicated? At AJIO’s platform, it’s all about effortless, cool and timeless style. Whether you’re gearing up for a night out or need essentials for a laid-back weekend, we’ve got the perfect pieces to keep you looking sharp without the hassle, providing you with the best online fashion shopping experience.</p>
                 <p className='text-xs text-slate-400 mt-3 '>Why Shop from AJIO?</p>

                 <div className='flex justify-between items-center mt-10 text-slate-200'>
                   <p className='text-lg'>Payment Methods</p>
                   <p className='text-lg'>Secure Systems</p>
                 </div>
                 <div className="flex justify-between items-center flex-wrap mt-5">
                    <div className="flex flex-col md:flex-row justify-cener gap-4 items-center flex-wrap bg-rd-300">
                        <div className='flex gap-2 items-center'>
                            <p className='text-slate-400'>Net</p>
                            <p className='px-2 py-[0.5] bg-slate-100 rounded-sm text-sm text-slate-600'>Banking</p>
                        </div>
                        <div>
                            <span className='text-slate-400 text-lg  inline-block'>Verified</span>
                            <span className='text-xs text-slate-400 inline-block'>by</span>
                            <span className='text-slate-400 text-lg inline-block font-bold'>Visa</span>
                        </div>
                        <div className='flex gap-[-5px]'>
                            <div className='flex justify-center items-center h-8 w-8 rounded-full border border-slate-400'>
                            <p className=' text-[8px] text-slate-400'>Master</p>
                            </div>
                            <div className='flex justify-center items-center h-8 w-8 rounded-full border border-slate-400 '>
                            <p className=' text-[8px] text-slate-400'>Card</p>
                            </div>
                        </div>
                        <div className='flex items-center text-slate-400'>
                            <FaRupeeSign size="40" />
                            <div className='flex flex-col '>
                            <p>CASH ON</p>
                            <p>DELIVERY</p>
                        </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='h-8 w-8 rounded-full flex justify-center items-center bg-white'>
                                <p className='font-bold text-slate-500'>Jio</p>
                            </div>
                            <p className='text-slate-400 font-semibold text-sm'>Money</p>
                        </div>
                    </div>

                    <div className='flex gap-1 items-center text-slate-400  bg-red-40'>
                        <FaUserLock size="40" />
                        <div className="flex flex-col">
                            <p className='text-xs'>256 BIT</p>
                            <p className='text-[8px]'>Encryption</p>
                        </div>
                    </div>

                   </div>
            
       
        </div>
    </div>
    </div>
    
  )
}

export default Footer