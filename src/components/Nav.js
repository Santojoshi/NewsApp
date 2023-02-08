/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo2 from './logo2.png'
import './news.css';


export default class Nav extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{ backgroundColor: 'blue',height:'12vh', width:'100%'}}>
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link className="navbar-brand" to="#"><img src={logo2} height={'50px'} width={'80px'} alt="" /></Link>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" to="/" style={{ color: 'white', fontSize: '20px' }}>Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="business" style={{ color: 'white', fontSize: '20px' }}>Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="entertainment" style={{ color: 'white', fontSize: '20px' }}>Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="health" style={{ color: 'white', fontSize: '20px' }}>Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="science" style={{ color: 'white', fontSize: '20px' }}>Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="sports" style={{ color: 'white', fontSize: '20px' }}>Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="technology" style={{ color: 'white', fontSize: '20px' }}>Technology</Link></li>
                            </ul>
                            <div className="dropdown"style={{margin:'3vw'}}>
                                <Link className="btn btn-primary dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </Link>

                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="in">India</Link></li>
                                    <li><Link className="dropdown-item" to="us">USA</Link></li>
                                    <li><Link className="dropdown-item" to="cn">China</Link></li>
                                    <li><Link className="dropdown-item" to="ca">Canada</Link></li>
                                    <li><Link className="dropdown-item" to="fr">France</Link></li>
                                    <li><Link className="dropdown-item" to="ua">Ukraine</Link></li>
                                </ul>
                            </div>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success"style={{color:'white',border:'solid white'}} type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <br />
                <br />
                <br />
            </>
        )
    }
}








