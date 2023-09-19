import React from "react";
import Layout from "../Layouts/Layout.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style/photography.css';
import SliderItem from "./SliderItem.js";

function Photography(){

    const slideImages = [
        {
          imgUrl: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        },
      ];



    return (
        <Layout>
            <div className="bg-black text-white">
                <div className="photography-banner bg-contain bg-no-repeat bg-center center py-16">
                    <p className="text-2xl mt-32 pt-32">Your memories are priceless |</p>
                    <p className="text-9xl">PHOTOGRAPHY.</p>
                </div>
                <div className="code-section center">
                    <div className="code-github">
                        <p className="text-xl">Other photos are available on my <a className="underline underline-offset-3" href="https://www.instagram.com/jansenkwong">Instagram</a></p>
                    </div>
                    <div className="code-slides">
                        <Carousel showArrows={true} centerMode={false} infiniteLoop={true}>
                                  {slideImages.map((item, index) => (
                              <div className='slider my-slider' key={index}>
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

export default Photography;