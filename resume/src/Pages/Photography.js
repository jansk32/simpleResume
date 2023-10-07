import React from "react";
import Layout from "../Layouts/Layout.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style/photography.css';
import SliderItem from "./SliderItem.js";

// photos
import grandma from "../assets/photos/Grandma Icecream.jpg";
import photo1 from "../assets/photos/20160524_165215.jpg";
import photo2 from "../assets/photos/IMG_0752.jpg";
import photo3 from "../assets/photos/IMG_7202.jpg";
import photo4 from "../assets/photos/IMG_9950.jpg";


function Photography(){

    const slideImages = [
        {
          imgUrl: grandma,
        },
        {
            imgUrl: photo1,
        },
        {
            imgUrl: photo2,
        },
        {
            imgUrl: photo3,
        },
        {
            imgUrl: photo4,
        },
      ];




    return (
        <Layout>
            <div className="bg-black text-white">
                <div className="photography-banner bg-contain bg-no-repeat bg-center center py-16">
                    <p className="text-2xl mt-32 px-8">Your memories are priceless |</p>
                    <p className="text-9xl">PHOTOGRAPHY.</p>
                </div>
                <div className="code-section center pb-32">
                    <div className="code-github">
                        <p className="text-xl">Other photos are available on my <a className="underline underline-offset-3" href="https://www.instagram.com/jansenkwong">Instagram</a></p>
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

export default Photography;