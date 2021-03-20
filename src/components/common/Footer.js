import React, {useEffect, useState} from 'react';
import './Footer.css';
import ApiCache from "../utlis/ApiCache";
import {NavLink} from "react-router-dom";


const Footer = (props) => {
    const endpoint = process.env.REACT_APP_API_WP + `posts?per_page=4&_embed`;
    const [footerPost, setFooterPost] = useState([]);

    useEffect(() => {
        ApiCache('footer-blogs', endpoint)
            .then( (r) => {
                const posts = r.map(post => {
                    return {
                        id: post.id,
                        img: post['_embedded']['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url ?? '',
                        title: post.title.rendered
                    }
                });
                setFooterPost(posts);
            });
    }, [endpoint])


    const blog_footer = footerPost.map(blog => {
        return (
            <div key={blog.id} className="entry">
                <div className="img">
                    <img src={blog.img} alt=""/>
                </div>
                <div className="title">
                    <h4>{blog.title}</h4>
                </div>
            </div>
        )
    });

    return (
        <>
            <footer>
                <div className="container">
                    <div className="paginas">
                        <h3>Páginas</h3>
                        <ul>
                            <li>
                                <NavLink activeClassName="active" to="/cursos">
                                    Cursos
                                </NavLink>
                            </li>

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

                        </ul>
                    </div>
                    <div className="blog">
                        <h3>Blog</h3>
                        <div className="entries">
                            {blog_footer}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;