import React, { useEffect, useState, componentDidMount } from 'react'
import { BsArrowUpRight } from 'react-icons/bs';

export default function Projects() {

    return (
        <div className={`projects`} id='projects'>
            <div className='project-item row align-items-center mb-5 mx-md-5 mt-md-5 mx-3 mx-md-0'>
                <img src='https://source.unsplash.com/collection/12276674/480x480' className='col-md-6 img-fluid img-left up-when-hover' />
                <div className='project-desc col-md-4'>
                    <h1 className='project-title'>Project title</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptatem minima ducimus explicabo, vero, sunt recusandae aspernatur fuga ratione, rerum quibusdam dicta est. Reprehenderit omnis delectus esse dicta cupiditate error.</p>
                    <div class='projects-skills'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                    </div>
                    <div className='buttons'>
                        <button className='project-button'>Source Code <BsArrowUpRight /></button>
                        <button className='project-button'>Live Site <BsArrowUpRight /></button>
                    </div>
                </div>
            </div>


            <div className='project-item row align-items-center mb-3 mb-5 mx-md-5 mx-3 mx-md-0'>
                <img src='https://source.unsplash.com/collection/12276674/480x480' className='col-md-6 img-fluid img-right up-when-hover order-1 order-md-2' />

                <div className='project-desc col-md-4 order-2 order-md-1'>
                    <h1 className='project-title'>Project title</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptatem minima ducimus explicabo, vero, sunt recusandae aspernatur fuga ratione, rerum quibusdam dicta est. Reprehenderit omnis delectus esse dicta cupiditate error.</p>
                    <div class='projects-skills'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                    </div>
                    <div className='buttons'>
                        <button className='project-button'>Source Code <BsArrowUpRight /></button>
                        <button className='project-button'>Live Site <BsArrowUpRight /></button>
                    </div>
                </div>
            </div>


            <div className='project-item row align-items-center mb-3 mb-5 mx-md-5 mx-3 mx-md-0'>
                <img src='https://source.unsplash.com/collection/12276674/480x480' className='col-md-6 img-fluid img-left up-when-hover order-1 order-md-1' />
                <div className='project-desc col-md-4 order-2 order-md-2'>
                    <h1 className='project-title'>Project title</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptatem minima ducimus explicabo, vero, sunt recusandae aspernatur fuga ratione, rerum quibusdam dicta est. Reprehenderit omnis delectus esse dicta cupiditate error.</p>
                    <div class='projects-skills'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                    </div>
                    <div className='buttons'>
                        <button className='project-button'>Source Code <BsArrowUpRight /></button>
                        <button className='project-button'>Live Site <BsArrowUpRight /></button>
                    </div>
                </div>
            </div>


            <div className='project-item row align-items-center mb-3 mb-5 mx-md-5 mx-3 mx-md-0'>
                <img src='https://source.unsplash.com/collection/12276674/480x480' className='col-md-6 img-fluid img-right up-when-hover order-1 order-md-2' />
                <div className='project-desc col-md-4 order-2 order-md-1'>
                    <h1 className='project-title'>Project title</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptatem minima ducimus explicabo, vero, sunt recusandae aspernatur fuga ratione, rerum quibusdam dicta est. Reprehenderit omnis delectus esse dicta cupiditate error.</p>
                    <div class='projects-skills'>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg" className='projects-skill' />
                    </div>
                    <div className='buttons'>
                        <button className='project-button'>Source Code <BsArrowUpRight /></button>
                        <button className='project-button'>Live Site <BsArrowUpRight /></button>
                    </div>
                </div>
            </div>

            <div className='row'>
                <a href='#' className='view-all-projects col-12'>View All Projects</a>
                <p className='col-12 view-all-projects-bg'>
                    ///////////////////////////
                </p>
            </div>
        </div>
    )
}