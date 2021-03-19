import React, {useEffect, useState} from 'react';
import Header from "../common/Header";
import Banner from "../common/Banner";
import './Home.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChalkboardTeacher, faCheck, faFlag, faGlobe,
    faGraduationCap,
    faThumbsUp,
    faUserGraduate,
    faUsers
} from "@fortawesome/free-solid-svg-icons";
import CaruselCursos from "../common/CaruselCursos";

import banner from '../../images/Banner_2.png';
import bannerPersona from '../../images/Personaje_Banner_Promo.png';
import fondoContador from '../../images/Rectangulo-5.jpg';
import bannerPersonaGarantia from '../../images/Personaje_Banner_Garantia-555x650.png';

import nivaldoImg from '../../images/nivaldo-1199x1199.png';
import jessicaImg from '../../images/jessica-1199x1199.png';
import matiasImg from '../../images/matias-1199x1199.png';
import joseImg from '../../images/jose-1199x1199.png';
import Footer from "../common/Footer";



const Home = (props) => {

    return (
        <>
            <Header/>
            <Banner/>
            <CtaHome/>
            <section className='container first-section'>
                <div className="circle">
                    La educación del <br/>
                    futuro comienza con <br/>
                    una buena capacitación<br />
                    <span>BIENVENIDO</span>
                </div>
                <div className="content">
                    <p>
                        Nuestros cursos profesionales están estructurados desde lo inicial a lo avanzado, y están orientados a todos los miembros de la familia. Si eres emprendedor, un padre o madre de familia, si eres un estudiante escolar, de colegio o universitario, hemos pensado en todos ustedes.
                    </p>
                    <p>
                        Pues, con una sola suscripción anual de:
                    </p>
                    <h3>
                        USD 59 y por tiempo limitado (<span>en vez de USD 120</span>),
                    </h3>
                    <p>
                        toda la familia puede beneficiarse a través de una sola suscripción, adquiriendo y perfeccionándose así en las nuevas habilidades para el futuro inmediato a través de los Cursos de Ofimática.
                    </p>
                </div>
            </section>
            <section className='container'>
                <CaruselCursos category={'147'} title={'Cursos de formación Profesional'} />
            </section>

            <section className='container'>
                <CaruselCursos category={'146'} title={'Cursos para escolares de 9 a 18 años'} />
            </section>

            <section className={'cta-bg'} style={{backgroundImage: `url(${banner})`}}>
                <div className="container flex">
                    <div className="text">
                        <h3>¡Obtenga los mejores cursos para toda la familia con un gran descuento por tiempo limitado!</h3>
                        <p>
                            Puedes acceder a los mejores Cursos de Ofimática, realizando a propio ritmo y en cualquier
                            lugar y dispositivo tecnológico, para que toda la familia aproveche esta especial oferta y única
                            a un precio inmejorable. Con clases profesionales, desarrollada por verdaderos profesionales de la educación.
                        </p>
                        <button>¡Inscribirse Ahora!</button>
                    </div>
                    <div className="moving-img" id={'movingImg'}>
                        <img src={bannerPersona} alt="" id={'bannerPersona'}/>
                    </div>
                </div>
            </section>

            <section className={'porque-cdo'}>
                <div className="container grid">
                    <div className="tarjeta-home">
                        <FontAwesomeIcon icon={faUsers} />
                        <div className="content">
                            <h3>Confianza</h3>
                            <p>
                                En estos tiempos donde la confianza es un factor fundamental, nosotros nos destacamos porque ofrecemos garantía de servicio. Si no estás satisfecho con el servicio, te reembolsamos la inversión con garantía incluso hasta dentro de los 60 (sesenta) días de tu suscripción si no has recibido lo comprometido. Así de seguros nos sentimos para estrechar vínculos contigo y tu entorno familiar.
                            </p>
                        </div>
                    </div>

                    <div className="tarjeta-home">
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <div className="content">
                            <h3>Experiencia</h3>
                            <p>
                                Somos expertos en el ámbito de la capacitación basada en las nuevas tecnologías. El Grupo IDT es un conglomerado corporativo que tiene 22 años de trabajo y experiencia en el sector educativo, y nuestros servicios los sustentamos en la innovación y la calidad absoluta en cada uno de nuestros cursos. Contamos con la mejor metodología, el mejor plantel docente, y las mejores tecnologías aliadas.
                            </p>
                        </div>
                    </div>

                    <div className="tarjeta-home">
                        <FontAwesomeIcon icon={faChalkboardTeacher} />
                        <div className="content">
                            <h3>Conveniencia</h3>
                            <p>
                                En los Cursos de Ofimática podrás encontrar formaciones orientadas al ámbito y desarrollo profesional, pero también como beneficio adicional, tus hijos podrán realizar al mismo tiempo Cursos de Windows y de Ofimática en general, e introducirlos al mundo amigable de la programación. Todo esto y mucho más por medio de una sola suscripción anual.
                            </p>
                        </div>
                    </div>

                    <div className="tarjeta-home">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <div className="content">
                            <h3>Calidad</h3>
                            <p>
                                Estamos brindando los programas curriculares más actualizados al 2020, y los iremos actualizando a medida se lancen nuevas versiones, no solamente pensando en capacitaciones básicas, si no apuntamos a una formación más integral. Por ello, mes a mes, iremos beneficiando a nuestros suscriptores con cursos nuevos y actuales sin costos adicionales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={'counters'} style={ {backgroundImage: `url(${fondoContador})`}}>
                <div className="container">
                    <div className={'counter-items'}>
                        <FontAwesomeIcon icon={faGlobe} />
                        <h3>400</h3>
                        <h4>LECCIONES</h4>
                    </div>
                    <div className={'counter-items'}>
                        <FontAwesomeIcon icon={faFlag} />
                        <h3>75</h3>
                        <h4>CURSOS FINALIZADOS</h4>
                    </div>
                    <div className={'counter-items'}>
                        <FontAwesomeIcon icon={faUsers} />
                        <h3>1200</h3>
                        <h4>HORAS DESARROLLADAS</h4>
                    </div>
                    <div className={'counter-items'}>
                        <FontAwesomeIcon icon={faChalkboardTeacher} />
                        <h3>320</h3>
                        <h4>HORAS DE CAPACITACIÓN</h4>
                    </div>
                </div>
            </section>

            <section className={'container docentes-section'}>
                <h2>Staff de Docentes</h2>
                
                <div className="docentes-list">

                    <div className="docente">
                        <img src={nivaldoImg} alt=""/>
                        <h3>Nivaldo Escurra</h3>
                        <span>
                            Microsoft Office Specialist
                        </span>
                        <p>
                            Prof. certificado en Microsoft Office Specialist
                            Docente especializado en Scratch y Robótica Educativa
                        </p>
                    </div>

                    <div className="docente">
                        <img src={jessicaImg} alt=""/>
                        <h3>Jessica Denis</h3>
                        <span>
                            Ofimática y Alfabetización Digital
                        </span>
                        <p>
                            Prof. especializada en Ofimática y Alfabetización Digital
                            Docente STEAM Educativo y Grupo IDT
                        </p>
                    </div>

                    <div className="docente">
                        <img src={matiasImg} alt=""/>
                        <h3>Matías Ortega</h3>
                        <span>
                            Matías Ortega
                        </span>
                        <p>
                            Prof. especializado en Ofimática y Alfabetización Digital
                            Supervisor Académico en la Fundación Protección Online
                        </p>
                    </div>

                    <div className="docente">
                        <img src={joseImg} alt=""/>
                        <h3>José María García</h3>
                        <span>
                            Microsoft Office Specialist
                        </span>
                        <p>
                            Prof. certificado en Microsoft Office Specialist
                            Docente especializado en Audiovisuales y Efectos Especiales
                        </p>
                    </div>

                </div>
            </section>

            <section className='garantia'>
                <h2>Garantía de servicios</h2>
                <div className="container">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCheck} /> No somos improvisados, contamos con un staff de docentes cualificados y con alta experiencia técnica.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} /> Todos los meses sumaremos más cursos para que así la familia siga creciendo académicamente sin costos ocultos, y podremos devolverte lo pagado si no cumplimos.
                        </li>
                    </ul>
                    <div className='img-holder'>
                        <img src={bannerPersonaGarantia} alt=""/>
                    </div>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCheck} /> Contarás con docentes de primer nivel y con el soporte online para las dudas que se te puedan presentar.
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} /> Nos afianzamos desarrollando cursos de calidad, con vídeos, tutoriales, materiales de apoyos textuales, ejercitarios, evaluaciones y soporte constante.
                        </li>
                    </ul>
                </div>

            </section>

            <Footer />
        </>

    );
};

