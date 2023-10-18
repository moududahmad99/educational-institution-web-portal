import React, { useRef } from 'react';
import './News.css';

const News = () => {
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseOut = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  return (
    <React.Fragment>
      <div id="news" className='bg-[#FFFFFF] flex w-full my-2 items-center'>
        <div className='news-header'>
          <h4 className='bg-[#79929C] text-white p-2 mr-1 flex'><span className='hidden md:block gulo'>জরুরী- </span> নিউজ</h4>
        </div>
        {/* eslint-disable-next-line */}
        <marquee
          ref={marqueeRef}
          behavior="scroll"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          direction="left"
        >
          <div className='flex'>
            <li className='mx-2 list-square'>
              <a href="##" className=''>পবিত্র ঈদ-মিলাদুন্নবী (সা:) উদযাপন উপলক্ষ্যে কর্মসূচি।</a>
            </li>
            <li className='mx-2'>
              <a href="##" className='list-'>প্রতিষ্ঠানে সাত জন নতুন শিক্ষক নিয়োগ সম্পর্কে।</a>
            </li>
            <li className='mx-2'>
              <a href="##" className='list-'>দাখিল পরীক্ষা-২০২৩ এ মেধাবৃত্তি ও সাধারণ।</a>
            </li>
          </div>
        </marquee>
        <a href="##" className='bg-[#79929C] p-2 text-white flex underline'>সব <span className='hidden md:block '>গুলো</span> </a>
      </div>
    </React.Fragment>
  );
};

export default News;
