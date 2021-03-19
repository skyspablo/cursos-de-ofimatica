import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const TarjetaCurso = (props) => {

    const {curso} = props
    return (
        <>

            <Link to={ `/cursos/${curso.id}` } className={'invisible-link'}  key={`movie-${curso.id}`}>
                <div className={'tarjeta-curso'}>
                    <img src={curso.images.small} alt="{curso.title}"/>
                    <h2 className={'title'}>{curso.title}</h2>
                    <span>{curso.categories[0] ?? ''}</span>
                </div>
            </Link>
        </>
    );
}

export default TarjetaCurso;