import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import './method.scss';
import Lottie from 'lottie-react';
import offlineAni from "../../assets/offline.json"
import onlineAni from "../../assets/online.json"
import webinarAni from "../../assets/webinar.json"
import CTA from '../../components/CTA';
import styles from '../../style';
import { courseOutline } from "../../constants/index"
import { Adjust, Check } from '@mui/icons-material';
import Aos from "aos";
import 'aos/dist/aos.css';


const Method = () => {
  const [activeLink, setActiveLink] = useState('online');
  const [expandedTopic, setExpandedTopic] = useState(null);

  const handleExpand = (id) => {
    console.log(id)
    setExpandedTopic(id === expandedTopic ? null : id);
  }

  const handleClick = (link) => {
    setActiveLink(link);
  };
  useEffect(() => {
    Aos.init();
  }, []);


  return (
    <div className='method-container grey-gradient'>
      <div className='section-m1'>
        <div className='wrapper-m1'>

          <div className='flex gap-4  justify-between flex-col ss:flex-row'>

            <Link
              to='online'
              className={`link ${activeLink === 'online' ? 'active' : ''}`}
              onClick={() => handleClick('online')}
            >
              <Lottie
                animationData={onlineAni} // Your animation data
                loop={true} // Set to false if you don't want the animation to loop
                autoplay={true} // Set to false if you want to control animation playback manually
                style={{
                  width: '150px', // Set the width of the animation
                  height: '150px', // Set the height of the animation
                }}
              />
              Online
            </Link>



            <Link
              to='offline'
              className={`link ${activeLink === 'offline' ? 'active' : ''}`}
              onClick={() => handleClick('offline')}
            > <Lottie
                animationData={offlineAni} // Your animation data
                loop={true} // Set to false if you don't want the animation to loop
                autoplay={true} // Set to false if you want to control animation playback manually
                style={{
                  width: '150px', // Set the width of the animation
                  height: '150px', // Set the height of the animation
                }}
              />
              Offline
            </Link>
            <Link
              to='webinar'
              className={`link ${activeLink === 'webinar' ? 'active' : ''}`}
              onClick={() => handleClick('webinar')}
            >
              <Lottie
                animationData={webinarAni} // Your animation data
                loop={true} // Set to false if you don't want the animation to loop
                autoplay={true} // Set to false if you want to control animation playback manually
                style={{
                  width: '150px', // Set the width of the animation
                  height: '150px', // Set the height of the animation
                }}
              />
              Webinar
            </Link>
          </div>
        </div>
      </div>

      <Outlet />


      <div className='flex justify-center  section-outline'>
        <div className='max-w-[1280px] w-full section-wrapper'>
          <div className='px-5'>
            <h1 className='ss:text-[50px] text-[35px] text-center'>Basic <span className='text-gradient-o Outline'>Outline</span> with all above way</h1>
            <p className={styles.paragraph}>we will cover Basic of stock market that include the following topics-</p>
            <div>
              {Object.entries(courseOutline).map(([key, value], id) => (
                <div key={key} className="outline-item">
                  <h2 className="outline-key" onClick={() => handleExpand(id)}><Adjust style={{ fill: "yellow" }} />{key}</h2>
                  <ul className={`outline-value ${expandedTopic === id ? 'active' : ''}`}>
                    {value.map((item, index) => (
                      <li key={index} className='outline-value-item'><Check style={{ fill: "lightgreen" }} />{item}</li>
                    ))
                    }
                  </ul>
                  <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className='line'></div>
                </div>
              ))}
            </div>
          </div>

        </div>
        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>


      <div className='flex justify-center '>
        <div className='max-w-[1280px] w-full '>
          <CTA />
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Method;
