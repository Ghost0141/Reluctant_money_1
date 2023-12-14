import Lottie from 'lottie-react';
import React, { useEffect, useState } from 'react';
import ebook from "./../../assets/ebook.json";
import "./download.scss";
import styles from '../../style';
import { ArrowForwardIos } from '@mui/icons-material';
import Contact from '../../components/contact/Contact';
import Aos from "aos"
import 'aos/dist/aos.css'
import Footer from "./../../components/footer/Footer"
import CTA from "./../../components/CTA"


const Download = () => {
  const [showContact, setShowContact] = useState(false);

  const handleDownload = (e) => {
    setShowContact(true);
  }

  const closeContact = () => {
    setShowContact(false);
  }
  useEffect(() => {
    Aos.init();
  }, []);
  console.log(showContact)
  return (
    <div className='download-container'>
      <div className="download-wrapper">
        <div className="section-d1">
          <div className="wrapper-w1">
            <div className="download-left">
              <Lottie
                animationData={ebook} // Your animation data
                loop={true} // Set to false if you don't want the animation to loop
                autoplay={true} // Set to false if you want to control animation playback manually
              />
            </div>
            <div className="download-right">
              <h1 className={`${styles.heading2} text-center`}>Download Our <span className='e-book text-gradient-o'> E-Book</span> Now!</h1>
              <button className='downloadBtn' onClick={(e) => handleDownload(e)}  >Download Here <ArrowForwardIos /></button>
            </div>
          </div>
        </div>
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        <div className="absolute z-[-1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}

      </div>

      <div className='flex justify-center'>
        <div className='max-w-[1280px] w-full'>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="h-[1px] bg-gradient-to-r from-yellow-300 to-yellow-800"></div>
          <CTA />
        </div>
      </div>
      <Footer />



      {
        showContact && <Contact closeContact={closeContact} />
      }
    </div>
  )
}

export default Download