import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import axios from 'axios'
// import fileDownload from 'js-file-download'
import resume from '../data/resume'
import infoText from '../data/info-text'
import { Shake } from 'reshake'

export default function Info() {

    //const handleDownload = async (url, filename) => {
    // await axios.get(url, { responseType: 'blob' })
    // .then((res) => {
    //     fileDownload(res.data, filename)
    // })
    //}

    return (
        <>
            <div className='info' id='info'>

                <div className='info-left'>
                    <div className='info-name'>
                        <span>ZI <span className='slash'>/</span></span>
                        <span>QING <span className='slash'>/</span></span>
                        <span>CHEW </span>
                    </div>
                    <div className='info-name'>
                        <span>ZI <span className='slash'>/</span></span>
                        <span>QING <span className='slash'>/</span></span>
                        <span>CHEW </span>
                    </div>
                    <div className='info-name'>
                        <span>ZI <span className='slash'>/</span></span>
                        <span>QING <span className='slash'>/</span></span>
                        <span>CHEW </span>
                    </div>
                </div>

                <div className='info-right'>
                    <div className='info-text px-md-5'>
                        {infoText}
                    </div>

                    <div id='resume'>
                        <button
                            className='resume-btn'
                            style={{ color: 'black' }}
                        // onClick={() => {
                        //     handleDownload(resume.url, resume.fileName)
                        // }}
                        >
                            <Shake
                                v={20}
                                h={0}
                                r={3}
                                int={50}
                                fixed={true}
                                fixedStop={false}
                                active={true}
                            >
                                <AiOutlineDownload size='2em' />
                            </Shake>
                            <a href={resume.url} target='_blank' rel="noreferrer" style={{ color: 'black' }}>Download Resume</a></button>
                    </div>
                </div>
            </div>

        </>
    )
}