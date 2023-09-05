import React from 'react';
import { NavBar } from '../Navbar/navBar';
import ContactImg from '../assets/contact.webp';
import './contact.css';

export const Contact = () => {
    return (
        <>
            <NavBar />
            <div className='contact-page'>
                <div>
                    <img src={ContactImg} className="contact__page-image" width="100%" alt="contact image"></img>
                </div>
                <div className='contact__page-content'>
                    <h2>Let's Talk!</h2>
                    <p>MVS PHOTOGRAPHY</p>
                    <a href=''>maniphotography90@gmail.com</a>
                </div>

            </div>
        </>
    )
}