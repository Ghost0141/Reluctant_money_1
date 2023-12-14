import { Close } from '@mui/icons-material'
import "./contact.scss"
import { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ closeContact }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
    // const [submit, setSubmit] = useState(false);

    useEffect(() => {

    }, [phoneNumber]);

    const checkPhone = () => {
        // Validate the phone number using a regular expression
        const phoneNumberRegex = /^\d{10}$/;
        const isValid = phoneNumberRegex.test(phoneNumber);

        setIsValidPhoneNumber(isValid);
        if (isValid) {
            toast("Thank You for Suscribe us!", {
                className: "toast-message"
            })

            // write logic for downaload the file

            
            closeContact();
        } else {
            console.log('Invalid phone number:', phoneNumber);
        }
        // setPhoneNumber('');
    }
    console.log(phoneNumber)
    return (
        <>
            <div className='contact-wrapper'></div>
            <div className='contact-container'>
                <div className='contact'>
                    <h1 className='text-[20px]'>Contact us-</h1>
                    {/* <label htmlFor="">Enter Your Phone Number:</label> */}
                    <input type="tel"
                        name='phone'
                        value={phoneNumber}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className='contactInput' />
                    <button className='Submitbutton' onClick={(e) => checkPhone(e)}>Submit</button>

                    {!isValidPhoneNumber && <p className="error-text">Please enter a valid phone number.</p>}

                </div>
                <button onClick={closeContact} className="closeContact"> <Close /></button>
            </div >
        </>
    )
}

export default Contact