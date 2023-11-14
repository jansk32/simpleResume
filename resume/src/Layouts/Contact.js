import React, {useState} from 'react';
import Popup from '../Popup/popup.js';
import axios from 'axios';
import './style/Contact.css';

function Contact() {
    const [subject, setSubject] = useState(null)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [inquiry, setInquiry] = useState('');
    const [open, setOpen] = useState(false);
    const [statusMsg, setStatusMsg] = useState("Hello there!")

    const options = [
        { value: null, label: 'Choose a subject' },
        { value: 1, label: 'Job Opportunity' },
        { value: 2, label: 'Collaboration Opportunity' },
        { value: 3, label: 'Request for Resume' },
        { value: 4, label: 'Feedback' },
    ]

    function onChangeSetSubject(val){
        setSubject(val);
    }

    function sendData(e){
        e.preventDefault();
        
        axios.post(process.env.REACT_APP_HOST_URL + "email/inquiry", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            company: company,
            type: subject,
            body: inquiry,
        }, {
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then((resp) => {
            setOpen(true);
            setStatusMsg("Your inquiry was successfully sent!")

        })
        .catch((err) => {
            setOpen(true);
            if(err.response.data.errors.length > 0){
                setStatusMsg("Seems like these fields are not accepted:" + err.response.data.errors.map((i) => {
                    return " " + i;
                }))
            }else{
                setStatusMsg("Oops! Seems like an error :( Please send a direct email to jankwo32@gmail.com instead")    
            }

        })
    }


    return (
    <div className="text-center contact-comp text-2xl">
        {open ? <Popup text={statusMsg} closePopup={() => setOpen(false)} /> : null}

        <div className='center py-4'>
            <div className='text-left w-4/6 py-8'>
                <h1 className='font-bold text-4xl mb-16'>Hey, get in touch!</h1>
                <p >Thanks for visiting my website! If you would like to get in touch about work, referrals or get my complete resume, please fill in this contact sheet and I will get back to you within 1-2 business days.</p>
            </div>
            
            <form className='px-32'>
                <div className='center'>
                    <div className='fcontact-row-2'>
                        <span className='fcontact-item'>
                            <p className='my-2'>First Name</p>
                            <input type="text"
                            className='text-black p-2' 
                            placeholder='Type here'
                            onChange={(e) => setFirstName(e.target.value)} 
                            required></input>
                        </span>
                        <span className='fcontact-item'>
                        <p className='my-2'>Last Name</p>
                            <input type="text"
                            className='text-black p-2'  
                            placeholder='Type here'
                            onChange={(e) => {setLastName(e.target.value)}}></input>
                        </span>
                    </div>
                    <div className='fcontact-row-2'>
                        <span className='fcontact-item'>
                        <p className='my-2'>Company</p>
                            <input type="text" 
                            className='text-black p-2' 
                            placeholder='Type here' 
                            onChange={(e) => setCompany(e.target.value)} 
                            ></input>
                        </span>
                        <span className='fcontact-item'>
                        <p className='my-2'>Email</p>
                            <input type="email" 
                            className='text-black p-2' 
                            placeholder='Type here' 
                            onChange={(e) => setEmail(e.target.value)} 
                            required></input>
                        </span>
                    </div>
                    <div className='fcontact-row-1'>
                        <span className='fcontact-item '>
                            <p>Subject of Inquiry</p>
                            <select className='fcontact-item-field text-black py-4' onChange={(e) => onChangeSetSubject(e.target.value)} required>
                                {options.map((item) => {
                                    return (<option value={item.value} key={item.value}>{item.label}</option>);
                                })}
                            </select>
                        </span>
                    </div>
                    <div className='fcontact-row-1'>
                        <span className='fcontact-item'>
                            <p>Message</p>
                            <textarea
                            className='fcontact-item-field h-48 text-black p-4' 
                            placeholder='Type your message here' 
                            maxLength={100}
                            onChange={(e) => setInquiry(e.target.value)} 
                            required={true}
                            ></textarea>
                        </span>
                    </div>
                    <div className='fcontact-row-1 w-3/6'>
                        <button className='button h-12' onClick={(e) => sendData(e)}>Send!</button>
                    </div>
                </div>
            </form>
        </div>
    </div> 
    );
}

export default Contact;