import React, {useEffect, useState} from 'react';
import Header from "../common/Header";
import './Nosotros.css'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Footer from "../common/Footer";

const Blog = (props) => {

    return (
        <>
            <Header/>
                <h3 style={ {textAlign:'center', margin:100}}>En construcción</h3>
            <Footer />
        </>

    );
};

export default Blog;
