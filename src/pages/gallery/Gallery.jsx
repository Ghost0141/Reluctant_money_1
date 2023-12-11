import React from 'react'
import YouTube from 'react-youtube';
import "./gallery.scss"
import Footer from '../../components/footer/Footer';
import { gallery1,gallery2,gallery3,gallery4,gallery5,gallery6 } from '../../assets';


const Gallery = () => {
  const data = [
    { id: 1, img: gallery1 },
    { id: 2, img: gallery2 },
    { id: 3, img: gallery3 },
    { id: 4, img: gallery4 },
    { id: 5, img: gallery5 },
    { id: 6, img: gallery6 },
];

  const videoIds = ['QeKd0f9JdV4', 'Ekhzi7kxTyU', 'QeKd0f9JdV4']

  return (
        <div className='Container'>
        <div className="innerContainer">

        <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px]  text-gradient pb-4 text-center'>Our Gallery</h1>
          <div className="gallery">
            {
              data.map((item, index) => (
                <div className='pics' key={index}>
                  <img src={item.img} alt="" />
                </div>
              ))
            }
          </div>

          <div className="communityContainer">
            <h1 className='text-center  text-3xl border divide-solid border-x-white p-5 rounded-md'>Become the part of our <span className='text-gradient'>Community</span></h1>
            <div className="community">
              {/* Embed YouTube videos */}
              {videoIds.map((videoId, index) => (
                <div key={index} className="youtube-video">
                  <YouTube videoId={videoId} />
                </div>
              ))}
            </div>

            <button type="button"
              onClick={() => window.open('https://www.youtube.com/@reluctantmoney6516', '_blank')}
              className={`text-center w-[200px] py-4 px-6 font-poppins font-medium m-5 text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:bg-pink-400 transition duration-300 `}>
              Join Now
            </button>
          </div>
          <Footer/>
     </div>
        </div>


  )
}

export default Gallery