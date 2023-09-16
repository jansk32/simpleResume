import React from 'react';

function Popup({ text, closePopup }){
    return (
      <div>
        <div className="popup-container z-50 fixed top-1/3 left-1/4 w-1/2 p-5 bg-white text-black shadow-black">
         <div className="popup-body">
          <h1>{text}</h1>
          <button onClick={closePopup} className='p-3 m-3 rounded-2xl hover:text-white hover:bg-black'>Close X</button>
         </div>
        </div>
        <div className='fixed top-0 left-0 w-screen h-screen bg-gray-700 bg-opacity-60 transparent'> Hello</div>
        </div>
      );
}

export default Popup;