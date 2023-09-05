import React from 'react';
import { NavBar } from '../Navbar/navBar';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import './work.css';
import Portraits from '../assets/portrait-image.webp';
import Kids from '../assets/kids-image.webp';
import CouplePhotos from '../assets/couple-image.webp';



export const Work = () => {
    let navigate =useNavigate();
    let workTypes = [
        {
            name: "Portraits",
            image: Portraits,
            id: 1
        },
        {
            name: "Couple Photos",
            image: CouplePhotos,
            id: 2
        },
        {
            name: "Kids",
            image: Kids,
            id: 3
        }
    ];

    let clickHandler = (e) => {
        console.log(e.target.name);
        let name= e.target.name;
        if(name === "Portraits"){
            navigate('/portraits')
        }else if(name === "Couple Photos"){
            navigate('/couple')
        }else if(name === "Kids"){
            navigate('/kids')
        }
    }
    return (
        <>
            <NavBar />
            <div className='work-page'>
                {workTypes.map(type => (
                    <div onClick={(e) => clickHandler(e)} >
                        <img src={`${type.image}`} width="500px" name={type.name} />
                        <p>{type.name}</p>
                    </div>
                ))}
            </div>
            <Outlet />
        </>
    )
}