import React from 'react'
import Logo from '../images/amazon_logo.png'
import Ind from '../images/ind.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
      return (
            <>
                  <div className='flex justify-center items-center w-full h-12 bg-[#37475a] text-white cursor-pointer hover:bg-gray-600'>
                        Back to top
                  </div>

                  <div className='flex bg-[#222f3d] items-center justify-evenly py-10'>

                        <div className='text-white'>
                              <p>Get to Know Us</p>
                              <ul>
                                    <li><a href="#">About Amazon</a></li>
                                    <li><a href="#">Carrers</a></li>
                                    <li><a href="#">Press Releases</a></li>
                                    <li><a href="#">Amazon Science</a></li>
                              </ul>
                        </div>
                        <div className='text-white'>
                              <p>Get to Know Us</p>
                              <ul>
                                    <li><a href="#">About Amazon</a></li>
                                    <li><a href="#">Carrers</a></li>
                                    <li><a href="#">Press Releases</a></li>
                                    <li><a href="#">Amazon Science</a></li>
                              </ul>
                        </div>
                        <div className='text-white'>
                              <p>Get to Know Us</p>
                              <ul>
                                    <li><a href="#">About Amazon</a></li>
                                    <li><a href="#">Carrers</a></li>
                                    <li><a href="#">Press Releases</a></li>
                                    <li><a href="#">Amazon Science</a></li>
                              </ul>
                        </div>
                        <div className='text-white'>
                              <p>Get to Know Us</p>
                              <ul>
                                    <li><a href="#">About Amazon</a></li>
                                    <li><a href="#">Carrers</a></li>
                                    <li><a href="#">Press Releases</a></li>
                                    <li><a href="#">Amazon Science</a></li>
                              </ul>
                        </div>
                  </div>

                  <div className='w-full bg-[#222f3d] flex text-white justify-evenly items-center border-t px-4 py-3'>
                        {/* Logo Section */}
                        <div className='cursor-pointer'>
                              <img className='size-24' src={Logo} alt="Logo" />
                        </div>

                        {/* Language and Country Selector Section */}
                        <div className='flex items-center gap-6'>
                              {/* Language Selector */}
                              <div className='flex items-center gap-2 border px-4 py-2 cursor-pointer'>
                                    <FontAwesomeIcon icon={faEarthAmerica} />
                                    <p>English</p>
                              </div>

                              {/* Country Selector */}
                              <div className='flex items-center gap-2 border px-4 py-2 cursor-pointer'>
                                    <img className='w-5 h-4' src={Ind} alt="India" />
                                    <p>India</p>
                              </div>
                        </div>
                  </div>

                  <div className='w-full bg-[#0f1111] items-center justify-items-center text-white py-5'>
                        <ul className='flex text-xs space-x-3'>
                              <a href="#">Conditions of Use & Sales</a>
                              <a href="#">Privacy Notes</a>
                              <a href="#">Interest-Based Ads</a>
                        </ul>
                        <p className='text-xs'>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
                  </div>


            </>
      )
}

export default Footer


                  {/* <div className='w-full bg-[#222f3d] flex text-white justify-evenly items-center border-t'>
                        <div>
                              <img className='size-24' src={Logo} />
                        </div>
                        <div className='flex items-center gap-3'>
                              <div className='flex space-x-3 items-center border px-5 py-3 mb-12'>
                                    <FontAwesomeIcon icon={faEarthAmerica} />
                                    <p>English</p>
                              </div>
                              <div className='flex space-x-3 border px-5 py-3 mb-12'>
                                    <img className='w-5 h-4 mt-1' src={Ind} alt="" />
                                    <p>India</p>
                              </div>
                        </div>
                  </div>
                  */}
