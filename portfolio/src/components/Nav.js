import React from 'react'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-default  position-sticky fixed-top">
            <a className="navbar-brand" href="#"><img src='https://cdn.jsdelivr.net/gh/chewzzz1014/file/portfolio-imgs/nyan_cat.png' alt="" className='nyan_cat' /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ border: '1px solid white', backgroundColor: 'white' }}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#info" style={{ color: 'white' }}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills" style={{ color: 'white' }}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects" style={{ color: 'white' }}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer" style={{ color: 'white' }}>Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}