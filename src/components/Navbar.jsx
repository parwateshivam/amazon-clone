import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/amazon_logo.png';
import Flag from '../images/ind.png';

const Navbar = () => {
  return (
    <div className="text-white flex flex-wrap items-center justify-between w-full bg-[#0F1111] h-auto px-4 py-2 md:px-6 md:py-0">
      {/* Logo */}
      <div className="h-auto flex-shrink-0">
        <img
          className="w-[100px] h-auto md:w-[125px] cursor-pointer hover:border"
          src={Logo}
          alt="Amazon Logo"
        />
      </div>

      {/* Location (Hidden on smaller screens) */}
      <div className="hidden md:flex items-center cursor-pointer hover:border space-x-2">
        <FontAwesomeIcon className="text-lg" icon={faLocationDot} />
        <p className="text-sm md:text-base">
          Deliver to Nagpur 440001 <br />
          <span className="text-yellow-400 font-bold">Update location</span>
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex w-full md:w-[330px] h-[44px] mt-2 md:mt-0 hover:border-yellow-400">
        <select className="border-none bg-gray-400 rounded-tl rounded-bl cursor-pointer hover:text-black px-3">
          <option value="all">All</option>
        </select>
        <input
          className="flex-grow px-2 text-black outline-none"
          type="text"
          placeholder="Search Amazon.in"
        />
        <button className="bg-yellow-400 px-4 py-2 rounded-r-md hover:bg-yellow-600">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {/* Country Selector */}
      <div className="hidden md:flex items-center mt-2 md:mt-0 hover:border cursor-pointer p-2">
        <img className="w-8 h-5" src={Flag} alt="Flag" />
        <select className="bg-[#0F1111] text-white font-bold ml-2 text-sm">
          <option value="ind">IND</option>
          <option value="en">EN</option>
          <option value="aus">AUS</option>
          <option value="pak">PAK</option>
        </select>
      </div>

      {/* Account and Lists */}
      <div className="hidden md:block cursor-pointer hover:border h-[54px] mt-2 md:mt-0">
        <p className="text-sm">Hello, sign in</p>
        <select className="bg-[#0F1111] border-none font-bold text-sm">
          <option>Account & Lists</option>
        </select>
      </div>

      {/* Returns and Orders */}
      <div className="hidden md:block cursor-pointer hover:border h-[54px] mt-2 md:mt-0">
        <p className="text-sm">Returns</p>
        <p className="font-bold text-sm">& Orders</p>
      </div>

      {/* Cart */}
      <div className="flex items-center cursor-pointer hover:border h-[54px] bg-[#0F1111] p-4 mt-2 md:mt-0">
        <FontAwesomeIcon className="text-lg" icon={faShoppingCart} />
        <p className="ml-2 font-bold text-sm">Cart</p>
      </div>
    </div>
  );
};

export default Navbar;