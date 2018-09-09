import React, { Component, Fragment } from 'react'
import { NavLink }                    from 'react-router-dom'
import M                              from 'materialize-css/dist/js/materialize.min.js'
import                                     'materialize-css/dist/css/materialize.min.css'


class Header extends Component 
{
    componentDidMount ()
    {
        var elem = document.querySelector(".sidenav")
        M.Sidenav.init(elem, 
            {
                edge: "left",
                inDuration: 250
            })
    }      

    render() 
    {
        return (
            <Fragment>
                <header className="main-header">
                    <nav className="transparent">
                        <div className="container">
                            <div className="nav-wrapper">

                                <NavLink to="/" className="brand-logo red-text text-lighten-1 hide-on-med-and-down">
                                    OTAKUFLIX
                                </NavLink>
                    
                                <ul className="right hide-on-med-and-down">
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/animes">Animes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/mangas">Mangas</NavLink>
                                    </li>
                                </ul>

                                {/* sidenav begin */}
                                <ul id="slide-out" className="sidenav grey darken-4">
                                    <h4 className="red-text text-lighten-1 center">OTAKUFLIX</h4>                
                                    <li>
                                        <NavLink to="/" className='white-text'>
                                            <i className="fa fa-home white-text"></i>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/animes" className='white-text'>
                                            <i className="fas fa-tv white-text"></i>
                                            Animes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/mangas" className='white-text'>
                                            <i className="fas fa-book-open white-text"></i>
                                            Mangas
                                        </NavLink>
                                    </li>                             
                                </ul>

                                <a href="#!" data-target="slide-out" className="sidenav-trigger">
                                    <i className="fa fa-bars red-text"></i>
                                </a>
                                {/* end of sidenav */}

                            </div>
                        </div>
                    </nav>
                </header>
            </Fragment>
        )
    }
}

export default Header