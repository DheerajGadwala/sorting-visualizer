import React from 'react';
import './style.css'

const Area = (props)=>{
    return(
    <>
        <div className='container'>
            <span>
                {props.algo}
            </span>
        </div>
    </>
    );
}

export default Area;