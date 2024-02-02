import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';


import productsData from '../Assets/productsData';


const Multicorousel = ({getProductData}) => {
    const [activeIndex, setActiveIndex] = useState(0);
  const [data, setdata] = useState(productsData)

  const navigate=useNavigate()
  const SendProductDetails = (item) => {
    getProductData(item)
    navigate('/ProductDetails')
  }

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const settings = {
    // dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    
     autoplaySpeed: 5000,
    responsive: responsiveSettings,
    beforeChange: (current, next) => {
        setActiveIndex(next);
    }
  };
  const customSlideStyles = {
    transition: 'transform 0.5s ease-in-out', // Smooth transition for zoom effect
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    
  };

  const customActiveSlideStyles = {
    transform: 'scale(2.)',  // Zoom effect for the active slide
    zIndex: 1,  // Ensure the active slide is on top of others
    marginLeft: '50px',
  paddingBottom: '20px',
  paddingTop: '10px'
  };

   
  return (
    <div className='p-5 mt-4'  style={{backgroundColor:'#212529'}}>
        <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index}  >
          {/* Render your dynamic content here */}
          <div className={`slick-slide ${index === activeIndex ? 'active' : ''}`}>
          <img  onClick={()=>SendProductDetails(item)} className='img-fluid grow w-50 mx-4 pt-3' src={item.heroImage} alt={item.title} />
          </div>
          <p className='text-white  ' style={{fontSize:'12px'}}><span className='mx-1'>&#8377;</span>{item.title}</p>
          <p className='text-white '><span className='mx-1'>&#8377;</span>{item.finalPrice}</p>


        </div>
      ))}
    </Slider>
  

    </div>
  )
}

export default Multicorousel
