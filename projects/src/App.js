import './App.css';
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import projectData from './data/projects'

function App() {

  const dataElements = projectData.map((ele) => {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{ele.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {ele.project.map((p) => {
                return (
                  <Grid item xs={12} sm={6} md={3}>
                    {/* <Item> */}
                    <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={p.imgLink}
                        alt="green iguana"
                      />
                      <CardContent sx={{ backgroundColor: 'black' }}>
                        <Typography gutterBottom variant="h5" component="div" color='white'>
                          {p.name}
                        </Typography>
                        <Typography variant="body2" color='white'>
                          {p.desc}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Source Code</Button>
                        <Button size="small">Live Site</Button>
                      </CardActions>
                    </Card>
                    {/* </Item> */}
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
    <div>

      {dataElements}

    </div>
  );

}

export default App 