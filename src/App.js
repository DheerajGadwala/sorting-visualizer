import React from 'react';
import Navbar from './components/navbar';
import Area from './components/area';

function App() {
    const [algo, setAlgo] = React.useState('bubble');
    const [sampleSize, setSampleSize] = React.useState(20);
    const [sample, setSample] = React.useState([187, 159, 126, 10, 240, 51, 99, 12, 30, 99, 96, 129, 34, 166, 35, 246, 101, 123, 64, 98]);
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