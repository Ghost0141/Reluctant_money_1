import React, { useEffect } from 'react'
import "./mentor.scss"
import { Devendra } from "../../assets/index"
import styles from '../../style'
import { Link } from 'react-router-dom'
import { ArrowForwardIos } from '@mui/icons-material'
import Aos from "aos"
import 'aos/dist/aos.css'

const Mentor = () => {

  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <div className='my-2'>
      <h1 className={` ${styles.heading2} text-gradient-o  `}>Meet Our Mentor</h1>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="h-[1px] bg-gradient-to-r from-yellow-300 to-yellow-800"></div>
      <div className="w-full flex flex-col ss:flex-row py-10 px-4 justify-between gap-10 ">
        <div
          data-aos="zoom-in"
          className='flex-1  flex items-center justify-center overflow-hidde'>
          <img src={Devendra} className='w-[300px] h-[300px] rounded-full object-cover' alt="Devendra Rajput" />
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <h1 className={`text-3xl md:text-4xl font-bold text-gradient mb-8 `}>Devendra Rajput</h1>
          <p className="text-gray-300 text-lg mb-3">7+ years of Experience</p>
          <p className="text-gray-300 text-lg mb-3">An Avid Trader | Stocks Market Mentor</p>
          <p className="text-gray-300 text-lg mb-3">NISM Certified Expert | CMT coach</p>
          <p className="text-gray-300 text-lg mb-4">Professional Facilitator for Mass Education About Markets.</p>

          <Link to="/mentor/devraj" className=' bg-yellow-300 mt-4 px-10 py-3 text-xl rounded-3xl hover:bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 float-right'>View Profile<ArrowForwardIos /></Link>
        </div>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="h-[1px] bg-gradient-to-r from-yellow-300 to-yellow-800"></div>
    </div>
  )
}

export default Mentor