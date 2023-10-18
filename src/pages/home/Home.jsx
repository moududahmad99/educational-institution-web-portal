import React from 'react'

import News from '../../components/news/News';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Teachers from '../../components/teachers/Teachers';
import Countdown from '../../components/countdown/Countdown';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <div>
        <News />
        <Banner />
        <About />
        <Teachers />
        <Countdown />
        <Footer />
      </div>
    </>
  )
}

export default Home;