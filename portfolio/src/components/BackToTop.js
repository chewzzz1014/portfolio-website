import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './ScrollTop';

import Nav from './Nav'
import Footer from './Footer'
import Info from './Info'
import Skills from './Skills'
import Projects from './Projects';

export default function BackToTop(props) {
    return (
        <React.Fragment>
            <Nav />
            <Toolbar id="back-to-top-anchor" style={{ 'minHeight': '5px', 'margin': '0px', 'padding': '0px' }} />
            <div className='main'>
                <div>
                    <Info />
                    <Skills />
                    <Projects />
                </div>
                <Footer />
            </div>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
