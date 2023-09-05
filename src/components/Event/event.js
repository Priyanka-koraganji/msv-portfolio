import React from 'react';
import './event.css';
import { NavBar } from '../Navbar/navBar';
import EventImg from '../assets/event-image.jpeg';
import Dinner from '../assets/dinner.png';
import Location from '../assets/location.png';
import Time from '../assets/time.png';

export const Event = () => {
    return (
        <>
            <div className="event-page">
                <div className="event-images">
                    <img src={EventImg} width="100%" height="50%" alt="event image" />
                </div>
                <div className='event-content'>
                    <h1 className='event-title'>Sumanth & Prasanna</h1>
                    <h4 className='event-time'>Wedding Live 11:45 PM IST onwards</h4>
                    <h4><a href='https://saicharanwithswathi.blogspot.com/'> Live Event</a> </h4>
                    {/* <iframe src="https://saicharanwithswathi.blogspot.com/" width="100%" height="600px"></iframe> */}
                    {/* <img className="event-images" src={EventImage} width="80%" alt="event live stream image" ></img> */}
                    <div className="event-details">
                        <div>
                            <img src={Time} width="50px" height="50px" alt="muhurtham time" />
                            <h3>Sumuhurtham</h3>
                            <p>Event Time!!!!</p>
                        </div>
                        <div>
                            <img src={Location} width="50px" height="50px" alt="location" />
                            <h3>Venue</h3>
                            <p>Event Location!!!</p>
                        </div>
                        <div>
                            <img src={Dinner} width="50px" height="50px" alt="dinner time" />
                            <h3>Dinner</h3>
                            <p>Dinner Time!!!</p>
                        </div>
                    </div>
                    <h2>Your Presence and Blessings are the Best Present</h2>
                    <div className="footer">
                        <h3>Let's Talk</h3>
                        <a href="maniphotography90@gmail.com">maniphotography90@gmail.com</a>
                    </div>
                </div>

            </div>
        </>

    )
}