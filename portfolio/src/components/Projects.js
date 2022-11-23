import React, { useEffect, useState, componentDidMount } from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import projectData from '../data/projects';

export default function Projects() {

    const projectElements = projectData.map((ele, idx) => {

        const skillElements = ele.skills.map(s => {
            return (
                <img src={s.imgLink} className='projects-skill' />
            )
        })

        if ((idx + 1) % 2 == 0)
            return (
                <div className='project-item row align-items-center mb-5 mx-md-5 mt-md-5 mx-3 mx-md-0'>
                    <img src='https://source.unsplash.com/collection/12276674/480x480' className='col-md-6 img-fluid img-left up-when-hover order-1 order-md-2' />
                    <div className='project-desc col-md-4 order-2 order-md-1'>
                        <h2 className='project-title'>{ele.name}</h2>
                        <p>{ele.desc}</p>
                        <div class='projects-skills'>
                            {skillElements}
                        </div>
                        <div className='buttons'>
                            <button className='project-button'><a href={ele.srcLink} target='_blank'>Source Code <BsArrowUpRight /></a></button>
                            <button className='project-button'><a href={ele.pageLink} target='_blank'>Live Site <BsArrowUpRight /></a></button>
                        </div>
                    </div>
                </div>
            )
        else
            return (
                <div className='project-item row align-items-center mb-5 mx-md-5 mt-md-5 mx-3 mx-md-0'>
                    <img src='https://source.unsplash.com/collection/12276674/480x480' className='col-md-6 img-fluid img-left up-when-hover' />
                    <div className='project-desc col-md-4'>
                        <h1 className='project-title'>{ele.name}</h1>
                        <p>{ele.desc}</p>
                        <div class='projects-skills'>
                            {skillElements}
                        </div>
                        <div className='buttons'>
                            <button className='project-button'><a href={ele.srcLink} target='_blank'>Source Code <BsArrowUpRight /></a></button>
                            <button className='project-button'><a href={ele.pageLink} target='_blank'>Live Site <BsArrowUpRight /></a></button>
                        </div>
                    </div>
                </div>
            )
    })

    return (
        <div className={`projects`} id='projects'>

            {projectElements}

            <div className='row'>
                <a href='#' className='view-all-projects col-12'>View All Projects</a>
                <p className='col-12 view-all-projects-bg'>
                    ///////////////////////////
                </p>
            </div>
        </div>
    )
}