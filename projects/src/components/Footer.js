import React from 'react'
import { AiFillMail, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer id='footer'>
            <div className='footer-icons'>
                <a href="mailto:chewziqing@gmail.com" target='__blank'><AiFillMail size='2.5em' color='white' /></a>
                <a href="https://www.linkedin.com/in/ziqingchew" target="_blank" ><AiFillLinkedin size='2.5em' color='white' /></a>
                <a href="https://github.com/chewzzz1014" target='__blank'><AiFillGithub size='2.5em' color='white' /></a>
            </div>
            <div className='footer-desc'>
                <p>&copy; Zi Qing Chew, 2022 </p>
            </div>
        </footer>
    )
}