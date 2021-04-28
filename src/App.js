import React from 'react';
import Navbar from './components/navbar';
import Area from './components/area';

function App() {
    const [algo, setAlgo] = React.useState('bubble');
    const [sampleSize, setSampleSize] = React.useState(20);
    const [sample, setSample] = React.useState([20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);

    return (
    <>
        <div>
            <Navbar
            algo={algo}
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
            setSample={setSample}
            />
        </div>
    </>
    );
}

export default App;