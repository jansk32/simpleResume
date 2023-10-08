import React, {useState} from 'react';
import './style/Home.css';
import Layout from '../Layouts/Layout.js'
import fallBricks from "../assets/falling_bricks.png"
import IconTriangle from '../assets/triangle.js';

// import portfolio
import crypto from "../assets/portfolio/crypto.png";
import metro from "../assets/portfolio/metropolitan.png";
import mementos from "../assets/portfolio/mementos.jpeg";
import gps from "../assets/portfolio/gps.jpeg";
import tipover from "../assets/portfolio/tipover.png";
import eventPhoto from "../assets/photos/IMG_8843.jpg";

function Home() {
    const [portfolioPhoto, setPhoto] = useState(crypto);
return (
    <Layout>
    <div className="center bg-black pb-16">
        <div className="banner bg-right bg-no-repeat">
            <div className="banner-body px-20">
                <p className="welcome-title text-white text-3xl">Hi, Let’s work together!</p>
                <div className="welcome-body text-white ">
                <p className='text-9xl'>BUILD</p>
                <p className='text-9xl'>DEVELOP</p>
                <p className='text-9xl'>INNOVATE</p>
                <p>To view this website code, click <a className="underline" href="https://github.com/jansk32/simpleResume">here</a>!</p>
                <p>Design by DEV.com</p>
                </div>
            </div>
        </div>
        <div className='center'>
            <div className='title flex flex-row justify-between justify-evenly'>
            <p className='text-8xl text-white mt-16'>Projects..|</p>
            <img src={fallBricks}/>
            </div>
            <div className="projects text-white text-2xl flex flex-col lg:flex-row justify-items-center">
                <div className=' flex-1 center'>
                    <ul>
                        <li className="flex flex-row my-4" onMouseOver={() => setPhoto(crypto)}>
                            <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                            <a href='https://github.com/jansk32/CryptoTaskPage' target="_blank">Crypto Listing</a>
                        </li>
                        <li className="flex flex-row my-4" onMouseOver={() => setPhoto(gps)}>
                            <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                            <a href='https://github.com/StaticDDQ/Go-Blox-GPS' target="_blank">Get People Socializing</a>
                        </li>
                        <li className="flex flex-row my-4" onMouseOver={() => setPhoto(mementos)}>
                            <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                            <a href='https://github.com/jansk32/mementos' target="_blank">Mementos</a>
                        </li>
                        <li className="flex flex-row my-4" onMouseOver={() => setPhoto(metro)}>
                            <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                            <a href='https://github.com/jansk32/MetropolitanView' target="_blank">Metropolitan Museum Web Hightlight </a>
                        </li>
                        <li className="flex flex-row my-4" onMouseOver={() => setPhoto(tipover)}>
                            <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                            <a href="https://github.com/jansk32/TipOverGame" target="_blank">Tipover Game Solver</a>
                        </li>
                    </ul>
                </div>
                <div className='flex-1 h-full w-96 relative flex justify-center items-center'>
                    <img className="object-contain h-full" src={portfolioPhoto} alt="portofolio"/>
                </div>
            </div>
            <div className="projects text-white text-2xl flex flex-col lg:flex-row-reverse  justify-items-center h-96 mt-16">
                <div className='title-photography flex-1 center ml-8'>
                    <div className='flex flex-row-reverse justify-between justify-evenly'>
                        <p className='text-8xl text-white'>|Event<br/> Photos</p>
                    </div>
                    <div className='my-8'>
                        <ul>
                            <li className="flex flex-row my-4">
                                <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                                <p>Indonesian Film Festival</p>
                            </li>
                            <li className="flex flex-row my-4">
                                <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                                <p>ASEAN Gala</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='projects-display flex-1 h-full w-96 relative flex justify-center items-center'>
                    <img className="object-contain h-full" src={eventPhoto} alt="portofolio"/>
                </div>
            </div>
        </div>
    </div>
    </Layout>
);
}

export default Home;