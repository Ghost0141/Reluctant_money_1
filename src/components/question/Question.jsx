import React, { useEffect } from 'react'
import { videoStock1 } from "../../assets/index"
import styles, { layout } from '../../style'
import Aos from "aos"
import 'aos/dist/aos.css'

const Question = () => {
  useEffect(() => {
    Aos.init();

}, [])
  return (
    <section className={`${layout.section} my-5`}>
      <div 
      data-aos="fade-right"
      data-aos-duration="500"
      className='flex-1 overflow-hidden rounded-md z-20' >
        <img src={videoStock1} alt="" className="w-full max-h-[400px] h-auto object-cover transform transition-transform duration-1000 hover:scale-110" />
      </div>
      <div 
      data-aos="fade-left"
      data-aos-duration="500"
      // data-aos-delay="0"
      className={`${layout.sectionImg} flex-col`}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
             <br className="sm:block hidden" />
            What is Reluctant Money?
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
            With our SPRINGBOARD method, which is the gist of our years of practical experience with Market Profile, Pivot & Price Action tools, we have helped thousands of such Market enthusiasts, to Earn from the markets on consistent basis.
          </p>

          {/* <Button styles={`mt-10`} /> */}
        </div>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}

      </div>
    </section>
  )
}

export default Question