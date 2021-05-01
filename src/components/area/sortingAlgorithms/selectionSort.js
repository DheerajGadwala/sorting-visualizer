export const selectionSort = (props)=>{

    var delay=200/props.sampleSize;
    var cnt=0;
    const helper = (delay, type)=>{
        cnt+=1;
        if(type==="visualize"){
            return new Promise (resolve=>{
                setTimeout(()=>{

                    resolve();
                }, delay);
            });
        }
    }

    async function sort(set, length){
        
        for(var i=0; i<length; i++){
            var minIndex = i;
            document.getElementById(minIndex).classList.add('selectedBar');
            await helper(delay, "visualize");
            document.getElementById(minIndex).classList.remove('selectedBar');
            for(var j=i+1; j<length; j++){
                document.getElementById(j).classList.add('blueBar');
                await helper(delay, "visualize");
                document.getElementById(j).classList.remove('blueBar');
                if(set[minIndex]>set[j]){
                    minIndex=j;
                }
            }
            document.getElementById(minIndex).classList.add('selectedBar');
            await helper(10*delay, "visualize");
            document.getElementById(minIndex).classList.remove('selectedBar');
            var temp = set[minIndex];
            set[minIndex] = set[i];
            set[i] = temp;
            props.setSample([...set]);
            document.getElementById(i).classList.add('sortedBar');
            await helper(delay, "visualize");
        }
    }

    async function main(){
        props.setSorting(true);
        var set = [...props.sample];
        await sort(set, props.sampleSize);
        props.setSample([...set]);
        document.querySelectorAll('.bar').forEach(element=>{
            document.getElementById(element.id).classList.add('sortedBar');
        });
        props.setSorting(false);
        props.setSorted(true);
    }

    main();

}