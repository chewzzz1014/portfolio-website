import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import name from '../images/name.png'

export default function Info() {
    return (
        <>
            <div className='info'>

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
                    <div className='info-text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At mollitia, natus quae distinctio error porro, dolore quibusdam aliquam qui, voluptatibus laborum libero in quod nisi tempora repellat alias sint magni!

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet soluta accusantium consequatur officia qui molestias, quam culpa quaerat earum voluptatem id harum suscipit doloribus eaque, aperiam asperiores provident voluptate numquam.
                    </div>

                    <div className=''>
                        <button className='resume-btn'><AiOutlineDownload size='2em' /> Download Resume</button>
                    </div>
                </div>
            </div>

        </>
    )
}