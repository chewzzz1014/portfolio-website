import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import projectData from '../data/projects';
import { nanoid } from 'nanoid'

export default function Projects() {

    const projectElements = projectData.map((ele, idx) => {

        const skillElements = ele.skills.map(s => {
            return (
                <img src={s.imgLink} key={nanoid()} alt={ele.name} className='projects-skill' style={{ width: '2em', height: '2em' }} />
            )
        })

        const isEven = (idx + 1) % 2 === 0

        return (
            <div className='project-item row align-items-center mb-5 mt-md-5 mx-0 mx-md-0' key={nanoid()}>
                <img src={ele.imgLink} alt={ele.name} className={`col-md-5 img-fluid up-when-hover 
                        ${(isEven) ? 'img-right order-1 order-md-2' : 'img-left'}`}
                />
                <div className={`project-desc col-md-5
                    ${(isEven) ? 'order-2 order-md-1' : ''}`}>
                    <h2 className='project-title'>{ele.name}</h2>
                    <p>{ele.desc}</p>
                    <div className='projects-skills'>
                        {skillElements}
                    </div>
                    <div className='buttons'>
                        <button className='project-button'>
                            <a href={ele.srcLink} target='_blank'>
                                Source Code <BsArrowUpRight />
                            </a>
                        </button>
                        <button className='project-button'>
                            <a href={ele.pageLink} target='_blank'>
                                Live Site <BsArrowUpRight />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={`projects`} id='projects'>

            {projectElements}

            <div className='row more-projects'>
                <div>
                    <a href='https://chewzzz1014.github.io/portfolio-website-projects-page/' className='view-all-projects col-12'>
                        😎<span style={{ textDecoration: 'underline', display: 'inline' }}>View All Projects</span><BsArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    )
}