export const bubbleSort = (props)=>{

    var delay=200/props.sampleSize;

    const helper = (delay, j, type)=>{
        if(type==="visualize"){
            return new Promise (resolve=>{
                setTimeout(()=>{
                    document.querySelectorAll('.selectedBar').forEach(element=>{
                        element.classList.remove('selectedBar');
                    });
                    document.getElementById((j-1)).classList.add('selectedBar');
                    document.getElementById((j)).classList.add('selectedBar');
                    resolve();
                }, delay);
            });
        }
    }

    async function main(){
        props.setSorting(true);
        var set = [...props.sample]
        var i, j;
        for(i=props.sampleSize; i>0; i--){
            var ind=true;
            for(j=1; j<i; j++){
                await helper(delay, j, "visualize");
                if(set[j-1]>set[j]){
                    var temp = set[j];
                    set[j] = set[j-1];
                    set[j-1] = temp;
                    props.setSample([...set]);
                    ind=false;
                }
            }
            document.getElementById((i-1)).classList.add('sortedBar');
            if(ind){
                document.querySelectorAll('.bar').forEach(element=>{
                    element.classList.add('sortedBar');
                });
                break;
            }
        }
        document.querySelectorAll('.selectedBar').forEach(element=>{
            element.classList.remove('selectedBar');
        });
        props.setSorting(false);
        props.setSorted(true);
    }
    
    main();
    
}