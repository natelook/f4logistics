import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <ContactInfo />
      <Apply />
    </React.Fragment>
  )
}

function Hero() {
  return (
    <div className='flex justify-center pt-36 py-44 wrapper'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className='flex-col items-center justify-center text-center space-y-3'
      >
        <h2 className='tracking-wide text-brand-gray'>Start Driving For Us!</h2>
        <a href='#apply' className='btn'>
          Apply now
        </a>
      </motion.div>
    </div>
  )
}

function About() {
  return (
    <div className='bg-gray-300'>
      <div className='wrapper py-28'>
        <div>
          <h2 className='text-center uppercase mb-10'>About L4 Logistics</h2>
          <div className='grid grid-cols-2 gap-x-4 max-w-3xl mx-auto'>
            <div className='flex items-center justify-center bg-brand-darkRed rounded-lg text-white'>
              <p>Image/Icon Here</p>
            </div>
            <div>
              <h4 className='font-bold'>Heading</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                vitae ducimus distinctio itaque accusantium sequi rerum cum,
                deleniti laudantium, voluptates reiciendis libero asperiores
                impedit odio nam. Asperiores reprehenderit soluta pariatur!
              </p>
            </div>
          </div>
          <div className='grid md:grid-cols-3 my-10 md:items-center md:justify-items-center space-y-3'>
            <div>
              <h3 className='mb-2'>Benefits</h3>
              <ul className='list-disc list-inside'>
                <li>Starting Rate up to $16.50 per hour</li>
                <li>Health Benefit Packages</li>
                <li>Paid Referral Program</li>
                <li>Paid Time Off</li>
                <li>Paid Training</li>
              </ul>
            </div>
            <div>
              <h3 className='mb-2'>Requirements</h3>
              <ul className='list-disc list-inside'>
                <li>Must be 21+ years older</li>
                <li>Must have a valid driver’s license</li>
                <li>Excellent customer service skills</li>
                <li>Previous delivery experience preferred</li>
                <li>Able to lift up to 50 lbs</li>
              </ul>
            </div>
            <div>
              <h3 className='mb-2'>Responsibilities</h3>
              <ul className='list-disc list-inside'>
                <li>Represent the Company in a professional manner.</li>
                <li>
                  Drives van from home office to designated customer locations.
                </li>
                <li>
                  Load all necessary supplies needed for the daily pickups.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactInfo() {
  return (
    <div className='py-16 bg-brand-red text-white flex justify-center'>
      <p>Contact Info</p>
    </div>
  )
}

function Apply() {
  return (
    <div className='wrapper py-28'>
      <h3 className='text-center font-bold mb-5'>Let&apos;s Work Together</h3>
      <form className='max-w-xl mx-auto'>
        <div className='mb-3'>
          <label htmlFor='name' className='font-bold mb-1 block'>
            First and Last Name
          </label>
          <input
            className='border border-gray-400 rounded px-3 py-2 w-full'
            id='name'
            placeholder='Name...'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='font-bold mb-1 block'>
            Email Address
          </label>
          <input
            className='border border-gray-400 rounded px-3 py-2 w-full'
            id='email'
            placeholder='Email...'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='phone' className='font-bold mb-1 block'>
            Phone Number
          </label>
          <input
            className='border border-gray-400 rounded px-3 py-2 w-full'
            id='phone'
            placeholder='Phone...'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='file' className='font-bold mb-1 block'>
            Resume
          </label>
          <input id='file' type='file' className='w-full' />
        </div>
        <div className='mb-3'>
          <button type='submit' className='btn mx-auto'>
            Apply
          </button>
        </div>
      </form>
    </div>
  )
}
