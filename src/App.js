import React from 'react';
import Navbar from './components/navbar';
import Area from './components/area';

function App() {
    const [algo, setAlgo] = React.useState('bubble');
    const [sampleSize, setSampleSize] = React.useState(20);
    const [sample, setSample] = React.useState([20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]);
    const [sorting, setSorting] = React.useState(false);
    const [sorted, setSorted] = React.useState(false);

    return (
    <>
        <div>
            <Navbar
            algo={algo}
            setAlgo={setAlgo}
            setSampleSize={setSampleSize}
            setSample={setSample}
            setSorted={setSorted}
            />
        </div>
        <div>
            <Area
            algo={algo}
            sampleSize={sampleSize}
            sample={sample}
            setSample={setSample}
            setSorting={setSorting}
            setSorted={setSorted}
            />
        </div>
    </>
    );
}

export default App;