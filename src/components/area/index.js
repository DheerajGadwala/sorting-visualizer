import React from 'react';
import './style.css';
import {bubbleSort} from './sortingAlgorithms/bubbleSort.js';

const Area = (props)=>{

    const generateArea = ()=>{
        const ret = [];
        var i;
        for(i=0; i<props.sampleSize; i++){
            ret.push(<li key={i}>
                <div    className="bar"
                        id={i} 
                        length-value={props.sample[i]} 
                        style=
                        {{  height: props.sample[i], 
                            width: 400/props.sampleSize,
                            marginLeft: 200/props.sampleSize, 
                            marginRight: 200/props.sampleSize
                        }}>
                </div>
            </li>);
        }
        return ret;
    }

    const sort = ()=>{
        if(props.algo === "bubble"){
            bubbleSort(props);
        }
        else if(props.algo === "insertion"){
            console.log('insertion');
        }
        else if(props.algo === "merge"){
            console.log('merge');
        }
        else if(props.algo === "quick"){
            console.log('quick');
        }
    }

    return(
    <div className="areabody">
        <div className="area">
            <div className="startButtonDiv">
                <a href="#" className="startButton" onClick={sort}>START</a>
            </div>
            <ul className="bars">
                {generateArea()}
            </ul>
        </div>
    </div>
    );
}

export default Area;