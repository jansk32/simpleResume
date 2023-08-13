import React from "react";
import Layout from "../Layouts/Layout.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './portfolio.css';

function Portfolio(){

    const slideImages = [
        {
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 1'
        },
        {
          url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 1'
        },
      ];

    return (
        <Layout>
            <div>
                <div className="title-banner">
                    <p>Portfolio</p>
                </div>
                <div className="code-section">
                    <div className="code-title">
                        <h1 className="code-title-text">Featured Projects</h1>
                    </div>
                    <div className="code-github">
                        <a className="code-github-link" href="https://github.com/jansk32">Github</a>
                    </div>
                    <div className="code-slides">
                        <Carousel showArrows={true} centerMode={true} infiniteLoop={true}>
                                  {slideImages.map((item, index) => (
                              <div className='slider my-slider' key={index}>
                                <img src={item.url} alt="photo of something"/>
                              </div>
                                  ))}
                        </Carousel>
                    </div>
                </div>
                <div className="photo-section">
                    <h1>Photography</h1>
                    <div className="ig-link">
                        <a className="ig-link-text" href="https://www.instagram.com/jansenkwong/">@jansenkwong</a>
                    </div>
                    <div className="code-slides">
                        <Carousel showArrows={true} centerMode={true} infiniteLoop={true}>
                                  {slideImages.map((item, index) => (
                                    <div className='slider my-slider' key={index}>
                                      <img src={item.url} alt="photo of something"/>
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