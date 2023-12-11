import React, { useEffect } from 'react'
import "./stats.scss"
import Lottie from 'lottie-react'
import locaionData from "../../assets/location.json"
import growthData from "../../assets/growth.json"
import groupData from "../../assets/group.json";
import Aos from "aos"
import 'aos/dist/aos.css'


const Stats = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='Container'>
      <div className="wrapper">
        <div className='line mb-4'></div>
        <h1>We are here to <span className='text-gradient font-semibold '>help you</span></h1>
        <div className=' stats '>
          <div className="box student">
          <Lottie
              animationData={groupData} // Your animation data
              loop={true} // Set to false if you don't want the animation to loop
              autoplay={true} // Set to false if you want to control animation playback manually
              style={{
                width: '100px', // Set the width of the animation
                height: '100px',
                textAlign: 'center'
              }}
            />               <p>10000+</p>
            <p>Student taught</p>
          </div>
          <div className="box seminar">
            <Lottie
              animationData={growthData} // Your animation data
              loop={true} // Set to false if you don't want the animation to loop
              autoplay={true} // Set to false if you want to control animation playback manually
              style={{
                width: '100px', // Set the width of the animation
                height: '100px',
                textAlign: 'center',
              }}
            />            <p>20+</p>
            <p>Cities Reached</p>
          </div>
          <div className="box cities">
            <Lottie
              animationData={locaionData} // Your animation data
              loop={true} // Set to false if you don't want the animation to loop
              autoplay={true} // Set to false if you want to control animation playback manually
              style={{
                width: '100px', // Set the width of the animation
                height: '100px',
                textAlign: 'center',
              }}
            />
            {/* <Place style={{ fontSize: 100 }} /> */}
            <p>200+</p>
            <p>Seminar Conducted</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats