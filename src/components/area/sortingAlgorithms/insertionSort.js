export const insertionSort = (props)=>{

    const helper = (set, i, j, delay, pos, newElement, type)=>{
        if(type==="push"){
            return new Promise(resolve=>{setTimeout(()=>{
                console.log('pushElements', i, j, newElement);
                set[j] = set[j-1];
                props.setSample([...set]);
                console.log(set);
                resolve();
            }, delay);});
        }else if(type==="insert"){
            return new Promise(resolve=>{setTimeout(()=>{
                console.log('insertElements', i, j, pos, newElement);
                set[pos] = newElement;
                props.setSample([...set]);
                console.log(set);
                resolve();
            }, delay);});
        }
    }
    
    async function main(){
        var set = [...props.sample]
        var i, j;
        var delay=0;
        const delayChange = 1000/props.sampleSize;
        props.setSorting(true);
        console.log(props.sample);
        for(i=1; i<props.sampleSize; i++){
            var newElement=set[i];
            var pos=i;
            for(j=i; j>0; j--){
                if(set[j-1]>newElement){
                    await helper(set, i, j, delayChange, pos, newElement, "push");
                    pos-=1;
                    delay+=delayChange;
                }else{
                    break;
                }
            }
            await helper(set, i, j, delayChange, pos, newElement, "insert");
            delay+=delayChange;
        }
    }
main();
}