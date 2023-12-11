import React, { useEffect, useRef } from 'react'
import "./course.scss"
import { init } from 'ityped'
import springData from './../../assets/spring.json'
import joinusData from './../../assets/joinus.json'
import Lottie from 'lottie-react'
import { courseOverview } from '../../constants'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import Footer from '../../components/footer/Footer'
import styles from '../../style'


const Course = () => {

    const textref = useRef();
    useEffect(() => {
        init(textref.current, {
            showCursor: false,
            strings: ['Spring Board ', 'Spring Board '],
            backDelay: 3000,
            backSpeed: 100,
        })


    }, [])

    return (
        <div className="course">

            <div className='main-container'>
                <div className="wrapper">


                    <h1 className='ss:text-[50px] text-[40px]'>The <span ref={textref} className='text-gradient-o ityped'> </span>Method</h1>
                </div>
            </div>

            <div className='section-2'>
                <div className='wrapper-2'>

                    <h1 className='ss:text-[50px] text-[40px] text-center mb-5'>The <span className='text-gradient-o '>Method </span></h1>
                    <p className='text-[18px] text-gray-300 font-poppins text-center'> SPRINGBOARD method works on a very simple and yet effective type of <span className='font-semibold'>Price Action</span> , backed by <span className='font-semibold'> Market Profile & Momentum</span></p>
                    <Lottie
                        animationData={springData} // Your animation data
                        loop={true} // Set to false if you don't want the animation to loop
                        autoplay={true} // Set to false if you want to control animation playback manually
                        style={{
                            width: '150px', // Set the width of the animation
                            height: '150px', // Set the height of the animation
                        }}
                    />
                </div>
            </div>

            <div className='section-3'>
                <div className='wrapper-3'>
                    <h1 className='ss:text-[50px] text-[40px] text-center mb-5  text-gradient-o ' >Who shall participate?</h1>
                    <p className='text-[16px] ss:text-[18px] text-gray-300 font-poppins  mb-4 '>
                        It happens many a times that one onboards the stock/ currency/ commodities (hereafter all three segments will be addressed as STOCK) at such point, which is the <span className='font-semibold'> right value.</span>
                        But it <span className='font-semibold'> might not be the appropriate time,</span> when that particular Stock is going to start its potential movement.</p>
                    <p className='text-[16px] ss:text-[18px] text-gray-300 font-poppins  mb-4 '>
                        Here comes the test of RELUCTANCE by MONEY and real test of Patience of the Investor. It might take days/ weeks/ months/ years to start its potential movement from here. And it might also happen that it might go into opposite direction to shaken the weaker hands.
                    </p>
                    <p className='text-[16px] ss:text-[18px] text-gray-300 font-poppins  mb-4 '>
                        Now if one is into the particular investment with spare capital and in CASH then there is no need to worry. But what if one is into this particular investment with hard earned Savings and that too with wrong tool like OPTIONS/ FUTURES.
                    </p>

                </div>
            </div>


            <div className='section-4'>
                <div className="wrapper-4">
                    <h1 className='ss:text-[62px] text-[44px] text-center   text-gradient scary '>It's Scary ! Right</h1>
                    <Lottie
                        animationData={joinusData} // Your animation data
                        loop={true} // Set to false if you don't want the animation to loop
                        autoplay={true} // Set to false if you want to control animation playback manually
                        style={{
                            width: '250px', // Set the width of the animation
                            height: '250px',
                            textAlign: 'center',
                        }}
                    />

                </div>
                {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
                {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>
            <div className='section-5'>
                <div className="wrapper-5">
                    <h1 className='ss:text-[52px] text-[32px] text-center   text-gradient-o scary '>Why should you Join us? </h1>

                    <p className='text-[16px] ss:text-[18px] text-gray-400 font-poppins  mb-4 '>
                        Our SPRINGBOARD methodology gives you the appropriate platform to participate in the trade, where even if you have participated with the depreciating tool like -DERIVATIVES with leverage, you will see the potential target within a stipulated time, before options Greeks plays against you. Hence before your patience runs out result will be in front of you.
                        And with these kind of plays one can focus more on large number of opportunities even with lesser capital as most of the times, you will be done with the trade and have capital in spare, more than earlier.
                    </p>
                </div>
            </div>


            <div className="section-6">
                <div className="wrapper-6 flex flex-col gap-2">
                    <h1 className='ss:text-[50px] text-[40px] text-center mb-5'>Course <span className='text-gradient-o '>Overview </span></h1>
                    {
                        courseOverview.map((item, i) => (
                            <div key={i} className='flex gap-2'>
                                <CheckCircleOutlineRoundedIcon style={{ fill: "yellow" }} />
                                <p className='ss:text-[20px] text-[18px] text-gray-300'>{item}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <Footer />

        </div>


    )
}

export default Course