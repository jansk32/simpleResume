import React, {useState} from 'react';
import Layout from '../Layouts/Layout.js'
import './Contact.css';

function Contact() {
    const [subject, setSubject] = useState(null)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [inquiry, setInquiry] = useState('');
    const [inquiryRequired, setInquiryRequired] = useState(true);

    const options = [
        { value: null, label: 'Choose a subject' },
        { value: 1, label: 'Job Opportunity' },
        { value: 2, label: 'Collaboration Opportunity' },
        { value: 3, label: 'Request a Resume' },
    ]

    function onChangeSetSubject(val){
        setSubject(val);
        if(val === 3){
            setInquiryRequired(true);
        }else {
            setInquiryRequired(false);
        }
    }


    return (
    <Layout>
    <div className="center">
        <div>
            <h1>Hey, get in touch!</h1>
            <p>Thanks for visiting my website! If you would like to get in touch about work, referrals or get my complete resume, <br /> 
            please fill in this contact sheet and I will get back to you ASAP!</p>
            <form>
                <div>
                    <div className='fcontact-row-2'>
                        <span className='fcontact-item'>
                            <p>First Name</p>
                            <input type="text" 
                            placeholder='Type here'
                            onChange={(e) => setFirstName(e.target.value)} 
                            required></input>
                        </span>
                        <span className='fcontact-item'>
                            <p>Last Name</p>
                            <input type="text" 
                            placeholder='Type here'
                            onChange={(e) => {setLastName(e.target.value)}}></input>
                        </span>
                    </div>
                    <div className='fcontact-row-2'>
                        <span className='fcontact-item'>
                            <p>Company</p>
                            <input type="text" 
                            placeholder='Type here' 
                            onChange={(e) => setCompany(e.target.value)} 
                            ></input>
                        </span>
                        <span className='fcontact-item'>
                            <p>Email</p>
                            <input type="email" 
                            placeholder='Type here' 
                            onChange={(e) => setEmail(e.target.value)} 
                            required></input>
                        </span>
                    </div>
                    <div className='fcontact-row-1'>
                        <span className='fcontact-item'>
                            <p>Subject of Inquiry</p>
                            <select onChange={(e) => onChangeSetSubject(e.target.value)} required>
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
                            placeholder='Type your message here' 
                            maxLength={100}
                            onChange={(e) => setInquiry(e.target.value)} 
                            required={inquiryRequired}
                            ></textarea>
                        </span>
                    </div>
                    <div className='fcontact-row-1'>
                        <span>
                            <a className='button' href="google.com" onClick={{}}>Send!</a>
                        </span>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </Layout>   
    );
}

export default Contact;