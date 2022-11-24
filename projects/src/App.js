import './App.css';
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import projectData from './data/projects'
import Logo from './components/logo';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BsArrowUpRight } from 'react-icons/bs';
import { MdOutlineExpandMore } from 'react-icons/md';
import { Shake } from 'reshake'

const buttonStyle = {
  border: 'none',
  padding: '0.5em 1em',
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '0.5em',
}

const accordionBarStyle = {
  backgroundColor: '#242424',
  border: '1px solid white',
  margin: '2em 0em',
  // boxShadow: '10px 15px 20px 0.5px rgba(255, 255, 255, 1)'
}


function App() {

  const dataElements = projectData.map((ele) => {
    return (
      <Accordion sx={accordionBarStyle}>
        <AccordionSummary
          expandIcon={<MdOutlineExpandMore color='white' size='40px' />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography color='white'>{ele.name}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: '#242424' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {ele.project.map((p) => {
                return (
                  <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345 }} >
                      <CardMedia
                        component="img"
                        height="140"
                        image={p.imgLink}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {p.name}
                        </Typography>
                        <Typography variant="body2" color='black'>
                          {p.desc}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" sx={buttonStyle}><a href={p.srcLink} target='_blank'>Source Code<BsArrowUpRight /></a></Button>
                        <Button size="small" sx={buttonStyle}><a href={p.pageLink} target='_blank' >Live Site <BsArrowUpRight /></a></Button>
                      </CardActions>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    )
  })


  return (
    <div className='App'>
      <div>
        <Nav />
        <Logo />
        {dataElements}
      </div>
      <Footer />
    </div>
  );

}

export default App 