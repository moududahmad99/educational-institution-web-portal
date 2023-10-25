import React from 'react'
import { NavLink } from 'react-router-dom';

const EventsArea = () => {

  const eventsData = [
    {
      id: 1,
      title: 'শিক্ষা উৎসব প্রতিযোগিতা',
      date: '১২ ডিসেম্বর ২০২২',
      imageSrc: '/assets/events.jpg',
    },
    {
      id: 2,
      title: 'শিক্ষা কার্যশালা প্রতিযোগিতা',
      date: '১৫ ডিসেম্বর ২০২২',
      imageSrc: '/assets/events.jpg',
    },
    {
      id: 3,
      title: 'স্কুল ক্যাম্পাস ইভেন্ট',
      date: '১৫ ডিসেম্বর ২০২২',
      imageSrc: '/assets/events.jpg',
    },
    {
      id: 4,
      title: 'শিক্ষা পরিক্ষা সফলতা',
      date: '১৫ ডিসেম্বর ২০২২',
      imageSrc: '/assets/events.jpg',
    },
  ];



  return (
    <React.Fragment>
      <div id="events">
        <div className="teachers-title mt-5">
          <h3 className='bg-[#79929C] text-white font-medium text-md p-4'>ইভেন্টস</h3>
        </div>
        <div className="events-wrapper my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {eventsData.map(event => (
            <div key={event.id} className='events-inner my-4 shadow bg-[#FAFAFA]'>
              <picture>
                <img src={event.imageSrc} alt="events" />
              </picture>
              <h3 className='p-4 text-md font-medium'>{event.title}</h3>
              <p className='number-font font-normal py-2 px-4'>{event.date}</p>
              <div className='py-4 text-end pr-2'>
                <a href="##" className='px-4 text-sm py-1 underline text-dark-400 font-medium bg-[#C6D6D6]'>বিস্তারিত</a>
              </div>
            </div>
          ))}

        </div>

        {/* All Event Button */}
        <div className='my-8 text-end'>
          <NavLink to="gallery/events" className='py-2 px-5 text-sm  underline text-white font-medium bg-[#79929c]'>সব ইভেন্ট</NavLink>
        </div>
        
      </div>
    </React.Fragment>
  )
}

export default EventsArea