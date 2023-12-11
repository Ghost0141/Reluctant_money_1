import React, { useEffect } from 'react'
import styles from '../../style'
import springData from "../../assets/spring.json"
import Lottie from 'lottie-react'
import Aos from "aos"
import 'aos/dist/aos.css'


const About = () => {

    useEffect(() => {
        Aos.init();

    }, [])

    return (
        <div className='my-[50px] '>
            <div className=' bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 rounded-[10px] box-shadow'>
                <div className='flex items-center justify-center'>
                    <Lottie
                        animationData={springData} // Your animation data
                        loop={true} // Set to false if you don't want the animation to loop
                        autoplay={true} // Set to false if you want to control animation playback manually
                        style={{
                            width: '50px', // Set the width of the animation
                            height: '50px', // Set the height of the animation
                        }}
                    />
                    <p className='font-poppins font-semibold ss:text-[45px] text-[32px] text-center  py-0 '>About Us</p>
                </div>
            </div>
            <p className={`${styles.paragraph}  p-5 mt-5 text-[18px] text-center `}> Lorem ipsm dolor, sit amet consectetur adipisicing elit. Numquam eos officiis quaerat nisi labore porro architecto dolores sapiente, libero illo distinctio vero nihil, quia vel molestiae est consectetur ab cumque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quae sint quidem fuga eligendi temporibus beatae officia magnam, voluptates deserunt consequatur pariatur vel ut optio nemo eum reprehenderit, ea iusto. </p>
        </div>
    )
}

export default About