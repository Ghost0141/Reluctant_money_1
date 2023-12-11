import React, { useEffect, useRef } from 'react'
import styles from '../style'
import { card, video } from '../assets'
import { init } from 'ityped'


const ityped = {
    fontFamily: 'Whisper',
    fontWeight: 600,
    
};

const Hero = () => {

    const textref = useRef();
    useEffect(() => {
        init(textref.current, {
            showCursor: false,
            strings: ['Money', 'Money'],
            backDelay: 3000,
            backSpeed: 100,
        })


    }, [])

    return (


        <div id='home' className={`flex md:flex-row flex-col bg-black
    ${styles.paddingY}`}>


            <div className={`flex-1 ${styles.flexStart} flex-col xl:px:0 sm:px-16 px-6`}>
                <h1 className='font-poppins text-white font-semibold sm:text-[45px] text-[42px]  ss:block hidden  ' >There is no free lunches in the world!</h1>
                <div>
                    <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px]  text-gradient'>Reluctant  <span  ref={textref} style={ityped}> </span></h1>
                    <p className={`${styles.paragraph} max-w-[470px] my-16 text-sm text-justify text-[19px] `}>RELUCTANT MONEY believes that above thoughts does highlight a positive trait of Money, which is – “One has to persist and work hard for the money, to averse its RELUCTANCE, to get into one’s pocket.”
                        .</p>
                </div>
            </div>


            <div className='relative flex-1'>
                <video
                    className='w-full h-full object-cover scale-125 z-40 '
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={card} // Add a poster image for the video
                >
                    <source src={video} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>

                {/* Customize the tailwind css for the video overlay or controls */}
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

            </div>

        </div >
    )
}

export default Hero