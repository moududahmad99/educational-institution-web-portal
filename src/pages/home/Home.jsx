import React from 'react'

import News from '../../components/news/News';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Teachers from '../../components/teachers/Teachers';
import Countdown from '../../components/countdown/Countdown';
import EventsArea from '../../components/eventsArea/EventsArea';

const Home = () => {
  return (
    <>
      <div>
        <News />
        <Banner />
        <About />
        <Teachers />
        <EventsArea />
        <Countdown />
      </div>
    </>
  )
}

export default Home;