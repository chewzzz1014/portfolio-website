import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';

export default function Projects() {
    return (
        <div className='projects'>
            <div className='project-item row align-items-center mb-md-5 mx-md-5 mt-md-5 mx-3 mx-md-0'>
                <img src='https://source.unsplash.com/collection/12276674/480x480' className='col-md-6 img-fluid img-left up-when-hover' />
                <div className='col-md-4'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptatem minima ducimus explicabo, vero, sunt recusandae aspernatur fuga ratione, rerum quibusdam dicta est. Reprehenderit omnis delectus esse dicta cupiditate error.</p>
                    <div className='buttons'>
                        <button className='project-button up-when-hover'>Source Code <BsArrowUpRight /></button>
                        <button className='project-button up-when-hover'>Live Site <BsArrowUpRight /></button>
                    </div>
                </div>
            </div>


            <div className='project-item row align-items-center mb-3 mb-md-5 mx-md-5 mx-3 mx-md-0'>
                <img src='https://source.unsplash.com/collection/12276674/480x480' className='col-md-6 img-fluid order-1 order-md-2 img-right up-when-hover' />
                <div className='col-md-4 order-2 order-md-1'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptatem minima ducimus explicabo, vero, sunt recusandae aspernatur fuga ratione, rerum quibusdam dicta est. Reprehenderit omnis delectus esse dicta cupiditate error.</p>
                </div>
            </div>


            <div className='project-item row align-items-center mb-3 mb-md-5 mx-md-5 mx-3 mx-md-0'>
                <img src='https://source.unsplash.com/collection/12276674/480x480' className='col-md-6 img-fluid img-left up-when-hover' />
                <div className='col-md-4'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptatem minima ducimus explicabo, vero, sunt recusandae aspernatur fuga ratione, rerum quibusdam dicta est. Reprehenderit omnis delectus esse dicta cupiditate error.</p>
                </div>
            </div>


            <div className='project-item row align-items-center mb-3 mb-md-5 mx-md-5 mx-3 mx-md-0'>
                <img src='https://source.unsplash.com/collection/12276674/480x480' className='col-md-6 img-fluid order-1 order-md-2 img-right up-when-hover' />
                <div className='col-md-4 order-2 order-md-1'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptatem minima ducimus explicabo, vero, sunt recusandae aspernatur fuga ratione, rerum quibusdam dicta est. Reprehenderit omnis delectus esse dicta cupiditate error.</p>
                </div>
            </div>

            <a href='#' className='view-all-projects'>View All Projects</a>
        </div>
    )
}