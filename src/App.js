import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Nosotros from "./components/pages/Nosotros";
import Cursos from "./components/pages/Cursos";
import React from "react";
import Carrito from "./components/pages/Carrito";
import Acceder from "./components/pages/Acceder";
import Contacto from "./components/pages/Contacto";
import Blog from "./components/pages/Blog";
import Preguntas from "./components/pages/Preguntas";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/cursos/:slug/:seo">
                    <Cursos />
                </Route>
                <Route exact path="/cursos/:slug">
                    <Cursos />
                </Route>
                <Route exact path="/cursos">
                    <Cursos />
                </Route>
                <Route exact path="/carrito">
                    <Carrito />
                </Route>
                <Route exact path="/acceder">
                    <Acceder />
                </Route>
                <Route exact path="/contacto">
                    <Contacto />
                </Route>
                <Route exact path="/sobre-nosotros">
                    <Nosotros />
                </Route>
                <Route exact path="/blog/:slug">
                    <Blog />
                </Route>
                <Route exact path="/blog">
                    <Blog />
                </Route>

                <Route exact path="/preguntas">
                    <Preguntas />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
