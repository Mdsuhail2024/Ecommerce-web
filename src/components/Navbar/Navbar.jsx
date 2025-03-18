import React, { useEffect } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
// import { FiSearch } from 'react-icons/fi';
// import { FaSearch } from 'react-icons/fa';
import { IoMdSearch } from "react-icons/io";
import DarkMode from "../DarkMode/DarkMode";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import HomeBurger from "../Homeburger/HomeBurger";
// import Filter from "../Filter/Filter";

export const NavlinkData = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/toprated",
  },
  {
    id: 3,
    name: "Kid's Wear",
    link: "/KidsWear",
  },
  {
    id: 4,
    name: "Men's Wear",
    link: "/menswear",
  },
  {
    id: 5,
    name: "Electronic",
    link: "/electronic",
  },
];

const TrandingProducts = [
  {
    id: 1,
    name: "Tranding Products",
    link: "/trandingproducts",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/bestSelling",
  },
  {
    id: 3,
    name: "Top Quality",
    link: "/topquality",
  },
];
const Navbar = ({ handleOrder }) => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <nav className=" fixed w-full z-99999999 top-0">
      <div
        className="shadow-md bg-white dark:text-white duration:200 relative z-10
    "
      >
        {/* upper Navbar */}
        <div className="bg-primary/40 py-2 ">
          <div className="container flex justify-between items-center">
            {" "}
            {/*mx-auto px-5 sm:px-12*/}
            <div>
              <a
                href="/#"
                className="text-xl font-bold flex items-center gap-1"
              >
                <FiShoppingBag size="40" />
                <span className=""> Shope Me</span>
              </a>
            </div>
            <div className="group hidden sm:block relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px]
             px-2 text-sm py-1 rounded-md duration-300 transition-all  border border-zinc-300 outline-none
              focus:border-primary group dark:bg-slate-800 dark:text-slate-300"
              />
              <IoMdSearch className="text-md absolute text-slate-800 dark:text-slate-300 group-hover:text-primary duration-300 top-2 right-4" />
              {/* <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" /> */}
            </div>
            {/*search bar start here*/}
            <div className="flex items-center gap-4 text-black  ">
              {/* <div className='group hidden sm:block relative'>
            <input type="text" placeholder='Search' className='w-[200px] sm:w-[200px] group-hover:w-[300px]
             px-2 text-sm py-1 rounded-md duration-300 transition-all  border border-zinc-300 outline-none
              focus:border-primary group dark:bg-slate-800 dark:text-slate-300' />
            <IoMdSearch className='text-md absolute text-slate-800 dark:text-slate-300 group-hover:text-primary duration-300 top-2 right-4'  />
          </div> */}
              <div className="bg-linear-to-r from-primary to-secondary text-white shadow-2xl rounded-full group relative ">
                <button className="cursor-pointer px-2 hover:px-[10px] py-1 flex items-center gap-2">
                  <span className="text-sm w-0 group-hover:w-[50px] overflow-hidden transition-all duration-300 ">
                    Order
                  </span>
                  <FaCartShopping className="text-lg text-white" />
                </button>
              </div>
              <div className="flex items-cente gap-3">
                {/* <Filter /> */}
                <DarkMode />
                <HomeBurger />
                {/*dark/light button */}
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* navlinks */}
          <div data-aos="zoom-in" className="flex justify-center text-black">
            <ul className="hidden md:flex py-4  gap-4">
              {NavlinkData.map((data) => (
                <li key={data.id}>
                  <NavLink
                    className="px-4 hover:text-primary duration-300"
                    to={data.link}
                  >
                    {data.name}
                  </NavLink>
                </li>
              ))}
              <li className="group relative ">
                <a
                  className="px-4 hover:text-primary duration-300 flex items-center gap-1 "
                  href="#"
                >
                  Tranding Products
                  <span className="group-hover:rotate-180 transition-all duration-500">
                    <FaCaretDown />
                  </span>
                </a>

                <div className="w-50 absolute z-[9999]  p-2  bg-slate-200 rounded-md shadow-md duration-500 hidden group-hover:block ">
                  <ul className="flex flex-col  gap-2">
                    {TrandingProducts.map((data) => (
                      <li key={data.id}>
                        <NavLink
                          className="hover:bg-slate-300 w-full inline-block p-1 py-2 rounded-md duration-300 "
                          to={data.link}
                        >
                          {data.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
