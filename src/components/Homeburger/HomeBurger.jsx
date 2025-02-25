
// import React, { useState } from 'react'
// import { FaBars, FaTimes, } from "react-icons/fa";
// import { NavLink } from 'react-router-dom';


// const HomeBurger = () => {
//     const NavlinkData = [
//         {
//           id: 1,
//           name: "Home",
//           link: "/",
//         },
//         {
//           id: 2, 
//           name: "Top Rated", 
//           link: "/toprated",
//         },
//         {
//           id: 3,
//           name: "Kid's Wear",
//           link: "/KidsWear",
//         },
//         {
//           id: 4,
//           name: "Men's Wear",
//           link: "/menswear",
//         },
//         {
//           id: 5,
//           name: "Electronic",
//           link: "/electronic",
//         },
//       ]
//     const [isOpen, setIsOpen] = useState(false)
//   return (
//     <div>
//     <div className='md:hidde'>
//         <button onClick={() => setIsOpen(!isOpen)}
//             // className='bg-linear-to-r from-primary to-secondary text-slate-50 p-1.5'>
//             className='bg-rimary/40  text-slate-100 p-1.5 text-2xl'>
//                {isOpen ? <FaTimes /> :  <FaBars />} 
//         </button>
//     </div>

//   {/* {isOpen && (
//       <div className="flex flex-col gap-y-3 w-[150px] bg-slate-100 absolute right-5 top-15 py-5 duration-700 opacity-100">
//             {NavlinkData.map((data) => (
//           <div key={data.id} className=''>
//             <NavLink className='px-4 hover:text-primary duration-300' to={data.link}>{data.name}</NavLink>
//             </div>
//         ))}
//         </div> 
//   )} */}
//        <div
//         className={`flex flex-col gap-y-3 w-[150px] bg-slate-100 absolute right-0 top-15 py-5 
//             transition-transform duration-500 z-99 ease-in-out ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         }`}
//       >
//         {NavlinkData.map((data) => (
//           <div key={data.id}>
//             <NavLink className='px-4 hover:text-primary duration-300' to={data.link}>
//               {data.name}
//             </NavLink>
//           </div>
//         ))}
//       </div>
    
//     </div>
//   )
// }

// export default HomeBurger

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const HomeBurger = () => {
  const NavlinkData = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Top Rated', link: '/toprated' },
    { id: 3, name: "Kid's Wear", link: '/KidsWear' },
    { id: 4, name: "Men's Wear", link: '/menswear' },
    { id: 5, name: 'Electronic', link: '/electronic' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:hidden'>
      {/* Burger Button */}
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='bg-primary/40 text-slate-100 p-2 rounded-lg hover:bg-primary/60 transition-colors duration-300 '
        >
          {isOpen ? <FaTimes className='text-lg' /> : <FaBars className='text-lg' />}
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`flex flex-col gap-y-3 w-[150px] bg-white shadow-lg rounded-lg absolute right-0 
             top-16 py-5 px-4 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {NavlinkData.map((data) => (
          <NavLink
            key={data.id}
            to={data.link}
            className={({ isActive }) =>
              `px-4 py-1 rounded-md text-gray-700 hover:bg-primary/10 hover:text-primary 
            transition-colors duration-300 z-99 ${
                isActive ? 'bg-primary/10 text-primary font-medium' : ''
              }`
            }
          >
            {data.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomeBurger;