import React from 'react';

import './Banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../images/Sliders-Home-02-1.jpg'
import slide2 from '../../images/Sliders-Home-03-1.jpg'
import slide3 from '../../images/Sliders-Home-04-1.jpg'
const Banner = (props) => {

    return (
        <>
            <Carousel
                showThumbs={false}
                showArrows={true}
                showIndicators={true}
                showStatus={false}
                swipeable={true}
                autoPlay={true}
                interval={2000}
                infiniteLoop={true}
            >
                <div className='carousel-item'>
                    <div className={'carousel-tag '}>
                        Agregamos cursos nuevos <br />
                        <span>¡todos los meses, sin costos extras!</span>
                    </div>
                    <img src={slide1} alt={''} />
                </div>
                <div className='carousel-item'>
                    <div className={'carousel-tag '}>
                        Somos un sitio de aprendizaje real<br />
                        <span>PARA TODA LA FAMILIA</span>
                    </div>
                    <img src={slide2} alt={''} />
                </div>
                <div className='carousel-item'>
                    <div className={'carousel-tag '}>
                        Cursos para profesionales, <br />
                        dictados por docentes
                        <span>certificados con Microsoft Office Specialist</span>
                    </div>
                    <img src={slide3} alt={''} />
                </div>
            </Carousel>
        </>
    );
};

export default Banner;
