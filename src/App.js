import React, {useLayoutEffect} from 'react';
import Navbar from './components/navbar';
import Area from './components/area';

function App() {
    const [algo, setAlgo] = React.useState('bubble');
    const [sampleSize, setSampleSize] = React.useState(20);
    const [sample, setSample] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [sorting, setSorting] = React.useState(false);
    const [sorted, setSorted] = React.useState(false);
    const [barsHeight, setBarsHeight] = React.useState(1);
    const [barsWidth, setBarsWidth] = React.useState(1);
    const [barsGeneratedHeight, setBarsGeneratedHeight] = React.useState(1);
    
    return (
    <>
        <div>
            <Navbar
            algo={algo}
            sample={sample}
            sorting={sorting}
            barsHeight={barsHeight}
            barsGeneratedHeight={barsGeneratedHeight}
            setAlgo={setAlgo}
            setSampleSize={setSampleSize}
            setSample={setSample}
            setSorted={setSorted}
            setBarsHeight={setBarsHeight}
            setBarsGeneratedHeight={setBarsGeneratedHeight}
            
            />
        </div>
        <div>
            <Area
            algo={algo}
            sampleSize={sampleSize}
            sample={sample}
            sorting={sorting}
            barsHeight={barsHeight}
            barsWidth={barsWidth}
            barsGeneratedHeight={barsGeneratedHeight}
            setSample={setSample}
            setSorting={setSorting}
            setSorted={setSorted}
            setBarsHeight={setBarsHeight}
            setBarsWidth={setBarsWidth}
            setBarsGeneratedHeight={setBarsGeneratedHeight}
            />
        </div>
    </>
    );
}

export default App;