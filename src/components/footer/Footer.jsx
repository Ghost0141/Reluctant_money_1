import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss'; // Import the SCSS file for styling
import { logo } from "../../assets"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { socialMedia } from '../../constants';


const Footer = () => {
  return (
    <footer className="footer">
      <div className='line mb-1'></div>
      <div className='flex flex-row gap-5 mb-1 px-10'>
        <img src={logo} alt="" />
        <span className="font-poppins font-semibold text-[27px]  text-gradient company-name">Reluctant Money</span>

      </div>
      <div className='line '></div>
      <div className="Wrapper">
        {/* First Section */}
        <div className="section-f1">
          <div className="company-details">
            <div className="list">
              <LocationOnIcon className='icon' />
              <p>vadodara Gujarat</p>
            </div>
            <div className="list">
              <WhatsAppIcon className='icon' />
              <div>
                <p>whatapp us At:</p>
                <p className='text-gray-500 font-poppins'>+916289564896</p>

              </div>
            </div>
            <div className="list">
              <LocalPostOfficeIcon className='icon' />
              <div>
                <p>for assistance</p>
                <p className='text-gray-500 font-poppins'>support@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="section-f2">
          <h1 className='className="font-poppins font-semibold text-[27px]  text-gradient'> Links</h1>
          <ul className="footer-links ">
            <li><Link className='text-gray-400 text-[18px]' to="/">Home</Link></li>
            <li><Link className='text-gray-400 text-[18px]' to="/course">Courses</Link></li>
            <li><Link className='text-gray-400 text-[18px]' to="/products">Products</Link></li>
            <li><Link className='text-gray-400 text-[18px]' to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="section-f3">
          <div className="social-icons">
            {
              socialMedia.map((item, i) => (
                <div key={i}>
                  <img className='socialIcon' src={item.icon} alt="" onClick={() => window.open(item.link)} />
                </div>
              ))
            }

          </div>
        </div>
      </div>
      <div className=' mb-3 line'></div>
      <div className='px-10'>
        <p>Made with ❤️  in India</p>
        <p className="font-poppins font-normal  text-[16px] leading-[27px] text-gray-300">
          Copyright Ⓒ 2023. All Rights Reserved.
        </p>
      </div>


    </footer>
  );
};

export default Footer;
