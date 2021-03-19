import React, {useEffect, useState} from 'react';
import './CaruselCursos.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {CustomButtonGroup} from "../common/CustomArrows";
import ApiCache from "../utlis/ApiCache";
import TarjetaCurso from "./TarjetaCurso";

const CaruselCursos = (props) => {

    const [courses, setCourses] = useState([]);
    const endpoint = process.env.REACT_APP_API_LMS + `courses?page=1&category=${props.category}&per_page=1000`;

    const getData = async () => {
        /*const data = await fetch(endpoint);
        const cursos = await data.json();
        return cursos;*/
        return await ApiCache('carusel-cursos-'+props.category, endpoint);
    }

    useEffect(() => {
        getData()
            .then((r) => {

                setCourses(r.courses)
            })
            .catch((err) => console.log(err))

    }, [])


    const ButtonGroup = ({next, previous, ...rest}) => {
        const {carouselState: {currentSlide}} = rest;
        return (
            <div className="carousel-button-group" style={ {position:'absolute'} }>
                <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>Atras</button>
                <button onClick={() => next()}> Siguiente</button>
            </div>
        );
    };

    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1
        }
    };
    const items = courses.map(curso => {
            return (
                <TarjetaCurso curso={curso} />
            )
        });
    return (
        <div className={'carousel-parent'}>
            <h2>{props.title}</h2>
            <div  style={{position:'relative'}}>
                <Carousel
                    responsive={responsive}
                    arrows={false}
                    customButtonGroup={<CustomButtonGroup />}
                    renderButtonGroupOutside={true}
                    centerMode={false}
                >
                    {items}
                </Carousel>
            </div>
        </div>

    );
};

export default CaruselCursos;
