import { Link } from "react-router-dom";
import { ArrowRightAltRounded } from "@mui/icons-material";
import styles from "../style";
import Lottie from "lottie-react";
import joinusData from "../assets/joinus.json"

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} sm:px-12 px-3 sm:py-8 py-4 sm:flex-row flex-col bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-100 via-yellow-300 to-yellow-500 rounded-[20px] box-shadow mx-1`}>
    <div className="flex-1 flex flex-col">
      <div className="flex items-center justify-center flex-col ss:flex-row ">
        <Lottie
          animationData={joinusData} // Your animation data
          loop={true} // Set to false if you don't want the animation to loop
          autoplay={true} // Set to false if you want to control animation playback manually
          style={{
            width: '150px', // Set the width of the animation
            height: '150px',
            textAlign: 'center',
          }}
          />
      <h2 className={`${styles.heading2} text-25px  ss:text-[45px]`}>Let’s Expolre our courses!</h2>
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>

      <Link to="/course" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-white  rounded-[10px] outline-none ${styles} `}>Get Started<ArrowRightAltRounded style={{ fontSize: 35 ,fill:"black"}} /></Link>
    </div>
  </section>
);

export default CTA;
