import React  from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Header from "../common/Header";
import Footer from "../common/Footer";
import SectionTitle from "../common/SectionTitle";

import 'react-tabs/style/react-tabs.css';
import './css/Nosotros.css'

import grupoIdt from '../../images/IDT-1-nosotros-569x349.jpg'
import chica from '../../images/SOBRE_NOSOTROS_1-569x307.jpg'
import ContactForm from "../common/ContactForm";



const Nosotros = (props) => {

    return (
        <>
            <Header/>
            <SectionTitle title={'sobre nosotros'}/>
            <section className={'container nosotros-holder'}>
                <div>
                    <h2>GRUPO IDT</h2>
                    <p>Somos un grupo empresarial tecnológico educativo con una trayectoria de 22 años, orientados a
                        ofrecer soluciones educativas digitales. Trabajamos desde el corazón de América para el resto
                        del mundo, desarrollando proyectos educacionales propios y en algunas ocasiones para
                        emprendimientos de clientes externos. Hacemos del conocimiento, de la pedagogía y la
                        creatividad, la innovación y de la calidad académica a nuestros pilares esenciales para
                        fortalecer nuestro éxito.</p>
                    <p>En el IDT nos apasionamos con el compromiso de formar expertos y líderes en Medios Digitales y de
                        Tecnología en general. Diversidad, innovación y calidad son características que distinguen a
                        nuestros emprendimientos profesionales. Constantemente vamos incorporando las ofertas educativas
                        tecnológicas y digitales con mayores demandas laborales y de tendencias.</p>
                </div>
                <div>
                    <img src={grupoIdt} alt="" className="img-fluid"/>
                </div>

                <div>
                    <img src={chica} alt="" className="img-fluid"/>
                </div>
                <div>
                    <Tabs style={ {marginTop:30}}>
                        <TabList>
                            <Tab>CURSOS DE OFIMÁTICA</Tab>
                            <Tab>CONTACTO</Tab>
                        </TabList>

                        <TabPanel>
                            <p>
                                Es un proyecto del Grupo IDT, con el cual pretendemos contribuir a una necesidad de formación de calidad basada en cursos esenciales, desde lo básico a lo avanzado en herramientas de ofimática en general. Pasando por Windows, Word, Excel, PowerPoint, hasta cursos de Scratch para niños/as que deseen adentrarse en el mundo de la programación (que es el futuro para ellos). Brindamos formación integral y de calidad, para toda la familia a un costo accesible.
                            </p>
                        </TabPanel>
                        <TabPanel>
                            <ContactForm />
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
            <Footer/>
        </>

    );
};

export default Nosotros;


