import React from "react";
import Layout from "../Layouts/Layout.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style/portfolio.css';
import SliderItem from "./SliderItem.js";

// import portfolio
import crypto from "../assets/portfolio/crypto.png";
import metro from "../assets/portfolio/metropolitan.png";
import mementos from "../assets/portfolio/mementos.jpeg";
import gps from "../assets/portfolio/gps.jpeg";
import tipover from "../assets/portfolio/tipover.png";

function Portfolio(){

    const slideImages = [
        {
          imgUrl: crypto,
          caption: 'Crypto Task',
          description: 'This is a project to create a listing of all available crypto currencies, be able to search for certain coins, to sort based on individual columns and is paginated for ease of viewing ',
          url: "https://github.com/jansk32/CryptoTaskPage"
        },
        {
            imgUrl: gps,
            caption: 'Get People Socializing',
            description: "This is a project to create a social web application to connect people new to the area with locals with similar interests using an interactive map that points out upcoming events and places of interest based on user's preference. Worked in a group of 4, and was submitted as a group assignment.",
            url: "https://github.com/StaticDDQ/Go-Blox-GPS"
        },
        {
            imgUrl: mementos,
            caption: 'Mementos',
            description: 'This is a project to create an app that stores data of family antiques / artefacts, family tree, and a timeline of those artefacts. Worked in a group of 4, and the app runs on both android and iOS',
            url: "https://github.com/jansk32/mementos"
        },
        {
            imgUrl: metro,
            caption: 'Metropolitan Museum Web Hightlight',
            description: 'Using the Metropolitan Museum API, this project creates a highlight page of some of the artworks available, and provides information on each of them. This was coded in React',
            url: "https://github.com/jansk32/MetropolitanView"
        },
        {
            imgUrl: tipover,
            caption: 'Tipover Game Solver',
            description: 'Based on the puzzle game developed by ThinkFun games, this is program that solves the puzzles using A* search',
            url: "https://github.com/jansk32/TipOverGame"
        },
      ];



    return (
        <Layout>
            <div className="bg-black text-white">
                <div className="portfolio-banner bg-contain bg-no-repeat bg-center center py-16">
                    <p className="text-2xl mt-32 pt-32">Know the quality you deserve|</p>
                    <p className="text-9xl">PROJECTS.</p>
                </div>
                <div className="code-section center">
                    <div className="code-github">
                        <p className="text-xl">Other projects are available on my <a className="underline underline-offset-3" href="https://github.com/jansk32">Github</a></p>
                    </div>
                    <div className="code-slides">
                        <Carousel showArrows={true} centerMode={false} infiniteLoop={true}>
                                  {slideImages.map((item, index) => (
                              <div className='slider my-slider justify-center' key={index}>
                                <SliderItem url={item.url} imgUrl={item.imgUrl} caption={item.caption} description={item.description} />
                              </div>
                                  ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default Portfolio;