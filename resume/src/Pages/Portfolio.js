import React from "react";
import Layout from "../Layouts/Layout.js";
import Slider from 'slider-moon';
import 'slider-moon/dist/style.css'

function Portfolio(){

    const slideImages = [
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
                        <Slider
                        slideClass={'my-slider'}
                        infinite={true}
                        bullets={true}
                        arrowsNav={true}
                        animation={'scale'}
                        callback={() => {
                          console.log('here');
                        }}
                        >
                        {slideImages.map((item, index) => {
                            return (
                                <div className='slider my-slider'>
                                <ul className='slider-wrapper'>
                                  {slideImages.map((item, index) => (
                                    <li key={index}>
                                      <img src={item.url} alt="photo of something"/>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                        })}
                        </Slider>
                    </div>
                </div>
                <div className="photo-section">
                    <h1>Photography</h1>
                    <div className="ig-link">
                        <a className="ig-link-text" href="https://www.instagram.com/jansenkwong/">@jansenkwong</a>
                    </div>
                    <div className="photo-slides">
                    {slideImages.map((item, index) => {
                            return (
                                <div className='slider my-slider'>
                                <ul className='slider-wrapper'>
                                  {slideImages.map((item, index) => (
                                    <li key={index}>
                                      <img src={item.url} alt="photo of something"/>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default Portfolio;