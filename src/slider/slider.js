import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slider() {
  const slides = [
    {
      url: 'https://werare.com.ua/image/cache/webp/catalog/i/ln/bn/d8153b39bc941f21474cde14708003f2-652x733.webp',
    },
    {
      url: 'https://sothebys-md.brightspotcdn.com/dims4/default/0b6b485/2147483647/strip/true/crop/3044x3044+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Fd0%2F51%2F0d7d3b0e4b4e8006b9ad3e09de6b%2F385sneakers-bvlpq-05.jpg',
    },
    {
      url: 'https://sothebys-md.brightspotcdn.com/c6/c6/5404dc964a79b367a0114d8c7cea/385sneakers-bvlpq-07.jpg',
    },

    {
      url: 'https://sothebys-md.brightspotcdn.com/dims4/default/eb6f717/2147483647/strip/true/crop/3191x3191+0+0/resize/800x800!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Fd3%2Fb6%2Fb4d9c980412f828adafc91203672%2F385sneakers-bvlpq-06.jpg',
    },
    {
      url: 'https://yankeekicks.com/wp-content/uploads/2020/06/DSC02183-1024x683.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[1135px] h-[573px] w-full m-auto py-auto px-auto relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-auto h-[573px] rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
