import React from 'react'
import { Shake } from 'reshake'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-default  position-sticky fixed-top">
            <Shake
                h={10}
                v={10}
                r={3}
                dur={800}
                int={10}
                max={100}
                fixed={true}
                fixedStop={false}
                freez={true}>
                <a className="navbar-brand" href="#"><img src='https://cdn.jsdelivr.net/gh/chewzzz1014/file/portfolio-imgs/nyan_cat.png' alt="" className='nyan_cat' /></a>
            </Shake>
        </nav>
    )
}