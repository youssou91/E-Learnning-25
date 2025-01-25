// eslint-disable-next-line no-unused-vars
import React from 'react'
import {motion} from "framer-motion"
 import imgBanniere from  '../../assets/std1.jpg'


const Bannieres2 = () => {
  return (
    <section>
        {/* IMAGES */}
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
            {/* TEXTES */}
            <motion.div 
                initial ={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x:0}}
                className='flex flex-col justify-center'>
                <div className='text-center md:text-left space-y-4 lg:max-w-[450px]'>
                    <h1 className='text-4xl font-bold !leading-snug '>Join our community to start your journey</h1>
                    <p className='text-dark'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed non ipsum tellus. Nulla facilisi. Sed auctor, 
                        arcu a cursus venenatis, massa velit gravida neque, in congue felis arcu nec diam.
                    </p>
                    <a href="" className='primary-btn !mt-8'>
                        Join Now 
                    </a>
                </div>
            </motion.div>
            <div className='flex justify-center items-center'>
                <motion.img
                    initial ={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x:0}}
                    src={imgBanniere} alt="" className='w-[350px] md:max-w-[450px] object-cover drop-shadow'/>
            </div>
            
        </div>
    </section>
  )
}

export default Bannieres2