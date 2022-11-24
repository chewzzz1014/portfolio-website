import React from 'react'

export default function Nav() {

    const whiteText = {
        color: 'white'
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-default  position-sticky fixed-top">
            <a className="navbar-brand" href="#"><img src='https://cdn.jsdelivr.net/gh/chewzzz1014/file/portfolio-imgs/nyan_cat.png' alt="" className='nyan_cat' /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ border: '1px solid white', backgroundColor: 'white' }}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#info" style={whiteText}>About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills" style={whiteText}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects" style={whiteText}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer" style={whiteText}>Contacts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}