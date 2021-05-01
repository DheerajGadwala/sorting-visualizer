import React, {useEffect} from 'react';
import './style.css'

const Navbar = (props) => {

    useEffect(()=>{
        props.setBarsHeight(document.querySelector('.bars').offsetHeight-4);
    });

    window.addEventListener('resize', ()=>{
        props.setBarsHeight(document.querySelector('.bars').offsetHeight-4);
    });

    const randomize = () =>{
        props.setSorted(false);
        props.setBarsGeneratedHeight(props.barsHeight);
        document.querySelectorAll('.bar').forEach(element=>{
            element.classList.remove('sortedBar');
        });
        props.setSampleSize(document.getElementById('samplesize').value);
        const size = document.getElementById('samplesize').value;
        const newSample = [];
        var i;
        for(i=0; i<size; i++){
            newSample.push(Math.floor(Math.random() * props.barsHeight));
        }
        props.setSample([...newSample]);
    }

    window.addEventListener('load', randomize); //randomize sampleSet on load

    return (
        <>
            <div className="navbody">
                <nav className="navbar">
                    <div className="logo block1">
                        <h4>Sorting Visualizer</h4>
                    </div>
                    <div className="block2">
                        <div className="slidercontainer block2a">
                            <div className="slider">
                                <div>
                                    Sample Size
                                </div>
                                <div>
                                    <input type="range" min="20" max="200" defaultValue="20" id = "samplesize" onChange={randomize}/>
                                </div>
                            </div>
                            <div>
                                <a className="randomizeButton" onClick={randomize}>RANDOMIZE</a>
                            </div>
                        </div>
                        <div className="dropdownContainer block2b">
                            <select id="algo" onChange={()=>{props.setAlgo(document.getElementById('algo').value); document.getElementById('algo').blur();}}>
                                <option value="bubble">Bubble Sort</option>
                                <option value="insertion">Insertion Sort</option>
                                <option value="selection">Selection Sort</option>
                                <option value="merge">Merge Sort</option>
                                <option value="quick">Quick Sort</option>
                            </select>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
