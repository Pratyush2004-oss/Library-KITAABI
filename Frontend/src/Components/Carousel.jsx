import React from 'react'
import slide1 from "/slider 1.png";
import slide2 from "/slider 2.png";
import slide3 from "/slider3.png";
import slide4 from "/slider4.png";
import slide5 from "/slider 5.png";

const Carousel = () => {
    return (
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={slide1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={slide2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={slide3} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={slide4} className="w-full" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src={slide5} className="w-full" />
                </div>
            </div>
    )
}

export default Carousel