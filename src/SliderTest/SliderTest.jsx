import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = ({ productImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {productImages.map((image, index) => (
        <div key={index}>
          <img className='ProductImages' src={image} alt={`Product ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
