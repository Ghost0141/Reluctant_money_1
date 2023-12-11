import React from 'react'
import "./webinar.scss"
import { useRef } from 'react';
import { init } from 'ityped'
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import springData from "../../assets/spring.json"
import joinusData from "../../assets/joinus.json"
import { workshoptopicsArray } from '../../constants';
import { Check } from '@mui/icons-material';



const Webinar = () => {
    const textref = useRef();
    useEffect(() => {
        init(textref.current, {
            showCursor: false,
            strings: ['Live recording  ', 'Live recording '],
            backDelay: 3000,
            backSpeed: 100,
        })


    }, [])

    return (
        <div className='webinar-container '>
            <div className='webinar-wrapper'>
                <div className="container-o1">
                    <div className="wrapper-o1">
                        <h1 className='ss:text-[50px] text-[35px] p-3 text-center'>  <span ref={textref} className='text-gradient-o ityped'> </span>  Webinar(Recording)</h1>
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
                                <h1 className='ss:text-[50px] text-[35px]'>Workshop   <span className='text-gradient-o overview-title'>Introduction </span>  </h1>
                            </div>

                            <p className='text-[16px] ss:text-[18px] text-gray-300 font-poppins  mb-4 '> Webinars are a quick, but efficient source of spreading the basic but important information, through spontaneous engagements at throw away prices or almost free- </p>
                            <br />
                            <p className='text-[16px] ss:text-[18px] text-gray-300 font-poppins  mb-4 '> These sessions are not appropriately timed but are kind of Giveaway from the Mentor, whenever he is too happy or feel the need to spread the requisite information. At a given point of time the Webinars do not exceed 3 days in a row and 3 hours in a day. Main focus of these webinars is to give the free tools, which could improve the investing/ trading systems of the participants in an efficient manner.  </p>

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
                                <h1 className='ss:text-[50px] text-[35px]'>Workshop    <span className='text-gradient-o timeline-title'>Objective </span>  </h1>
                            </div>
                            <p className='text-[16px] ss:text-[18px] text-gray-300 font-poppins  mb-4 '>Major takeaways from these kind of programs is restricted to only potential but free tools as follows – </p>

                            {

                                workshoptopicsArray.map((item, i) => (
                                    <div key={i} className='flex  gap-9 mb-4 ml-3 ss:ml-5'>
                                        <Check style={{ fill: "yellow" }}  />
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

export default Webinar