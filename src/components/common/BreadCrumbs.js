import React from 'react';

import './BreadCrumbs.css';
import {Link} from "react-router-dom";
const BreadCrumbs = (props) => {

    const {path} = props;

    const list = path.map( item => {

        if(item.current){
            return (
                <li className='active' key={item.id}>
                    {item.label}
                </li>
            )
        }else{
            return (
                <li key={item.id}>
                    <Link to={item.link} >
                        {item.label}
                    </Link>
                    <span>></span>
                </li>
            )
        }
    });

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <ul className={'bc-list'}>
                        {list}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BreadCrumbs;
