import React from 'react'
import Image from 'next/image'
import Meta from './Meta'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function Nav() {
  return (
    <React.Fragment>
      <Meta />
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        className='wrapper py-3 flex items-center justify-between'
      >
        <div className='h-full w-28 md:w-40'>
          <Image
            src='/logo.png'
            width='250px'
            height='164px'
            alt='F4 Logistics Logo'
            layout='responsive'
            priority
          />
        </div>
        <div>
          <a
            href='#location'
            className='flex items-center space-x-2 uppercase hover:text-brand-red transition-colors duration-200 hover:bg-gray-200 p-2 rounded'
          >
            <FaMapMarkerAlt size='1.25em' />
            <span className='font-bold tracking-wide'>Orange, CA</span>
          </a>
        </div>
      </motion.div>
    </React.Fragment>
  )
}
