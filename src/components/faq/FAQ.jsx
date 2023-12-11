import React, { useEffect, useState } from 'react';
import './faq.scss';
import { faq } from './../../constants';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ArrowOutward } from '@mui/icons-material';
import Aos from "aos"
import 'aos/dist/aos.css'

const FAQ = () => {


    const [expandedQuestionId, setExpandedQuestionId] = useState(null);
    const handleToggleAnswer = (id) => {
        setExpandedQuestionId(id === expandedQuestionId ? null : id);
    };
    useEffect(() => {
        Aos.init();
    }, []);


    return (
        <div className='container'>
            <h1 className='text-center font-poppins text-[35px] mb-6 font-semibold text-gradient '>Frequently Asked Question</h1>
            <div className='wrapper'>
                {faq.map((item) => (
                    <div key={item.id} className='list'>
                        <div className='title'>
                            <h2 className='text-xl ques flex gap-2'><ArrowOutward />  {item.question}</h2>
                            <span className='icon' onClick={() => handleToggleAnswer(item.id)}>
                                {expandedQuestionId === item.id ? <RemoveIcon /> : <AddIcon />}
                            </span>
                        </div>
                        <p className={`ans ${expandedQuestionId === item.id ? 'active' : ''}`}>
                            {item.answer}
                        </p>
                        <div
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                            className='line'></div>
                    </div>
                ))}
            </div>
            {/* gradient start */}
            {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
        </div>
    );
};

export default FAQ;
