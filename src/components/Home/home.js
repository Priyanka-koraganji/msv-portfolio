import React from 'react';
import './home.css';
import { NavBar } from '../Navbar/navBar';
import Background from '../assets/background.webp';

export function Home() {
    return (
        <div className='home-page'>
            <NavBar />
            <div>
                {/* <img src={Background} alt="background" className='home-page-background' ></img> */}
                <h1 className='home-title'>Capturing the moments of today that will wow your heart tomorrow!!!</h1>
            </div>
        </div>
    )
}