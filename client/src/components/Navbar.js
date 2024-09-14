import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <div>
      <nav>
        <ul className='flex justify-between bg-amber-500 items-center p-6'>
          <li>
            <RxHamburgerMenu 
              className='text-2xl cursor-pointer font-bold' 
              onClick={handleBurger} 
            />
          </li>
          <li className='flex justify-center items-center gap-3 '>
            <h1 className='text-3xl  text-teal-800 font-semibold font-[ui-sans-serif]'>
               Farm Direct
            </h1>
          </li>
          <li className='flex gap-7'>
            <CiSearch className='text-3xl cursor-pointer font-bold' />
            <Link to="/cart"><CiShoppingBasket className='text-3xl cursor-pointer font-bold' /></Link>
          </li>
        </ul>
      </nav>

      <div 
        className={`fixed top-0  w-screen h-screen bg-slate-100 p-8 space-y-8 z-50 transform transition-transform sm:w-96 ${burger ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='flex items-center'>
        <h1 className='text-4xl  text-teal-950 font-semibold font-[ui-sans-serif]'>
              Farm Direct
            </h1>
        <RxCross2 
          className='text-2xl cursor-pointer absolute top-10 right-6 hover:rotate-90 hover:ease-in hover:duration-200' 
          onClick={handleBurger} 
        /></div>
        <hr className=' border-slate-950'/>
        <div className='flex flex-col space-y-10'>
          
          <Link to="/shop"><li className=' list-none'><p className='text-3xl font-semibold text-teal-900 font-[ui-sans-serif] '>Shop All</p></li></Link>
          <li className=' list-none'><p className='text-3xl font-semibold text-teal-900 font-[ui-sans-serif] '>Contact</p></li>
          <li className=' list-none'><p className='text-3xl font-semibold text-teal-900 font-[ui-sans-serif] '>Home</p></li>
          <li className=' list-none'><p className='text-3xl font-semibold text-teal-900 font-[ui-sans-serif] '>Track order</p></li>
          <li className=' list-none'><p className='text-3xl font-semibold text-teal-900 font-[ui-sans-serif] '>About</p></li>
        </div>
      </div>  

    </div>
  );
};

export default Navbar;

