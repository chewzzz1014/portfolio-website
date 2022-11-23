import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer>
            <div className='footer-icons'>
                <a href="#"><AiFillMail size='2.5em' color='black' /></a>
                <a href="#"><AiFillLinkedin size='2.5em' color='black' /></a>
                <a href="#"><AiFillGithub size='2.5em' color='black' /></a>
            </div>
            <div>
                <p>&copy; Zi Qing Chew, 2022 </p>
            </div>
        </footer>
    )
}