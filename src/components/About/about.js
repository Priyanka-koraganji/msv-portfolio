import React from 'react';
import Profile from '../assets/8R7A8748.webp';
import { NavBar } from '../Navbar/navBar';
import './about.css';

export const About = () => {
    return (
        <>
            <NavBar />
            <div className='about-page'>
                <div>
                    <img className='profile-image' width="500px" src={Profile} alt="profile"></img>
                </div>
                <div>
                    <h2 className='profile-header'>About Me</h2>
                    <p>Greetings! This is Sri and I specialize in weddings photography, engagement photography, couple photography, family shoot, private parties, birthdays, portraits and more. My photos always tell a story, full of emotions and expressions. My clients are treated with individuality and uniqueness. Your story will show in each photo I take and you will love it.</p>
                    <p>I am a creative and artistic photographer. I love photography and try to learn something new every day. I create a variety of custom packages the nest suit your budget. I love capturing moments and giving their best memories to people.</p>
                    <p>Photography for me is not looking, it’s feeling. If you can’t feel what you’re looking at, then you’re never going to get others to feel anything when they look at your pictures. I enjoy what I do, and I would love to have a role in one of the most important days of your life. Allow me to shoot your event with confidence!!</p>
                    <p>Thank you for visiting MSV photography!</p>
                </div>

            </div>
        </>
    )
}