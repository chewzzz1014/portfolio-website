import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer>
            <div className='footer-icons'>
                <a href="#"><AiFillMail size='3em' /></a>
                <a href="#"><AiFillLinkedin size='3em' /></a>
                <a href="#"><AiFillGithub size='3em' /></a>
            </div>
            <div>
                <p>&copy; Zi Qing Chew </p>
            </div>
        </footer>
    )
}