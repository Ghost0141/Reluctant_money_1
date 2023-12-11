import React, { useEffect } from 'react'
import "./testimonial.scss"
import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import styled from '@emotion/styled'
import { IconButton } from '@mui/material'
import { useRef } from 'react'
import { useState } from 'react'
import { testimonialData } from "../../constants/index"
import Aos from "aos"
import 'aos/dist/aos.css'



const ListItem = ({ item }) => {
  return (
    <div className='bg-black-gradient-2 listitem'>
      <p className='content'>{item.content} </p>
      <img src={item.img} />
      <h1 className=' text-[20px] font-semibold name'>{item.name}</h1>
      <div className="title">{item.title}</div>
    </div>
  )
}


const GradientIconButton = styled(IconButton)(({ theme }) => ({
  background: `linear-gradient(to left top, rgb(249, 115, 22), rgb(253, 224, 71))`,
  borderRadius: '50%',
  fontSize: '100px',
  color: 'black',
  '&:hover': {
    background: `linear-gradient(to right top, rgb(249, 115, 22), rgb(253, 224, 71))`,
  },
}));

const Testimonial = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  const [slideNumber, setslideNumber] = useState(0)
  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x;

    // Check if the screen width is less than a certain threshold (e.g., 600px for mobile screens)
    if (window.innerWidth >= 600) {
      // For mobile screens, subtract 60 from the distance
      distance -= 60;
    }

    console.log(distance);

    if (direction === 'left' && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${400 + distance}px)`;
      setslideNumber(slideNumber - 1);
    }

    if (direction === 'right' && slideNumber < 2) {
      setslideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-400 + distance}px)`;
    }
  };

  return (
    <div className='list'>
      <div className='listTitle'>
        <h1>Meet Our Student</h1>

        <div className='slideButton'>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className='horizontal-line'></div>
          <GradientIconButton onClick={() => handleClick("left")}>
            <ArrowLeft className='arrow' />
          </GradientIconButton>
          <GradientIconButton onClick={() => handleClick("right")}>
            <ArrowRight className='arrow' />
          </GradientIconButton>
        </div>

      </div>
      <div className="wrapper">
        <div className="container" ref={listRef}>

          {
            testimonialData.map((item, i) => (
              <ListItem key={i} item={item} />
            ))
          }


        </div>
      </div>

    </div>
  )
}

export default Testimonial