export const quickSort = (props)=>{

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

    async function partition(set, l, r){
        var pivot_index = l;
        var pivot_element = set[pivot_index];
        document.getElementById((pivot_index)).classList.add('selectedBar');
        while(l<r){
            while(l<set.length && set[l]<=pivot_element){
                document.getElementById(l).classList.add('workingBar');
                await helper(delay, "visualize");
                document.getElementById(l).classList.remove('workingBar');
                l+=1;
            }
            while(set[r]>pivot_element){
                document.getElementById(r).classList.add('workingBar');
                await helper(delay, "visualize");
                document.getElementById(r).classList.remove('workingBar');
                r-=1;
            }
            if(l<r){
                document.getElementById(l).classList.add('blueBar');
                document.getElementById(r).classList.add('blueBar');
                var temp = set[r];
                set[r] = set[l];
                set[l] = temp;
                props.setSample([...set]);
                await helper(delay, "visualize");
                document.getElementById(l).classList.remove('blueBar');
                document.getElementById(r).classList.remove('blueBar');
            }
        }
        var temp = set[pivot_index];
        set[pivot_index] = set[r];
        set[r] = temp;
        props.setSample([...set]);
        await helper(delay, "visualize");
        document.getElementById((pivot_index)).classList.remove('selectedBar');
        return r;
    }

    async function sort(set, l, r){
        if(l<r){
            var pivot = await partition(set, l, r);
            await sort(set, l, pivot-1);
            await sort(set, pivot+1, r);
            document.querySelectorAll('.bar').forEach(element=>{
                if(element.id<=pivot){
                    document.getElementById(element.id).classList.add('sortedBar');
                }
            });
        }
    }

    async function main(){
        var set = [...props.sample];
        await sort(set, 0, props.sampleSize-1);
        props.setSample([...set]);
        document.querySelectorAll('.bar').forEach(element=>{
            document.getElementById(element.id).classList.add('sortedBar');
        });
        document.querySelectorAll('.workingBar1').forEach(element=>{
            document.getElementById(element.id).classList.remove('workingBar1');
        });
        document.querySelectorAll('.workingBar2').forEach(element=>{
            document.getElementById(element.id).classList.remove('workingBar2');
        });
    }
    props.setSorting(true);
    main();
    props.setSorting(false);
    props.setSorted(true);
}