import React, {useEffect, useState} from 'react';
import Navbar from './components/navbar';
import Area from './components/area';

function App() {
    const [algo, setAlgo] = React.useState('bubble');

    return (
    <>
        <div>
            <Navbar
            setAlgo={setAlgo}
            />
        </div>
        <div>
            <Area
            algo={algo}
            />
        </div>
    </>
    );
}

export default App;