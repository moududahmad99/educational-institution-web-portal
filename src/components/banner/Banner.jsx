import React from 'react';
import './Banner.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {


  const notices = [
    {
      date: '৩, নভেম্বর',
      description: 'পবিত্র ঈদ-মিলাদুন্নবী (সা:) উদযাপন উপলক্ষ্যে কর্মসূচি',
      year: '২০২৩',
    },
    {
      date: '২৭, অক্টোবর',
      description: 'প্রতিষ্ঠানে সাত জন নতুন শিক্ষক নিয়োগ সম্পর্কে ।',
      year: '২০২৩',
    },
    {
      date: '১০, সেপ্টেম্বর',
      description: 'প্রাথমিক শিক্ষা পরীক্ষার সময়সূচি ঘোষণা',
      year: '২০২৩',
    },
    {
      date: '২৫, জুন',
      description: 'উচ্চশিক্ষা ক্লাসের পড়াশোনা সময়সূচি প্রকাশ',
      year: '২০২৩',
    },
    {
      date: '১৫, মে',
      description: 'শিক্ষা প্রতিষ্ঠানে ছুটির দিনের ঘোষণা',
      year: '২০২৩',
    },
    // Add more notice data here
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slideContainerStyle = {
    position: 'relative',
  };

  const slideimgStyle = {
    objectFit: 'cover',
    position: 'relative',
  };

  const gradientOverlayStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.0))',
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 sm:gap-y-2  flex sm:justify-center'>
      <div className='col-span-2'>
        <Slider {...settings}>
          <div style={slideContainerStyle}>
            <div style={gradientOverlayStyle}></div>
            <img src="/assets/mujib.png" alt="img" style={slideimgStyle} />
          </div>

          <div style={slideContainerStyle}>
            <div style={gradientOverlayStyle}></div>
            <img src="/assets/banner-1.png" alt="img" style={slideimgStyle} />
          </div>
        </Slider>
      </div>

      <div className='relative pb-12 sm:pb-16 md:pb-16 lg:pb-16 bg-[#FFFFFF] banner-right mt-4 sm:mt-0 shadow-lg'>
        <h2 className='bg-[#79929C] text-center mb-2 py-4 text-white text-md shadow-lg'>নোটিশ বোর্ড</h2>

        <div className='banner-rightNotice max-h-72 sm:max-h-72 md:max-h-72 lg:max-h-44 xl:max-h-72'>
          {notices.map((notice, index) => (
            <div className='bg-[#F1EFEF] flex m-2 cursor-pointer items-center' key={index}>
              <div className='notice-date flex items-center justify-center py-2 flex-col text-center text-white bg-[#79929C]'>
                <h5 className='border-b number-font'>{notice.date}</h5>
                <h5 className='number-font'>{notice.year}</h5>
              </div>
              <div className='items-center notice-desc flex px-4 py-2'>
                <h4>{notice.description}</h4>
              </div>
            </div>
          ))}

        </div>
          <div className='mt-5 absolute bottom-1 right-0 mb-3 mr-2 text-end'>
            <a href="##" className='py-2 px-5 text-sm  underline text-white font-medium bg-[#79929c]'>সকল নোটিশ</a>
          </div>

      </div>
    </div>
  );
};

export default Banner;
