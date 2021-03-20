import React from 'react';

import './SectionTitle.css';
import banner from '../../images/Barra-Cursos-1919x169.jpg'
const SectionTitle = (props) => {

    return (
        <>
            <section className={'section-title'} style={{backgroundImage:`url(${banner})`}}>
                <div className="container">
                    <h1>
                        { props.title ?? 'Cursos de Ofimatica' }
                    </h1>
                </div>
            </section>
        </>
    );
};

export default SectionTitle;
