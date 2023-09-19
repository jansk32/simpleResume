import React from 'react';
import './style/Home.css';
import Layout from '../Layouts/Layout.js'
import test from "../assets/test/portfolio1.png"
import fallBricks from "../assets/falling_bricks.png"
import IconTriangle from '../assets/triangle.js';

function Home() {
return (
    <Layout>
    <div className="center bg-black pb-16">
        <div className="banner bg-right bg-no-repeat bg-contain">
            <div className="banner-body">
                <h2 className="welcome-title text-white">Hi, Let’s work together!</h2>
                <div className="welcome-body text-white ">
                <p className='text-9xl'>BUILD</p>
                <p className='text-9xl'>DEVELOP</p>
                <p className='text-9xl'>INNOVATE</p>
                <p>To view this project code, please click <a href="https://github.com/jansk32/simpleResume">here</a>!</p>
                </div>
            </div>
        </div>
        <div className='center'>
            <div className='title flex flex-row justify-between justify-evenly'>
            <p className='text-7xl text-white mt-16'>Projects...</p>
            <img src={fallBricks}/>
            </div>
            <div className="text-white text-2xl flex flex-row justify-items-center h-96">
                <div className='projects-list flex-1 center'>
                    <ul>
                        <li className="flex flex-row my-4" onMouseOver={() => console.log("Hello")}>
                            <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                            <a href='https://github.com/jansk32/CryptoTaskPage' target="_blank">Crypto Listing</a>
                        </li>
                        <li className="flex flex-row my-4" onMouseOver={() => console.log("Hello")}>
                            <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                            <a href='https://github.com/StaticDDQ/Go-Blox-GPS' target="_blank">Get People Socializing</a>
                        </li>
                        <li className="flex flex-row my-4" onMouseOver={() => console.log("Hello")}>
                            <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                            <a href='https://github.com/jansk32/mementos' target="_blank">Mementos</a>
                        </li>
                        <li className="flex flex-row my-4" onMouseOver={() => console.log("Hello")}>
                            <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                            <a href='https://github.com/jansk32/MetropolitanView' target="_blank">Metropolitan Museum Web Hightlight </a>
                        </li>
                        <li className="flex flex-row my-4" onMouseOver={() => console.log("Hello")}>
                            <IconTriangle className="mr-2 rotate-90 mt-0.5"/>
                            <a href="https://github.com/jansk32/TipOverGame" target="_blank">Tipover Game Solver</a>
                        </li>
                    </ul>
                </div>
                <div className='projects-display flex-1 bg-red-700 h-92 w-96'>
                    {/* <img className="object-none" src={test} alt="portofolio"/> */}
                </div>
            </div>
        </div>
    </div>
    </Layout>
);
}

export default Home;