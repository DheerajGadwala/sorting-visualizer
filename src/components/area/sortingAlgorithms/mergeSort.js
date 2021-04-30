export const mergeSort = (props)=>{

    var delay=1000/props.sampleSize;
    var start=Date.now();
    const helper = (delay, type)=>{
        if(type==="visualize"){
            return new Promise (resolve=>{
                setTimeout(()=>{

                    resolve();
                }, delay);
            });
        }
    }

    async function merge(set, l, m, r){
        var l2 = m+1;
        if(set[m]<=set[l2]){
            return null;
        }
        document.querySelectorAll('.bar').forEach(element=>{
            if(element.id<=m){
                document.getElementById(element.id).classList.add('sortedBar');
            }
            else{
                document.getElementById(element.id).classList.remove('sortedBar');
            }
        });
        await helper();
        while(l<=m && l2<=r){
            if(set[l]<=set[l2]){
                l+=1;
            }
            else{
                var val = set[l2];
                var pos = l2;
                while(pos!=l){
                    set[pos] = set[pos-1];
                    pos-=1
                    props.setSample([...set]);
                    document.getElementById((pos)).classList.add('selectedBar');
                    document.getElementById((pos)).classList.remove('sortedBar');
                    await helper(delay, "visualize");
                    document.getElementById((pos)).classList.remove('selectedBar');
                }
                document.querySelectorAll('.bar').forEach(element=>{
                    if(element.id<=l2){
                        document.getElementById(element.id).classList.add('sortedBar');
                    }
                });
                set[l] = val;
                props.setSample([...set]);
                l+=1;
                m+=1;
                l2+=1;
            }
        }            
    }

    async function divide(set, l, r){
        if(l<r){
            var m = l + Math.floor((r-l)/2);
            document.getElementById((l)).classList.add('sortingHereBar');
            document.getElementById((m)).classList.add('sortingHereBar');
            await divide(set, l, m);
            await helper(delay, "visualize");
            document.getElementById((l)).classList.remove('sortingHereBar');
            document.getElementById((m)).classList.remove('sortingHereBar');
            document.getElementById((m+1)).classList.add('sortingHereBar');
            document.getElementById((r)).classList.add('sortingHereBar');
            await divide(set, m+1, r);
            await helper(delay, "visualize");
            document.getElementById((m+1)).classList.remove('sortingHereBar');
            document.getElementById((r)).classList.remove('sortingHereBar');
            console.log('add: ', l, m, Math.floor((Date.now()-start) / 1000));
            document.getElementById((l)).classList.add('blueBar');
            document.getElementById((r)).classList.add('blueBar');
            await merge(set, l, m, r);
            document.getElementById((l)).classList.remove('blueBar');
            document.getElementById((r)).classList.remove('blueBar');
            console.log('remove: ', l, m, Math.floor((Date.now()-start) / 1000));
        }
    }

    async function main(){
        var set = [...props.sample]
        await divide(set, 0, props.sampleSize-1);
        props.setSample(set);
        document.querySelectorAll('.bar').forEach(element=>{
            document.getElementById(element.id).classList.add('sortedBar');
        });
    }
    props.setSorting(true);
    main();
    props.setSorting(false);
    props.setSorted(true);
}