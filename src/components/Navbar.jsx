import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faShoppingCart, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Logo from '../images/amazon_logo.png'
import Flag from '../images/ind.png'

const Navbar = () => {
  return (
<>
{/* main div (Navbar)-1 */}
<div className='text-red-500 flex justify-between items-center w-full bg-[#0F1111] h-16'>

      {/* left div before search bar */}

        <div className='flex space-x-3 mt-2'>
          <img className='w-[130px] h-[50px] cursor-pointer hover:border' src={Logo} alt="amazon_logo" />
          <div className='flex cursor-pointer  hover:border h-[54px] space-x-2 overflow-hidden'>
            <FontAwesomeIcon className='mt-7' icon={faLocationDot} />
            <p>Delivering to Nagpur 440001 <br /> Update location</p>
          </div>
        </div>

      {/* search bar  */}

        <div className='flex w-[330px] h-[44px]'>
          <select className='border-none bg-gray-400 rounded-tl rounded-bl cursor-pointer hover:text-black px-3'>
            <option>All</option>
          </select>
          <input className='w-[250px]' type="text" placeholder='Search Amazon.in' />
          <button className='bg-yellow-400 px-4 py-2 rounded-r-md hover:bg-yellow-600'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

      {/* right div after search bar */}

        <div className='flex space-x-3 h-[54px]'>

          <div className='flex hover:border cursor-pointer'>
            <img className='w-10 h-7 mt-3' src={Flag} />
            <select className='bg-[#0f1111] border-none'>
              <option>IND</option>
              <option>EN</option>
              <option>AUS</option>
              <option>PAK</option>
            </select>
          </div>

          <div className='cursor-pointer hover:border h-[54px]'>
            <p>Hello,sign in</p>
            <select className='bg-[#0f1111] border-none'>
              <option>Account & Lists</option>
            </select>
          </div>

          <div className='cursor-pointer hover:border h-[54px]'>
            <p>Returns</p>
            <p>& Orders</p>
          </div>

          <div className='flex cursor-pointer hover:border h-[54px] bg-[#0f1111] px-4 py-2'>
            <FontAwesomeIcon className='size-10' icon={faShoppingCart} />
            <p className='mt-3'>cart</p>
          </div>
        
        </div>
{/* main div End         */}
</div>

</>
  )
}
export default Navbar