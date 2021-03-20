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

    useEffect(() => {
       ApiCache('carusel-cursos-'+props.category, endpoint)
           .then( (r) => {
               setCourses(r.courses)
           });

    }, [endpoint, props.category])


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
                <TarjetaCurso curso={curso} key={`tarjeta-curso-${curso.id}`} />
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
