import React from 'react';
import Kids1 from '../assets/kids-1.webp';
import Kids2 from '../assets/kids-2.webp';
import Kids3 from '../assets/kids-3.webp';
import Kids4 from '../assets/kids-4.webp';
import Kids5 from '../assets/kids-5.webp';
import Kids6 from '../assets/kids-6.webp';
import './kids.css';
import { Work } from '../Work/work';

export const Kids=()=>{
    return(
        <>
        <Work />
        <div className='kids'>
            <div>
                <img src={Kids1} />
                <img src={Kids2} />
                <img src={Kids3} />

            </div>
            <div>
            <img src={Kids4} />
            <img src={Kids5} />
            <img src={Kids6} />
            </div>
        </div>
        </>
    )
}