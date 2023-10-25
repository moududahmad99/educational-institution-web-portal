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
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Banner;
