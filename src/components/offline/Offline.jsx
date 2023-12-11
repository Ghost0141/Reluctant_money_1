import React from 'react'
import "./offline.scss"
import { useRef } from 'react';
import { init } from 'ityped'
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import springData from "../../assets/spring.json"
import joinusData from "../../assets/joinus.json"
import { offlineOverview, offlineTimeline } from '../../constants';
import { Check } from '@mui/icons-material';


const Offline = () => {

  const textref = useRef();
  useEffect(() => {
    init(textref.current, {
      showCursor: false,
      strings: ['Funda of  ', 'Funda of  '],
      backDelay: 3000,
      backSpeed: 100,
    })


  }, [])

  return (
    <div id="#offline" className='offline-container '>
      <div className='offline-wrapper'>

        <div className="container-o1">
          <div className="wrapper-o1">
            <h1 className='ss:text-[50px] text-[35px] p-3 text-center'>Learn the  <span ref={textref} className='text-gradient-o ityped'> </span>  Stock Market (offline)</h1>
          </div>
        </div>
        <div className="container-o2">
          <div className="wrapper-o2">
            <div className='overview'>

              <div className="flex items-center justify-center  flex-col ss:flex-row">
                <Lottie
                  animationData={springData} // Your animation data
                  loop={true} // Set to false if you don't want the animation to loop
                  autoplay={true} // Set to false if you want to control animation playback manually
                  style={{
                    width: '150px', // Set the width of the animation
                    height: '150px', // Set the height of the animation
                  }}
                />
                <h1 className='ss:text-[50px] text-[35px]'>Course   <span className='text-gradient-o overview-title'>overview </span>  </h1>
              </div>

              <p className='text-[18px] ss:text-[20px] text-gray-300 font-poppins  mb-4 '> The whole syllabus covered under the SPRINGBOARD METHOD will be taught through the ONLINE Classes with following special features – </p>


              {

                offlineOverview.map((item, i) => (
                  <div key={i} className='flex ml-3 gap-9 mb-4'>
                    <Check style={{ fill: "lightgreen" }} />
                    <p className='text-[16px] ss:text-[18px] text-gray-300 font-poppins  '>{item}</p>
                  </div>
                ))
              }


            </div>
          </div>
        </div>
        <div className="container-o3">
          <div className="wrapper-o3">
            <div className='flex flex-col timelines'>

              <div className="flex items-center justify-center  flex-col ss:flex-row">
                <Lottie
                  animationData={joinusData} // Your animation data
                  loop={true} // Set to false if you don't want the animation to loop
                  autoplay={true} // Set to false if you want to control animation playback manually
                  style={{
                    width: '150px', // Set the width of the animation
                    height: '150px', // Set the height of the animation
                  }}
                />
                <h1 className='ss:text-[50px] text-[35px]'>Course   <span className='text-gradient-o timeline-title'>Timlines </span>  </h1>
              </div>

              {

                offlineTimeline.map((item, i) => (
                  <div key={i} className='flex ml-3 gap-9 mb-4'>
                    <Check style={{ fill: "yellow" }} />
                    <p className='text-[16px] ss:text-[18px] text-gray-300 font-poppins  '>{item}</p>
                  </div>
                ))
              }





            </div>



          </div>
        </div>




      </div>
    </div>
  )
}

export default Offline