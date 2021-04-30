import React, {useEffect, useState} from 'react';
import Header from "../common/Header";
import './css/Blog.css'


import Footer from "../common/Footer";
import SectionTitle from "../common/SectionTitle";
import Loader from "react-loader-spinner";
import {Link, useParams} from "react-router-dom";
import moment from 'moment'
import 'moment/locale/es-mx'

import ApiCache from "../utlis/ApiCache";
import BreadCrumbs from "../common/BreadCrumbs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {


    const
        [posts, setPosts] = useState([]),
        [post, setPost] = useState({}),
        [isLoading, setIsLoading] = useState(true),
        [page, setPage] = useState(1),
        [filters, setFilters] = useState(''),
        [isSingle, setIsSingle] = useState(false);

    let {slug} = useParams();
    const locale = 'es'

    const
        endpoint = process.env.REACT_APP_API_WP + `posts?page=${page}&_embed`,
        endpointSingle = process.env.REACT_APP_API_WP + `posts?slug=${slug}&_embed`;

    posts.map((p) => { return p})

    useEffect(() => {
        setPage(1);
        setFilters('');

        moment.locale(locale)

        setIsLoading(true);


        if (slug === undefined) {
            setIsSingle(false);
            ApiCache(`todos-blogs-page-${page}-filters-${filters}`, endpoint)
                .then((r) => {
                    setPosts(r);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err))
        } else {
            setIsLoading(true);
            setIsSingle(true);
            ApiCache(`single-blog-${slug}`, endpointSingle)
                .then((r) => {
                    setPost(r[0]);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err))
        }
    }, [slug, endpoint, endpointSingle, filters, page])

    if (isLoading) {
        return (
            <>
                <Header/>
                <SectionTitle title={'Cargando..'}/>
                <div className="container">
                    <Loader
                        className={'mainLoader'}
                        type="Rings"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                </div>
                <Footer/>
            </>
        );
    }

    if (isSingle) {
        return (
            <>
                <Header/>
                <SectionTitle title={post?.title?.rendered ?? ' sin titulo'}/>
                <BreadCrumbs path={[
                    {
                        id:0,
                        label: 'Cursos de ofimática',
                        link: '/',
                        current: false
                    },
                    {
                        id:1,
                        label: 'Blog',
                        link: '/blog',
                        current: false,
                    },
                    {
                        id:2,
                        label: post?._embedded['wp:term'][0][0]?.name,
                        link:  '/categoria/' + post?._embedded['wp:term'][0][0]?.name ?? '?',
                        current: false,
                    },
                    {
                        id:3,
                        label: post?.title?.rendered,
                        link: null,
                        current: true
                    }
                ]}/>
                <div className="container blog-container">
                    <main>
                        <h2>{post?.title?.rendered}</h2>
                        <div className="post-meta">
                            <FontAwesomeIcon icon={faClock} />
                            { moment(post?.modified).format('LL') }
                        </div>

                        <img
                            src={post?._embedded['wp:featuredmedia'][0]?.media_details?.sizes['img-1170-500']?.source_url ?? 'default.jpg'}
                            alt="" className={'img-fluid'}/>
                        <div className="post-content" dangerouslySetInnerHTML={ {__html: post?.content?.rendered ?? ''}} />

                        {/*
                        todo: tal vez esto..
                        <div className="social-share">
                            <span>Compartir: </span>
                        </div>*/}
                    </main>
                    <aside>
                        <Sidebar />
                    </aside>
                </div>
                <Footer/>
            </>
        );

    } else {

        return (
            <>
                <Header/>
                <SectionTitle title={'todos..'}/>
                <div className="container">

                </div>
                <Footer/>
            </>
        );

    }


};

const Sidebar = (props) => {

    const endpointPosts = process.env.REACT_APP_API_WP + 'posts?per_page=2&_embed';
    const
        [posts, setPosts] = useState([]),
        [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        setIsLoading(true)
        ApiCache(`blog-sidebar-last`, endpointPosts)
            .then((r) => {
                setPosts(r);
                setIsLoading(false);
            })
            .catch((err) => console.log(err))
    },[endpointPosts])

    const recientes = posts.map( (post) => {

        return (
           <Link key={'sidebar-'+post.id} to={`/blog/${post.slug}`}>
              <div className="sidebar-post-item">
                  <div className='img-squared'>
                      <img src={post?._embedded['wp:featuredmedia'][0]?.media_details?.sizes['thumbnail']?.source_url ?? 'default.jpg'} alt={post.title.rendered}/>
                  </div>
                  <h2 className={'title'}> {post.title.rendered}</h2>
              </div>
           </Link>
       )

    })
    return (
        <>
            <div className="sidebar-section">
                <div className="sidebar-decorator" />
                <h2>Recientes</h2>

                {recientes}

            </div>

            <div className="sidebar-section">
                <h2>Buscador</h2>
                <div className="sidebar-search">
                    <input type="text" placeholder='buscar'/>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </div>

            <div className="sidebar-section">
                <h2>Archivo</h2>
                <div className="sidebar-search">
                    <select name="search">
                        <option value="all">
                            Elegir mes
                        </option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Blog;
