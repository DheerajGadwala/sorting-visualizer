import React from 'react';
import './style.css'

const Navbar = (props) => {

    const [navItems, animateNavItems] = React.useState(0);

    const navSlide = () =>{
        const nav = document.querySelector('.nav-links');
        
        //Toggling Nav bar
        nav.classList.toggle('nav-active');
        //Animate links
        if(navItems===1){
            animateNavItems(0);
        }else{
            animateNavItems(1);
        }
    }

    const setSizeLocal = () =>{
        props.setSampleSize(document.getElementById('samplesize').value);
        randomize();
    } 

    const randomize = () =>{
        const size = document.getElementById('samplesize').value;
        const newSample = [];
        var i;
        for(i=0; i<size; i++){
            newSample.push(Math.floor(Math.random() * 2000));
        }
        props.setSample(newSample);
    }

    return (
        <>
            <div className="navbody">
                <nav>
                    <div className="logo">
                        <h4>Sorting Visualizer</h4>
                    </div>
                    <div className="slidercontainer">
                        <div className="slider">
                            <div>
                                Sample Size
                            </div>
                            <div>
                                <input type="range" min="10" max="200" id = "samplesize" onChange={setSizeLocal}/>
                            </div>
                        </div>
                        <div>
                            <a href="#" className="randomizeButton" onClick={randomize}>Randomize</a>
                        </div>
                    </div>
                    <ul className="nav-links">
                        <li navitems={navItems}><a href="#" onClick={()=>props.setAlgo('bubble')}>Bubble Sort</a></li>
                        <li navitems={navItems}><a href="#" onClick={()=>props.setAlgo('insertion')}>Insertion Sort</a></li> 
                        <li navitems={navItems}><a href="#" onClick={()=>props.setAlgo('merge')}>Merge Sort</a></li> 
                        <li navitems={navItems}><a href="#" onClick={()=>props.setAlgo('quick')}>Quick Sort</a></li>  
                    </ul>
                    <div className="burger" onClick={navSlide}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div> 
                </nav>
            </div>
        </>
    )
}

export default Navbar
