export const heapSort = (props)=>{

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

    async function heapify(set, n, i){
        var largest = i;
        var l = 2*i+1;
        var r = 2*i+2;

        if(l<n && set[largest]<set[l]){
            document.getElementById(largest).classList.add('selectedBar');
            document.getElementById(l).classList.add('selectedBar');
            await helper(delay, "visualize");
            document.getElementById(largest).classList.remove('selectedBar');
            document.getElementById(l).classList.remove('selectedBar');
            largest = l;
        }
        if(r<n && set[largest]<set[r]){
            document.getElementById(largest).classList.add('selectedBar');
            document.getElementById(r).classList.add('selectedBar');
            await helper(delay, "visualize");
            document.getElementById(largest).classList.remove('selectedBar');
            document.getElementById(r).classList.remove('selectedBar');
            largest = r;
        }
        if(largest != i){
            document.getElementById(i).classList.add('blueBar');
            document.getElementById(largest).classList.add('blueBar');
            await helper(delay, "visualize");
            var temp = set[largest];
            set[largest] = set[i];
            set[i] = temp;
            props.setSample([...set]);
            document.getElementById(largest).classList.remove('blueBar');
            document.getElementById(i).classList.remove('blueBar');
            await heapify(set, n, largest); 
        }
    }

    async function sort(set, length){

        //building maxHeap
        for(var i=Math.floor(length/2)-1; i>-1; i--){
            await heapify(set, length, i);
        }

        //extract elements
        for(var i=length-1; i>0; i--){
            var temp = set[0];
            set[0] = set[i];
            set[i] = temp;
            props.setSample([...set]);
            document.getElementById(i).classList.add('sortedBar');
            await helper(delay, "visualize");
            await heapify(set, i, 0);
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