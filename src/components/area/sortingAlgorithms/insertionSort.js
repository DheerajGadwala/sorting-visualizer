export const insertionSort = (props)=>{

    var delay=200/props.sampleSize;

    const helper = (set, i, j, delay, pos, newElement, type)=>{
        if(type==="push"){
            return new Promise(resolve=>{
                setTimeout(()=>{
                    set[j] = set[j-1];
                    props.setSample([...set]);
                    resolve();
                }, delay);
            });
        }else if(type==="insert"){
            return new Promise(resolve=>{
                setTimeout(()=>{
                    set[pos] = newElement;
                    props.setSample([...set]);
                    resolve();
                }, delay);
            });
        }
    }
    
    async function main(){
        props.setSorting(true);
        var set = [...props.sample]
        var i, j;
        document.getElementById((0)).classList.add('sortedBar');
        for(i=1; i<props.sampleSize; i++){
            var newElement=set[i];
            var pos=i;
            document.getElementById((i)).classList.add('selectedBar');
            for(j=i; j>0; j--){
                document.getElementById((j-1)).classList.add('blueBar');
                if(set[j-1]>newElement){
                    await helper(set, i, j, delay, pos, newElement, "push");
                    pos-=1;
                    document.getElementById((j-1)).classList.remove('blueBar');
                    document.getElementById((j-1)).classList.remove('sortedBar');
                }else{
                    document.getElementById((j-1)).classList.remove('blueBar');
                    break;
                }
            }
            await helper(set, i, j, delay, pos, newElement, "insert");
            document.getElementById((i)).classList.remove('selectedBar');
            document.querySelectorAll('.bar').forEach(element=>{
                if(element.id<=i){
                    document.getElementById((element.id)).classList.add('sortedBar');
                }
            });
        }
        props.setSorting(false);
        props.setSorted(true);
    }

    main();

}