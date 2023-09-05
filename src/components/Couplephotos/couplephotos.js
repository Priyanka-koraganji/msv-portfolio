import React from 'react';
import Couple1 from '../assets/couple-1.webp';
import Couple2 from '../assets/couple-2.webp';
import Couple3 from '../assets/couple-3.webp';
import Couple4 from '../assets/couple-4.webp';
import Couple5 from '../assets/couple-5.webp';
import Couple6 from '../assets/couple-6.webp';
import Couple7 from '../assets/couple-7.webp';
import Couple8 from '../assets/couple-8.webp';
import './couplephotos.css';
import { Work } from '../Work/work';

export const CouplePhotos=()=>{
    return(
        <>
        <Work />
        <div className='couple'>
            <div>
                <img src={Couple1} />
                <img src={Couple2} />
                <img src={Couple3} />
                <img src={Couple4} />

            </div>
            <div>
            <img src={Couple5} />
            <img src={Couple6} />
            <img src={Couple7} />
            <img src={Couple8} />
            </div>
        </div>
        </>
    )
}