import React from 'react';
import './style.css'

const Area = (props)=>{

    return(
    <>
        <div className='container'>
            <p>{props.algo}</p>
            <p>{props.sampleSize}</p>
            <p>{props.sample}</p>
        </div>
    </>
    );
}

export default Area;