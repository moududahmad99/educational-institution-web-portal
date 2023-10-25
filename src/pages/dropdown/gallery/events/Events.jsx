import React from 'react'
import DetailEvents from '../detailEvents/DetailEvents';

const Events = () => {

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
        <div className="pages-title my-4 bg-gradient-to-r from-[rgba(244,254,255,1)] to-[rgba(161,182,182,1)] text-center flex flex-col items-center py-4">

          <h3 className='bg-[#79929C] text-lg font-medium my-2 text-white px-14 sm:px-14 py-2'>ইভেন্টস</h3>
          <p className='text-md font-medium mt-2'>home / gallery / <span className='text-red-800'> events</span></p>
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
                <a href="##" className='px-4 text-sm py-1 underline text-white font-medium bg-[#ABBFBF]'>বিস্তারিত</a>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Event Component. */}
        <DetailEvents />
      </div>
    </React.Fragment>
  )
}

export default Events