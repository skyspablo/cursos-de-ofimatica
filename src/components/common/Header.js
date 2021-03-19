import React, {useState} from 'react';
import logo from '../../images/logo-1.png';
import './Header.css';
import {Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
    const menu = <ul>
        <li>
            <NavLink activeClassName="active" to="/blog">
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/preguntas">
                Preguntas
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/sobre-nosotros">
                Nosotros
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/contacto">
                Contacto
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/cursos">
                Cursos
            </NavLink>
        </li>
        <li className={"nav-btn"}>
            <NavLink activeClassName="active" to="/inscribirse">
                Inscribirse
            </NavLink>
        </li>
    </ul>;
    const [open, setOpen] = useState(false);
    const  toggleMenu = () => {
        setOpen(!open);
    };
    return (
        <>
            <div className="container">
                <nav>

                    <NavLink to="/">
                        <img src={logo} alt="Cursos de ofimatica"/>
                    </NavLink>
                    {menu}
                    <span  onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </span>
                </nav>
                <section className={`mobile-menu ${open ? 'open' : ''}`}>
                    {menu}
                </section>
            </div>
        </>
    );
};

export default Header;
