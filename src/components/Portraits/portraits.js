import React from 'react';
import Port1 from '../assets/port-1.webp';
import Port2 from '../assets/port-2.webp';
import Port3 from '../assets/port-3.webp';
import Port4 from '../assets/port-4.webp';
import Port5 from '../assets/port-5.webp';
import Port6 from '../assets/port-6.webp';
import Port7 from '../assets/port-7.webp';
import './portraits.css';
import { Work } from '../Work/work';

export const Portraits=()=>{
    return(
        <>
        <Work />
        <div className='portraits'>
            <div>
                <img src={Port1} />
                <img src={Port2} />
                <img src={Port3} />
                <img src={Port4} />

            </div>
            <div>
            <img src={Port5} />
            <img src={Port6} />
            <img src={Port7} />
            </div>
        </div>
        </>
    )
}