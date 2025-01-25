// eslint-disable-next-line no-unused-vars
import React from 'react'
import {FaBell} from 'react-icons/fa'
import { motion } from 'framer-motion'
import BgImage from '../../assets/Cloud.png'

const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // backgroundAttachment: 'fixed',
    // backgroundBlendMode: 'overlay',
    // backgroundClip: 'text',
    // textFillColor: 'transparent',
    // height: '100vh',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // color: 'white',
    // fontSize: '2rem',
    // fontWeight: 'bold',
}
const Inscription = () => {
  return (
    <section className='bg-[#f7f7f7]'>
        <motion.div 
            initial = {{opacity: 0}}
            whileInView={{opacity: 1}}
            style={bgStyle} className='container py-24 md:py-48'>
            <motion.div 
                initial = {{opacity: 0, scale: 0.5}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.9, ease:'easeInOut'}}
                className="flex flex-col justify-center ">
                <div className='text-center space-y-4 lg:max-w-[430px] mx-auto'>
                    <h1 className='text-4xl font-bold !leading-snug'>450K+ Students are learning from us </h1>
                    <p className='text-lg'>We are a community of students who come together to learn, grow, and be inspired. </p>
                    <a href="" className='primary-btn !mt-8 inline-flex items-center gap-4 group '>
                        Subcribe Now 
                        <FaBell className='group-hover:animate-bounce group-hover:text-lg duration-200' />
                    </a>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Inscription