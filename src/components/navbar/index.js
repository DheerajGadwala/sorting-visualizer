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
    return (
        <>
            <nav>
                <div className="logo">
                    <h4>Sorting Visualizer</h4>
                </div>
                <ul className="nav-links">
                    <li navitems={navItems}><a href="#" onClick={()=>props.setAlgo('bubble')}>Bubble Sort</a></li>
                    <div className="bar1"></div>
                    <li navitems={navItems}><a href="#" onClick={()=>props.setAlgo('insertion')}>Insertion Sort</a></li> 
                    <div className="bar2"></div>
                    <li navitems={navItems}><a href="#" onClick={()=>props.setAlgo('merge')}>Merge Sort</a></li> 
                    <div className="bar3"></div>
                    <li navitems={navItems}><a href="#" onClick={()=>props.setAlgo('quick')}>Quick Sort</a></li>  
                </ul>
                <div className="burger" onClick={navSlide}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div> 
            </nav>
        </>
    )
}

export default Navbar
