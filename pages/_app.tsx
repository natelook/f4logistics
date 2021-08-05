import '../styles/global.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Nav from '@components/Nav'
import Footer from '@components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  )
}
export default MyApp
