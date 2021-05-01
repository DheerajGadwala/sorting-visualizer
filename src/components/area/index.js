import React, {useEffect} from 'react';
import './style.css';
import {bubbleSort} from './sortingAlgorithms/bubbleSort.js';
import {insertionSort} from './sortingAlgorithms/insertionSort.js';
import {mergeSort} from './sortingAlgorithms/mergeSort.js';
import {quickSort} from './sortingAlgorithms/quickSort.js';
import {selectionSort} from './sortingAlgorithms/selectionSort.js';
import {heapSort} from './sortingAlgorithms/heapSort.js';

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
                        {{  height: (props.sample[i]/props.barsGeneratedHeight*100)+"%", // rendering height as screen sizes changes || useful when view switches from portrait to landscape in mobile devices
                            width: 70/(2*props.sampleSize)+'vw',          // 70 is the width in bars class in viewports
                            marginLeft: 70/(4*props.sampleSize)+'vw', 
                            marginRight: 70/(4*props.sampleSize)+'vw'
                        }}>
                </div>
            </li>);
        }
        return ret;
    }

    const sort = ()=>{
        if(!props.sorting){
            if(props.algo === "bubble"){
                bubbleSort(props);
            }
            else if(props.algo === "insertion"){
                insertionSort(props);
            }
            else if(props.algo === "merge"){
                mergeSort(props);
            }
            else if(props.algo === "quick"){
                quickSort(props);
            }
            else if(props.algo === "selection"){
                selectionSort(props);
            }
            else if(props.algo === "heap"){
                heapSort(props);
            }
        }
    }

    return(
    <div className="areabody">
        <div className="area">
            <div className="startButtonDiv">
                <a className={`${props.sorting?'disabledStartButton':'startButton'}`} onClick={(sort)}>START</a>
            </div>
            <ul className="bars">
                {generateArea()}
            </ul>
        </div>
    </div>
    );
}

export default Area;