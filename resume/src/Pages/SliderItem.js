import React, { useState } from 'react';

function SliderItem(props){
    const [showTxt, setShowTxt] = useState(false);
    return (
        <div className="flex flex-col relative slider-items">
            <a href={props.url} rel="noreferrer" target='_blank'>
                <img className="object-cover mt-24" src={props.imgUrl} alt="photo of something"/>
                {props.caption && <div className="slider-item-text
                absolute bg-white text-black opacity-70 bottom-0 w-full
                hover:opacity-90 hover:overflow-y-auto"
                onMouseEnter={() => setShowTxt(true)}
                onMouseLeave={() => setShowTxt(false)}
                >
                    <p className='p-4 hover:py-4 hover:pt-4 text-bold text-2xl'>{props.caption}</p>
                    {showTxt && <p className='text-md p-4'>{props.description}</p>}
                </div>}
            </a>
        </div>
    )
}

export default SliderItem;