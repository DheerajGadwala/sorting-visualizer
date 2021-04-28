import React from 'react';
import './style.css'

const Area = (props)=>{

    const generateArea = ()=>{
        const ret = [];
        props.sample.forEach(element=>{
            ret.push(<li>
                        <div    className="bar" 
                                length-value={element} 
                                style=
                                {{  height: element/10, 
                                    width: 400/props.sampleSize,
                                    marginLeft: 200/props.sampleSize, 
                                    marginRight: 200/props.sampleSize
                                }}>
                        </div>
                    </li>)
        });
        return ret;
    }

    return(
    <div className="areabody">
        <div className="area">
            <ul className="bars">
                {generateArea()}
            </ul>
        </div>
    </div>
    );
}

export default Area;