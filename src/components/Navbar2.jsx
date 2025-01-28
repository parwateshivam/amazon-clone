import React from 'react'
import Shop from '../images/SHOP-NOW.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar2 = () => {
  return (
      <div className='w-full h-auto bg-[#222f3d] flex flex-wrap items-center justify-between text-white'>
    {/* content div section */}
            <div className='flex items-center'>
              <div className='flex px-2 py-2 cursor-pointer hover:border h-auto'>
                <FontAwesomeIcon className='size-5 text-white' icon={faBars} />
                <p>All</p>
              </div>
              <ul className='flex items-center'>
                <li className='hidden md:block h-auto hover:border px-2 py-2 cursor-pointer'>Fresh</li>
                <li className='hidden md:block h-auto hover:border px-2 py-2 cursor-pointer'>MX Player</li>
                <li className='h-auto hover:border px-2 py-2 cursor-pointer'>Sell</li>
                <li className='hidden md:block h-auto hover:border px-2 py-2 cursor-pointer'>Best Sellers</li>
                <li className='h-auto hover:border px-2 py-2 cursor-pointer'>Today's Deals</li>
                <li className='hidden md:block h-auto hover:border px-2 py-2 cursor-pointer'>Mobiles</li>
                <li className='hidden md:block h-auto hover:border px-2 py-2 cursor-pointer'>Electronics</li>
              </ul>
            </div>
    {/* image div section */}
            <div className='h-auto w-[400px] hover:border cursor-pointer'>
              <img className='hidden md:block h-auto' src={Shop} />
            </div>
    
      </div>
    
  )
}

export default Navbar2