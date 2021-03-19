import React, {useEffect, useState} from 'react';
import Header from "../common/Header";
import Footer from "../common/Footer";
import './Contacto.css'
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "../common/ContactForm";

const Contacto = (props) => {

    return (
        <>
            <Header/>
                <SectionTitle title={'CONTACTANOS'}/>
                <div className="container" style={ {marginTop:50, marginBottom:50}}>
                    <h2 style={ {textAlign:'center'}}>
                        Formulario de Contacto
                    </h2>
                    <div className={'contacto-holder'} >
                        <ContactForm />
                    </div>
                </div>
            <Footer />
        </>

    );
};

export default Contacto;