const CtaHome = (props) => {

    const [seconds, setSeconds] = useState(86400);
    const [time,setTime] = useState({d:0, h:0, m: 0, s:0})

    const secondsToTime = (secs) => {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        setTime({
            "d": 1,
            "h": hours,
            "m": minutes,
            "s": seconds
        });
    }

    useEffect(()=>{

        const timer = setInterval(()=>{
            setSeconds((s) =>  s-1);
        },1000);
        return () => clearInterval(timer)
    },[])

    useEffect(()=>{
        secondsToTime(seconds)
    },[seconds])

    return (<>
        <div className="container">
            <div className="cta-home">
                <h2>
                    ¡Obtenga los mejores cursos para toda la familia con un gran descuento por tiempo limitado!
                </h2>
                <div className="countdown-holder">
                    <div className='countdown'>
                        <div>
                            <h2>{time.d}</h2>
                            <span>Días</span>
                        </div>
                        <div>
                            <h2>{time.h}</h2>
                            <span>Horas</span>
                        </div>
                        <div>
                            <h2>{time.m}</h2>
                            <span>Minutos</span>
                        </div>
                        <div>
                            <h2>{time.s}</h2>
                            <span>Segundos</span>
                        </div>
                    </div>
                    <Link to='/carrito'>
                        <FontAwesomeIcon icon={faUserGraduate} />
                         ¡Inscribirse Ahora!
                    </Link>
                </div>
            </div>

        </div>

    </>);
};


export default Home;
