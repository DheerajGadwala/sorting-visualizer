import React from 'react';
import './style.css'

const Area = (props)=>{

    const generateArea = ()=>{
        const ret = [];
        var i;
        for(i=0; i<props.sampleSize; i++){
            ret.push(<li>
                <div    className="bar" 
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

    const sleep = (ms) =>{
        return new Promise(resolve=>setTimeout(resolve, ms));
    }

    const bubbleSort = ()=>{
        console.log(props.sample);
        var set = [...props.sample]
        var i;
        var j;
        var initialDelay = 0;
        for(i=props.sampleSize; i>0; i--){
            for(j=1; j<i; j++){
                (function(i, j, initialDelay, set){
                setTimeout(() => {  
                    console.log(initialDelay, i, j, set); 
                    if(set[j-1]>set[j]){
                        var temp = set[j];
                        set[j] = set[j-1];
                        set[j-1] = temp;
                        props.setSample([...set]);
                    }
                }, initialDelay+50);})(i, j, initialDelay, set);
            initialDelay+=50;
            }
        }
        setTimeout(() => {   
            console.log(props.sample);
        }, initialDelay+50);
        
    }

    return(
    <div className="areabody">
        <div className="area">
            <div className="startButtonDiv">
                <a href="#" className="startButton" onClick={bubbleSort}>START</a>
            </div>
            <ul className="bars">
                {generateArea()}
            </ul>
        </div>
    </div>
    );
}

export default Area;