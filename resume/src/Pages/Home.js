import React from 'react';
import './style/Home.css';
import Layout from '../Layouts/Layout.js'

function Home() {
return (
    <Layout>
    <div className="center bg-black">
        <div className="banner bg-right bg-no-repeat">
            <div className="banner-body">
                <h2 className="welcome-title text-white">Hi, Let’s work together!</h2>
                <div className="welcome-body text-white ">
                <p className='text-9xl'>BUILD</p>
                <p className='text-9xl'>DEVELOP</p>
                <p className='text-9xl'>INNOVATE</p>
                <p>To view this project code, please click <a href="google.com">here</a>!</p>
                </div>
            </div>
        </div>
        <div>
            <p className='text-7xl text-white'>Projects...</p>
            <div className="projects-section text-white">
                <div className='projects-list'>
                    <ul>
                        <li>> Crypto Listing</li>
                        <li>> Get People Socializing</li>
                        <li>> Mementos</li>
                        <li>> Metropolitan Museum Web</li>
                        <li>> Tipover Game Solver</li>
                    </ul>
                </div>
                <div className='projects-display'>
                    <img></img>
                </div>
            </div>
        </div>
    </div>
    </Layout>
);
}

export default Home;