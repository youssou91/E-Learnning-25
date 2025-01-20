/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React from 'react'
import { motion } from 'framer-motion';
import { IoMdHappy } from 'react-icons/io';
import { IoPulseOutline } from 'react-icons/io5'; 
import { RiComputerLine } from 'react-icons/ri';
import { CiMobile3 } from 'react-icons/ci';
import { TbWorldWww } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
import {
  SiGatsby,
  // SiGoogleAnalytics,
  SiAdobe,
  SiContentful,
  // SiDigitalOcean,
  // SiGoogleAdwords,
  // SiLegalShield,
  // SiAmazonaws, // Corrected icon name
  SiTrello,
  SiFreelancer,
  SiGoogleanalytics,
  SiBrandfolder,
  SiDigitalocean,
  SiGooglebigtable,
  SiAmazonapigateway,
  SiWesterndigital,
  // SiDigitalStrategy
} from 'react-icons/si';



const serviceData = [
  {
    id: 1,
    title: 'Web Development',
    link: '#',
    description: 'We build websites that are modern, user-friendly, and SEO-friendly.',
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: 'SEO  Optimization',
    link: '#',
    description: 'We are using the following optimization to optimize performance and performance critical features of the application to improve performance and performance critical features of the application to improve performance and performance critical ',
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  
  {
    id: 3,
    title: 'Software Development',
    link: '#',
    description: 'We build software applications that are cross-platform, intuitive, and efficient.',
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: 'Satisfied Clients',
    link: '#',
    description: 'We build software applications that are cross-platform, intuitive, and efficient and that are cross-platform and that are cross-platform and that are cross-platform and that are cross-platform and that are cross-platform and that are cross platform and that are cross-platform and that are cross-platform and that are cross-platform and that are cross-platform and that are cross-platform and that are cross- platform and that are cross-platform and that are cross-platform and that are cross-platform',
    icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: 'Mobile Development',
    link: '#',
    description: 'We build mobile apps that are cross-platform, intuitive, and efficient.',
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 6,
    title: '24/7 Support',
    link: '#',
    description: 'We support the following features of the application to improve performance and performance critical features of the application to improve performance',
    icon: <BiSupport />,
    delay: 0.7,
  },
  {
    id: 7,
    title: 'Digital Marketing',
    link: '#',
    description: 'We help businesses grow their online presence and drive more traffic.',
    icon: <SiGatsby />,
    delay: 0.4,
  },
  {
    id: 8,
    title: 'Branding & Identity',
    link: '#',
    description: 'We create brands that resonate with your target audience and capture their attention.',
    icon: <SiBrandfolder />,
    delay: 0.5,
  },
  {
    id: 9,
    title: 'Data Analytics',
    link: '#',
    description: 'We help businesses understand their data, make informed decisions, and drive growth.',
    icon: <SiGoogleanalytics />,
    delay: 0.6,
  },
  {
    id: 10,
    title: 'UX/UI Design',
    link: '#',
    description: 'We create user-centered experiences that are visually appealing and easy to use.',
    icon: <SiAdobe />,
    delay: 0.7,
  },
  {
    id: 11,
    title: 'Content Creation',
    link: '#',
    description: 'We help businesses create engaging and informative content for their audience.',
    icon: <SiContentful />,
    delay: 0.8,
  },
  {
    id: 12,
    title: 'Digital Transformation',
    link: '#',
    description: 'We help businesses transform their digital landscape and drive growth.',
    icon: <SiDigitalocean />,
    delay: 0.9,
  },
  {
    id: 13,
    title: 'Digital Advertising',
    link: '#',
    description: 'We help businesses create and manage effective digital ads for their audience.',
    icon: <SiGoogleanalytics />,
    delay: 1.0,
  },
  {
    id: 14,
    title: 'Legal & Compliance',
    link: '#',
    description: 'We help businesses navigate the complex legal and compliance landscape.',
    icon: <SiGooglebigtable />,
    delay: 1.1,
  },
  {
    id: 15,
    title: 'Cloud Solutions',
    link: '#',
    description: 'We help businesses leverage cloud services to streamline their operations.',
    icon: <SiAmazonapigateway />,
    delay: 1.2,
  },
  {
    id: 16,
    title: 'Project Management',
    link: '#',
    description: 'We help businesses manage their projects, from planning to execution.',
    icon: <SiTrello />,
    delay: 1.3,
  },
  {
    id: 17,
    title: 'Digital Strategy',
    link: '#',
    description: 'We help businesses develop a digital strategy that aligns with their goals.',
    icon: <SiWesterndigital />,
    delay: 1.4,
  },
  {
    id: 18,
    title: 'Digital Consulting',
    link: '#',
    description: 'We help businesses develop and implement digital solutions.',
    icon: <SiFreelancer />,
    delay: 1.5,

  },
  
]

const SlideLeft = (delay)=>{
  return{
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delaye: delay,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }
}
const Services = () => {
  return (
    <section className='bg-white'>
      <div className="container pb-14 pt-16">
        <h1 className='text-4xl font-bold text-left pb-10'>Services we provide </h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 '>
          {serviceData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{once:true}} 
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-2 items-center justify-center p-4 py-6 
            hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
              <div className="text-6xl mb-2">
                {service.icon}
              </div>
              <h2 className='text-2xl font-semibold text-center px-3'>{service.title}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services