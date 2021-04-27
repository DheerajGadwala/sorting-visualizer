import React, {useEffect, useState} from 'react';
import Navbar from './components/navbar';
import Area from './components/area';

function App() {
    const [algo, setAlgo] = React.useState('bubble');
    const [sampleSize, setSampleSize] = React.useState(20);
    const [sample, setSample] = React.useState([0, 1, 2, 3, 4, 5]);

    return (
    <>
        <div>
            <Navbar
            setAlgo={setAlgo}
            setSampleSize={setSampleSize}
            setSample={setSample}
            />
        </div>
        <div>
            <Area
            algo={algo}
            sampleSize={sampleSize}
            sample={sample}
            />
        </div>
    </>
    );
}

export default App;