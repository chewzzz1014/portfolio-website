import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import axios from 'axios'
import fileDownload from 'js-file-download'
import resume from '../data/resume'

export default function Info() {

    const handleDownload = (url, filename) => {
        axios.get(url, { responseType: 'blob' })
            .then((res) => {
                fileDownload(res.data, filename)
            })
    }

    return (
        <>
            <div className='info' id='info'>

                <div className='info-left'>
                    <div className='info-name'>
                        <span>ZI</span>
                        <span className='slash'>/</span>
                        <span>QING</span>
                        <span className='slash'>/</span>
                        <span>CHEW</span>
                    </div>
                    <div className='info-name'>
                        <span>ZI</span>
                        <span className='slash'>/</span>
                        <span>QING</span>
                        <span className='slash'>/</span>
                        <span>CHEW</span>
                    </div>
                    <div className='info-name'>
                        <span>ZI</span>
                        <span className='slash'>/</span>
                        <span>QING</span>
                        <span className='slash'>/</span>
                        <span>CHEW</span>
                    </div>
                </div>

                <div className='info-right'>
                    <div className='info-text px-md-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At mollitia, natus quae distinctio error porro, dolore quibusdam aliquam qui, voluptatibus laborum libero in quod nisi tempora repellat alias sint magni!

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet soluta accusantium consequatur officia qui molestias, quam culpa quaerat earum voluptatem id harum suscipit doloribus eaque, aperiam asperiores provident voluptate numquam.
                    </div>

                    <div className=''>
                        <button
                            className='resume-btn'
                            style={{ color: 'white' }}
                            onClick={() => {
                                handleDownload(resume.url, resume.fileName)
                            }}
                        >
                            <AiOutlineDownload size='2em' /> Download Resume</button>
                    </div>
                </div>
            </div>

        </>
    )
}