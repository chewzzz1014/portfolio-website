import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import axios from 'axios'
import fileDownload from 'js-file-download'
import resume from '../data/resume'
import infoText from '../data/info-text'

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
                        {infoText}
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