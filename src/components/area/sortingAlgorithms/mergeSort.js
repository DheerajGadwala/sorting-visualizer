export const mergeSort = (props)=>{

    var delay=1000/props.sampleSize;

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
        console.log('merge: ', set, l, m, r);
        var l2 = m+1;
        if(set[m]<=set[l2]){
            return null;
        }
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
                    await helper(delay, "visualize");
                }
                set[l] = val;
                l+=1;
                m+=1;
                l2+=1;
            }
        }
            
    }

    async function divide(set, l, r){
        console.log('divide: ', set, l, r);
        if(l<r){
            var m = l + Math.floor((r-l)/2)
            await divide(set, l, m);
            await divide(set, m+1, r);
            await merge(set, l, m, r);
        }
    }

    async function main(){
        var set = [...props.sample]
        await divide(set, 0, props.sampleSize-1);
        props.setSample(set);
    }
    props.setSorting(true);
    main();
    props.setSorting(false);
    props.setSorted(true);
}