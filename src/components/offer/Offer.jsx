import { useEffect } from "react";
import { features } from "../../constants";
import styles, { layout } from "../../style";
import Aos from "aos"
import 'aos/dist/aos.css'

const FeatureCard = ({ icon, title, content, index }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div 
    data-aos="fade-left"
    data-aos-duration="500"
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] ">
          {content}
        </p>
      </div>
    </div>
  )
};

const Offer = () => {



  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Why  To join , <br className="sm:block hidden" />
          Reluctant Money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          With our SPRINGBOARD method, which is the gist of our years of practical experience with Market Profile, Pivot & Price Action tools, we have helped thousands of such Market enthusiasts, to Earn from the markets on consistent basis.
        </p>

        {/* <Button styles={`mt-10`} /> */}
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id} {...feature}
            index={index} />
        ))}
      </div>
    </section>
  )
};

export default Offer;
