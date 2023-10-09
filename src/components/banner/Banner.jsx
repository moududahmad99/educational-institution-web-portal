import React from 'react';
import './Banner.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
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

      <div className='bg-[#FFFFFF] banner-right mt-4 sm:mt-0 shadow-lg'>
        <h2 className='bg-[#79929C] text-center mb-2 py-4 text-white text-md shadow-lg'>নোটিশ বোর্ড</h2>
        <div className='banner-rightNotice'>

          <div className='bg-[#F1EFEF] flex m-2 cursor-pointer items-center'>
            <div className='notice-date flex items-center justify-center py-2 flex-col  text-center text-white bg-[#79929C]'>
              <h5 className='border-b'>৩, নভেম্বর</h5>
              <h5>২০২৩</h5>
            </div>
            <div className='items-center notice-desc flex px-4 py-2'>
              <h4>
                পবিত্র ঈদ-মিলাদুন্নবী (সা:) উদযাপন উপলক্ষ্যে কর্মসূচি
              </h4>
            </div>
          </div>

          <div className='bg-[#F1EFEF] flex m-2 cursor-pointer items-center'>
            <div className='notice-date flex items-center justify-center py-2 flex-col  text-center text-white bg-[#79929C]'>
              <h5 className='border-b'>২৭, অক্টোবর</h5>
              <h5>২০২৩</h5>
            </div>
            <div className='items-center notice-desc flex px-4 py-2'>
              <h4>
              প্রতিষ্ঠানে সাত জন নতুন শিক্ষক নিয়োগ সম্পর্কে ।
              </h4>
            </div>
          </div>

          <div className='bg-[#F1EFEF] flex m-2 cursor-pointer items-center'>
            <div className='notice-date flex items-center justify-center py-2 flex-col  text-center text-white bg-[#79929C]'>
              <h5 className='border-b'>২২, এপ্রিল</h5>
              <h5>২০২৩</h5>
            </div>
            <div className='items-center notice-desc flex px-4 py-2'>
              <h4>
              দাখিল পরীক্ষা-২০২৩ এ মেধাবৃত্তি ও সাধারণ 
              </h4>
            </div>
          </div>


          <div className='bg-[#F1EFEF] flex m-2 cursor-pointer items-center'>
            <div className='notice-date flex items-center justify-center py-2 flex-col  text-center text-white bg-[#79929C]'>
              <h5 className='border-b'>২, ডিসেম্বর</h5>
              <h5>২০২৩</h5>
            </div>
            <div className='items-center notice-desc flex px-4 py-2'>
              <h4>
                পবিত্র ঈদ-মিলাদুন্নবী (সা:) উদযাপন উপলক্ষ্যে কর্মসূচি
              </h4>
            </div>
          </div>

          <div className='bg-[#F1EFEF] flex m-2 cursor-pointer items-center'>
            <div className='notice-date flex items-center justify-center py-2 flex-col  text-center text-white bg-[#79929C]'>
              <h5 className='border-b'>৯, জানুয়ারি</h5>
              <h5>২০২৩</h5>
            </div>
            <div className='items-center notice-desc flex px-4 py-2'>
              <h4>
              প্রতিষ্ঠানে সাত জন নতুন শিক্ষক নিয়োগ সম্পর্কে ।
              </h4>
            </div>
          </div>
          
          <div className='bg-[#F1EFEF] flex m-2 cursor-pointer items-center'>
            <div className='notice-date flex items-center justify-center py-2 flex-col  text-center text-white bg-[#79929C]'>
              <h5 className='border-b'>৮, জুন</h5>
              <h5>২০২৩</h5>
            </div>
            <div className='items-center notice-desc flex px-4 py-2'>
              <h4>
              দাখিল পরীক্ষা-২০২৩ এ মেধাবৃত্তি ও সাধারণ 
              </h4>
            </div>
          </div>
          

        </div>

      </div>
    </div>
  );
};

export default Banner;
