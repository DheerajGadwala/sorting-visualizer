export const bubbleSort = (props)=>{


    // currently selected numbers colour to orange
    const innerTimeout = (i, j, delay, set)=>{
        setTimeout(() => {
            document.querySelectorAll('.selectedBar').forEach(element=>{
                element.classList.remove('selectedBar');
            });
            document.getElementById((j-1)).classList.add('selectedBar');
            document.getElementById((j)).classList.add('selectedBar');
            if(set[j-1]>set[j]){
                var temp = set[j];
                set[j] = set[j-1];
                set[j-1] = temp;
                props.setSample([...set]);
            }
        }, delay+delayChange);
    }

    // sorted numbers colour changed to grey
    const outerTimeout = (i, delay)=>{
        setTimeout(()=>{
            document.getElementById((i-1)).classList.add('sortedBar');
        }, delay);
    }

    var set = [...props.sample]
    var i;
    var j;
    var delay = 0;
    const delayChange = 1000/props.sampleSize;
    props.setSorting(true);
    for(i=props.sampleSize; i>0; i--){
        for(j=1; j<i; j++){
            innerTimeout(i, j, delay, set);
            delay+=delayChange;
        }
        outerTimeout(i, delay);
    }
    (function(delay){
        setTimeout(()=>{
            document.querySelectorAll('.selectedBar').forEach(element=>{
                element.classList.remove('selectedBar');
            });
            props.setSorting(false);
            props.setSorted(true);
        }, delay);})(delay);
    
}