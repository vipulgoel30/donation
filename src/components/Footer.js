import React, { useState } from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const [sub, setSub] = useState("Subscribe")
    const subscribe = () => {
        setSub("Subscribed");
        toast.success("Subscribed")
    }
    return (
        <>
            <div className='grid grid-flow-row sm:grid-cols-3  my-10 mx-4 sm:mx-12 md:mx-20 gap-8 sm:gap-4  '>
                <Link to="/" >
                    <div className='flex gap-2 sm:flex-col items-center sm:items-start'>
                        <div className='flex flex-col md:flex-row md:items-center md:gap-4 '>
                            < Logo dimension={4} />
                            <p className='font-bold text-xl '>DoNation</p>
                        </div>
                        <p className='block'>DoNations is an independent Not for Profit Organisation founded in 2023 by college students in order to do something valuable and good for the society. </p>
                    </div>
                </Link>

                <div className='flex flex-col font-medium gap-4 ml-2 sm:ml-8 md:ml-16'>
                    <h1 className='font-bold text-xl '>QUICK LINKS</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='cursor-pointer hover:underline '>Home</li>
                        <li className='cursor-pointer hover:underline '>About</li>
                        <li className='cursor-pointer hover:underline '>Partners</li>
                        <li className='cursor-pointer hover:underline '>Testimonials</li>
                        <li className='cursor-pointer hover:underline '>Privacy Policy</li>
                        <li className='cursor-pointer hover:underline '>Donors</li>
                        <li className='cursor-pointer hover:underline '>NGOs</li>
                    </ul>
                </div>

                <div className='flex flex-col gap-4 '>
                    <h1 className='font-bold text-xl '>UPDATES</h1>

                    <form onSubmit={(event) => {
                        event.preventDefault();
                        subscribe()
                    }} className="w-full flex gap-4 flex-col">
                        <input className='w-full border text-sm px-3 py-2   bg-gray-200 rounded-lg hover:bg-white' type="email" name="" id="" placeholder='Email Address' required />
                        <button className="w-full font-semibold  px-3 py-2  bg-gradient-to-r from-gradient1a to-gradient1b border rounded-lg ">{sub}</button>
                    </form>


                    <h1 className='font-bold text-xl'>CONNECT</h1>
                    <div className='flex gap-3 '>
                        <a href="https://www.instagram.com/">
                            <AiFillInstagram className="text-4xl text-pink-600 cursor-pointer" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <AiOutlineTwitter className="text-4xl text-gradient1b cursor-pointer" />
                        </a>
                        <a href="https://twitter.com/">
                            <FaYoutube className="text-4xl text-red-600 cursor-pointer" />
                        </a>
                        <a href="https://in.linkedin.com/">
                            <FaLinkedinIn className="text-4xl text-blue-600 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
            <p className='font-bold flex justify-center bg-gradient-to-r from-gradient1a to-gradient1b border py-2 w-full'>Copyright &copy; | All rights reserved 2023</p>
        </>
    )
}

export default Footer