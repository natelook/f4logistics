import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>F4 Logistics</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <div className='h-screen w-screen flex items-center justify-center bg-gray-600 bg-opacity-50'>
        <div className='flex flex-col items-center'>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src='/logo.png'
              height='789px'
              width='1200px'
              alt='company logo'
              priority
            />
          </motion.div>
        </div>
      </div>
    </React.Fragment>
  )
}
