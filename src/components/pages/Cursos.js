import React, {useEffect, useRef, useState} from 'react';
import Header from "../common/Header";
import './Cursos.css'
import {Link, useParams} from "react-router-dom";
import Loader from "react-loader-spinner";

import Footer from "../common/Footer";
import SectionTitle from "../common/SectionTitle";
import ApiCache from "../utlis/ApiCache";
import TarjetaCurso from "../common/TarjetaCurso";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";


import Collapsible from "react-collapsible";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faClock} from "@fortawesome/free-regular-svg-icons";
import {
    faBullhorn,
    faChartBar,
    faFileAlt, faFlag,
    faImages,
    faUsers,
    faVideo
} from "@fortawesome/free-solid-svg-icons";



const Cursos = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({});


    const [curriculum, setCurriculum] = useState([]);
    const [faq, setFaq] = useState([]);
    const [metaInfo, setMetaInfo] = useState([]);
    const [view, setView] = useState('all');
    const [detalleContent, setDetalleContent] = useState('');
    const [cursosPopulares, setCursosPopulares] = useState([]);

    let {slug} = useParams();

    const endpoint = process.env.REACT_APP_API_LMS + `courses?page=1&per_page=1000`;
    const endpointSingle = process.env.REACT_APP_API_LMS + `course?id=${slug}`;


    const shuffle = (a) => {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    let iframeDetalleRef = useRef(null);

    useEffect(() => {
        setIsLoading(true);
        if (slug === undefined) {
            ApiCache('todos-cursos', endpoint)
                .then((r) => {

                    setCourse({})
                    setFaq([])
                    setCurriculum([])
                    setMetaInfo([]);
                    setCursosPopulares([]);
                    setCourses(r.courses)
                    setIsLoading(false);
                    setView('all');
                })
                .catch((err) => console.log(err))
        } else {
            ApiCache(`curso-${slug}`, endpointSingle)
                .then((r) => {
                    setCourses([])
                    setCourse(r)
                    setFaq(r.faq)
                    setCurriculum(r.curriculum)
                    setMetaInfo(r.categories_object);
                    setIsLoading(false);
                    setView('single')

                })
                .catch((err) => console.log(err))

            ApiCache('todos-cursos', endpoint)
                .then((r) => {
                    shuffle(r.courses);
                    setCursosPopulares(r.courses);

                })
                .catch((err) => console.log(err))
        }
    }, [slug, endpointSingle, endpoint])

    const items = courses.map(curso => {
        return (
            <TarjetaCurso curso={curso} key={`cursos-todos-${curso.id}`}/>
        )
    });

    const getIconCurriculum = (name) => {
        switch (name) {
            case "slide":
                return <FontAwesomeIcon icon={faImages}/>;
            case "text":
                return <FontAwesomeIcon icon={faFileAlt}/>;
            case "video":
                return <FontAwesomeIcon icon={faVideo}/>;
            case "Section 1":
                return <FontAwesomeIcon icon={faFlag}/>;
            default:
                return <FontAwesomeIcon icon={faFileAlt}/>;

        }
    }

    const itemsCurriculum = curriculum.map((cv, index) => {
        return (
            <div className={'curriculum-row'} key={`curriculum-${index}`}>
                <div className={'curriculum-number'}>
                    {index + 1}
                </div>
                <div className={'curriculum-icon'}>
                    {getIconCurriculum(cv.view)}
                </div>
                <div className={'curriculum-label'}>
                    {cv.label}
                </div>
                <div className={'curriculum-duration'}>
                    {cv.duration != null &&
                    <>
                        <FontAwesomeIcon icon={faClock}/> {cv.duration}
                    </>
                    }
                </div>
            </div>
        )
    })

    const itemsDetalle = faq.map((detalle, index) => {
        return (
            <Collapsible key={`collapsible-detalle-${index}`} trigger={detalle.question}>
                {detalle.answer}
            </Collapsible>
        )
    })

    const itemsMeta = metaInfo.map((info, index) => {
        return (
            <Link key={`info-${index}`} to={'#'}>
                {info.name}
            </Link>
        );
    });

    const setDetalleToState = () => {
        setDetalleContent(iframeDetalleRef.current.contentWindow.document.body.innerHTML);
    }

    const buildCursosPopulares = cursosPopulares.map((item, index) => {
        if (index < 3) {
            return (
                <Link to={`/cursos/${item.id}`} className={'invisible-link'} key={`popular-${item.id}`}>
                    <div className={'curso-popular-item'}>
                        <img src={item.images.small} alt={item.title} className={'img-fluid'}/>
                        <h2 className={'title'}>{item.title}</h2>
                    </div>
                </Link>
            );
        } else {
            return <i key={'notanusefullelement-' + index} />;
        }

    });

    if (isLoading) {
        return (
            <>
                <Header />
                <SectionTitle title={' '} />
                <div className="container">
                    <Loader
                        className={'mainLoader'}
                        type="Rings"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                </div>
                <Footer />
            </>
        );
    }

    if (view === 'all' && isLoading === false) {
        return (
            <>
                <Header/>

                <SectionTitle title={'cursos'}/>

                <div className={'container all-cursos'}>
                    {items}
                </div>

                <Footer/>
            </>

        );
    }


    if (view === 'single' && isLoading === false) {

        return (
            <>
                <Header/>

                <SectionTitle title={course.title}/>
                <div className="container curso-single">
                    <main>
                        <h2>{course.title}</h2>
                        <section className={'meta-categorias'}>
                            <div className="icon">
                                <FontAwesomeIcon icon={faBookmark}/>
                            </div>
                            <div>
                                <h3>Categorias:</h3>
                                {itemsMeta}
                            </div>
                        </section>

                        <div className="single-tabs">
                            <Tabs style={{marginTop: 30}}>
                                <TabList>
                                    <Tab>
                                        Descripción
                                    </Tab>
                                    <Tab>
                                        Curriculum
                                    </Tab>
                                    <Tab>
                                        Detalles
                                    </Tab>
                                </TabList>

                                <TabPanel>

                                    <img src={course.images.full} className="img-fluid" alt={''}/>

                                    {/* Por cosas de la vida, esta fue la mejor forma que encontre de parsear el html de la respuesta */}
                                    <div id={'div-detalle'} dangerouslySetInnerHTML={{__html: detalleContent}}/>
                                    <iframe srcDoc={course.description} onLoad={setDetalleToState}
                                            title={'i'}
                                            ref={iframeDetalleRef}/>


                                </TabPanel>
                                <TabPanel>

                                    {itemsCurriculum}

                                </TabPanel>
                                <TabPanel>

                                    {itemsDetalle}

                                </TabPanel>
                            </Tabs>
                        </div>

                    </main>

                    <aside>
                        <Link to={'/acceder'}>
                            Iniciar Sesión
                        </Link>
                        <ul>
                            <li key={'list1'}>
                                Inscriptios: <b>865 students</b>
                                <FontAwesomeIcon icon={faUsers}/>
                            </li>
                            <li key={'list2'}>
                                Duración: <b>6</b>
                                <FontAwesomeIcon icon={faClock}/>
                            </li>
                            <li key={'list3'}>
                                Conferencias: <b>8</b>
                                <FontAwesomeIcon icon={faBullhorn}/>
                            </li>

                            <li key={'list4'}>
                                Video: <b>2</b>
                                <FontAwesomeIcon icon={faVideo}/>
                            </li>

                            <li key={'list5'}>
                                Nivel: Intermediario
                                <FontAwesomeIcon icon={faChartBar}/>
                            </li>
                        </ul>
                        <div className="cursos-populares">
                            {buildCursosPopulares}
                        </div>
                    </aside>
                </div>

                <Footer/>
            </>

        );
    }

};

export default Cursos;
