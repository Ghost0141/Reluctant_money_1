import React from 'react'
import Hero from '../../components/Hero'
import styles from '../../style'
import About from '../../components/aboutus/About'
import Offer from '../../components/offer/Offer'
import Question from '../../components/question/Question'
import Question2 from '../../components/question2/Question2'
import Testimonial from '../../components/testimonial/Testimonial'
import Stats from '../../components/stats/Stats'
import CTA from '../../components/CTA'
import FAQ from '../../components/faq/FAQ'
import Footer from '../../components/footer/Footer'
import Mentor from '../../components/mentor/Mentor'


const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>


      </div>
      <div className={`bg-primary ${styles.paddingX}  ${styles.flexStart}  px-2 mx-0`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Question />
          <Question2 />
          <Offer />
          <Mentor/>
          <Stats />
          <CTA />
          <Testimonial />
          <FAQ />
          <Footer/>
          
        </div>
      </div>

    </div>
  )
}

export default Home