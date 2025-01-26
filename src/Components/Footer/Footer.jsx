// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaInstagram, FaSnapchat, FaYoutube, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <footer className='py-28 bg-[#f7f7f7]'>
        <motion.div
            initial={{opacity: 0, y:50}}
            whileInView={{opacity:1, y:0}}
            className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                {/* First Select */}
                <div className='space-y-4 max-w-[300px]'>
                    <h1 className='text-2xl font-bold'>The coding Journey !!</h1>
                    <p className='text-dark2'>
                        TCJ is a platefom dedicated to empowerring aspiring developers. From biginner tutorials 
                        to advanced programming concepts, we provide a comprehensive learning experience designed 
                        to help you master coding skills, build projects, and launch your tech career.
                    </p>
                </div>
                {/* Second Select */}
                <div className="grid grid-cols-2 gap-10">
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'>Course</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-2 text-lg'>
                                <li className='cursor-pointer hover:text-secondary duration-200'>Web Development</li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>Software Development</li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>Apps Development</li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>E-learning </li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-2xl font-bold'>Links</h1>
                        <div className='text-dark2'>
                            <ul className='space-y-2 text-lg'>
                                <li className='cursor-pointer hover:text-secondary duration-200'>Home </li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>Services</li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>About-Us</li>
                                <li className='cursor-pointer hover:text-secondary duration-200'>Contact-Us </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Third  Select */}
                <div className='space-y-4 max-w-[300px]'>
                    <h1 className='text-2xl font-bold'>Get In Touch</h1>
                    <div className='flex items-center'>
                        <input type="text" placeholder='Enter your email' 
                        className='p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none
                        placeholder:text-dark2'/>
                        <button className='bg-primary text-white font-semibold py-4 px-6 rounded-e-xl '>
                            Go
                        </button>
                    </div>
                    {/* Social icons  */}
                    <div className='flex space-x-4 py-3'>
                        <a href="">
                            <FaSnapchat size={22} className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="">
                            <FaInstagram size={22} className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="">
                            <TbWorldWww size={22} className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="">
                            <FaYoutube size={22} className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="">
                            <FaFacebook size={22} className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="">
                            <FaLinkedin size={22} className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="">
                            <FaTwitter size={22} className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                        <a href="">
                            <FaWhatsapp size={22} className='cursor-pointer hover:text-primary hover:scale-105 duration-200'/>
                        </a>
                       
                    </div>
                </div>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer