import React, {useState} from 'react';
import Layout from '../Layouts/Layout';
import './style/About.css'
import wipro from '../assets/logos/wipro.png';
import telmy from '../assets/logos/telmy.png';
import profile from '../assets/profile.jpeg';

function About() {

    return (
        <Layout>
            <div>
                <div className='aboutMe center pt-40 bg-no-repeat bg-center'>
                    <p className="text-3xl mt-40">Know the kind of Software Engineer I am |</p>
                    <div className='about-me'>
                        <p className='text-9xl font-bold mb-56'>ABOUT ME</p>
                    </div>
                </div>
                <div className='bg-black text-white flex flex-row pt-8'>
                        <div className='profileC flex-1 flex flex-row-reverse mr-16 '>
                            <img className='profile' src={profile} alt='profile picture'/>
                        </div>
                        <div className="flex-1">
                            <div className="w-96 text-2xl">
                                <p>I am a software developer. I have worked in the industry for 3 years, collaborating with others in developing / enhancing products as a full stack developer.</p>
                            </div>
                            <br/>
                        <div>
                                <p className='text-3xl'>Skills. |</p>
                                <ul className="text-wrap text-2xl">
                                    <li>English (native)</li>
                                    <li>Bahasa Indonesia (conversational)</li>
                                    <li>Mandarin (basic)</li>
                                    <li>HTML/CSS/Jquery</li>
                                    <li>Javascript (React, Vue3, Node.js)</li>
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Lightroom</li>
                                    <li>ETC.</li>
                                </ul>
                            </div>
                        </div>
                </div>
                <div className='company pt-16'>
                    <p className="center text-5xl">Companies Worked For</p>
                    <div className='companyListing h-96 flex lg:flex-row justify-center sm:flex-col'>
                        <div className="basis-1/6 mt-16 sm:h-96">
                            <img className='wipro' src={wipro} alt="wipro" />
                        </div>
                        <div className="basis-1/4 justify-end sm:h-96">
                            <img className='telmy' src={telmy} alt="telmy" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;