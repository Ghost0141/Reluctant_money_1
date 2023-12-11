import React from 'react';
import { Devendra } from '../../assets/index';
import { Link } from 'react-router-dom';
import styles from '../../style';
import { useState } from 'react';
import { ArrowCircleLeftSharp, ArrowDownwardSharp, ArrowLeft, Check, Instagram, Twitter } from '@mui/icons-material';
import Footer from '../../components/footer/Footer';

const MentorProfile = () => {
    const mentorData = {
        name: 'Devendra Rajput',
        experience: '7+ years of Experience',
        expertise: 'An Avid Trader | Stocks Market Mentor',
        certifications: 'NISM Certified Expert | CMT coach',
        description: `Devendra looks after the Education Desk at RELUCTANT MONEY, a company spearheaded with the vision of making STOCK MARKETS, an understood and an additional source of Income, for the larger masses. An Engineering graduate but an MBA dropout, with a decade of experience in Project and Financial Planning and almost equal in the Stock Markets, he has contributed to scaling the company from just a one-room house to a full-grown office now.

His insistence on dealing with the Markets, with One’s own System, Belief, and Hands, has saved thousands of families from the clutches of ultra-greedy, the so-called Market Stalwarts, and has helped them in generating substantial returns. He is a certified NISM expert and guide, also a CMT Level 1, 2 & 3 Trainer.

    His association as an employee with the firms like – Apollo Tyres, Larsen & Toubro, Steel Associations as a Lobbyist, and few others, have made him realize one thing, that how crucial Financial Freedom is. People shuffle jobs, unknowingly that what is it they are after? It is not the temporary Solace, which comes for a while after switching a job, but rather the means to earn Financial Freedom, gives the real purpose in fulfilling the regular jobs diligently. This is why Devendra has a strong belief that all the EMPLOYERS shall keep such programs as an integral part of EMPLOYEES' training, in making their Employees more Productive in the process of realization of their Financial Freedom. Well, Employees will never do so, hence he took the onus on himself to train Stock Market Enthusiasts.

    Apart from the above standard courses, his proven and revolutionary “SPRINGBOARD” process of sharing the Market’s know-hows, have led the people to repose their faith in him, to teach them the art of dealing with markets. His honesty and simplicity in sharing the ultimate key to the markets, on the first day of his engagements, have made him the favorite for Webinars/ Seminars. He stays away from the conventional investing tools for which he has been antagonized too, but by selected few.

    His belief in self and his policy of doing daily a bit towards one’s goal is now could be seen echoed by his satisfied students who are taming the market as and when it gives the opportunity.

    Devendra is also a staunch supporter of – “Health is Real Wealth”. He is an avid Runner and Swimmer and never misses his daily jog. He loves reading and has books as his permanent partner, everywhere he goes.`,
        facebook: 'https://www.facebook.com/DIME4SHARE/',
        twitter: '@dsr9958',
        instagram: '@reluctant_money',
        quora: 'https://www.quora.com/profile/Devender-Rajput-2',
    };

    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    const getDescriptionParts = () => {
        const parts = mentorData.description.split('\n\n');
        return expanded ? parts : parts.slice(0, 2); // Show the first 2 parts if not expanded
    };

    return (
        <div className={`${styles.paddingX} ${styles.flexCenter} px-1  flex flex-col`}>
            <div className={`${styles.boxWidth} mb-10`}>

                <div className="my-2 text-center">
                    <h1 className="logoText text-5xl font-bold mb-4 text-gradient">{mentorData.name}</h1>
                    <div className="h-[1px] bg-gradient-to-r from-yellow-300 to-yellow-800 mb-4"></div>

                    <div className="mx-auto max-w-screen-md flex flex-col items-center ">
                        <img src={Devendra} className='w-[300px] h-[300px] rounded-full object-cover ' alt="Devendra Rajput" />

                        <div className="mt-6 md:mt-0">
                            <p className="text-gray-300 text-lg mb-4">{mentorData.experience}</p>
                            <p className="text-gray-300 text-lg mb-4">{mentorData.expertise}</p>
                            <p className="text-gray-300 text-lg mb-4">{mentorData.certifications}</p>
                            {getDescriptionParts().map((part, index) => (
                                <p key={index} className="text-gray-300 text-lg mb-4 text-justify">
                                    <Check style={{ fill: 'yellow' }}
                                    /> {part}
                                </p>
                            ))}
                            {!expanded && mentorData.description.split('\n\n').length > 2 && (
                                <button
                                    onClick={toggleExpansion}
                                    className="bg-white text-black py-2 px-4 rounded-md font-semibold hover:underline focus:outline-none"
                                >
                                    View More<ArrowDownwardSharp style={{ fill: "black", marginLeft: "10px" }} />
                                </button>
                            )}
                        </div>
                        <div className="absolute z-[-2] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />

                    </div>

                    {/* <div className="h-[1px] bg-gradient-to-r from-yellow-300 to-yellow-800 my-4"></div> */}

                    <div className="flex justify-around mb-4">
                        {/* ... (social media links remain unchanged) */}
                    </div>


                </div>

                <div className="flex justify-end gap-4 mb-4">
                    <a  style={{width:"50px"}} href={mentorData.facebook} target="_blank" rel="noopener noreferrer">
                        <img src="https://seeklogo.com/images/F/facebook-logo-966BBFBC34-seeklogo.com.png" alt="" />
                    </a>
                    <a href={`https://twitter.com/${mentorData.twitter}`} target="_blank" rel="noopener noreferrer">
                        <img style={{width:"50px"}} src="https://seeklogo.com/images/T/twitter-x-logo-101C7D2420-seeklogo.com.png?v=638258862800000000" alt="" />
                    </a>
                    <a href={`https://www.instagram.com/${mentorData.instagram}`} target="_blank" rel="noopener noreferrer">
                        <img style={{width:"50px"}} src="https://seeklogo.com/images/I/instagram-new-2016-logo-D9D42A0AD4-seeklogo.com.png"/>
                    </a>
                    <a href={mentorData.quora} target="_blank" rel="noopener noreferrer">
                        <img style={{width:"50px", borderRadius:"4px"}} src='https://qph.cf2.quoracdn.net/main-qimg-4d340b8b704ccfc33ac16dd261b6c121-lq' alt='Quora'/>
                    </a>
                </div>
                <Link to="/" className="bg-white text-black font-semibold font-mono px-10 py-2 rounded-full float-left">
                    <ArrowCircleLeftSharp style={{ fill: "black", marginLeft: "10px" }} />  Back
                </Link>
            </div>

            <Footer />
        </div>
    );
};


export default MentorProfile;
