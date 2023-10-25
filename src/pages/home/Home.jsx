import React from 'react'

import News from '../../components/news/News';
import Banner from '../../components/banner/Banner';
import About from '../../components/about/About';
import Teachers from '../../components/teachers/Teachers';
import Countdown from '../../components/countdown/Countdown';
import EventsArea from '../../components/eventsArea/EventsArea';
import NoticeBoard from '../../components/noticeBoard/NoticeBoard';

const Home = () => {
  return (
    <>
      <div>
        <News />
        
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-4 sm:gap-y-2 w-full flex sm:justify-center'>
          {/* <div className='col-span-2'> */}
            <Banner />
          {/* </div> */}
          <div>
            <NoticeBoard />
          </div>
        </div>

        <About />
        <Teachers />
        <EventsArea />
        <Countdown />
      </div>
    </>
  )
}

export default Home;