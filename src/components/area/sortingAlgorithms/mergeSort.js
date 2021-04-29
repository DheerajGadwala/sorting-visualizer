export const mergeSort = (props)=>{

    var delay=1000/props.sampleSize;

    const helper = (delay, index, type)=>{
        if(type==="add"){
            return new Promise(resolve=>{
                setTimeout(()=>{
                    document.getElementById(index).classList.add('sortedBar');
                }, delay);
            });
        }
    }

    const merge = (left, right, leftIndices, rightIndices)=>{
        var comb = [];
        var indices = [];
        var length = left.length+right.length;
        var i, j;
        j = Math.min(leftIndices);
        console.log('merge-values', left, right);
        console.log('merge-indices', leftIndices, rightIndices);
        for(i=0; i<length; i++){
            console.log('before-values: ', comb);
            console.log('before-indices: ', indices);
            if(left.length!=0 && right.length!=0){
                if(left[0]<right[0]){
                    comb.push(left.splice(0, 1)[0]);
                    indices.push(leftIndices.splice(0, 1)[0]);
                }
                else{
                    comb.push(right.splice(0, 1)[0]);
                    indices.push(rightIndices.splice(0, 1)[0]);
                }
            }
            else if(left.length===0){
                comb.push(right.splice(0, 1)[0]);
                indices.push(rightIndices.splice(0, 1)[0]);
            }
            else if(right.length===0){
                comb.push(left.splice(0, 1)[0]);
                indices.push(leftIndices.splice(0, 1)[0]);
            }
            //await helper(delay, j, )
            console.log('after-values: ', comb);
            console.log('after-indices: ', indices);
        }
        return [comb, indices];
    }

    const divide = (set, indices)=>{
        if(set.length===1){
            return [set, indices];
        }
        var x = Math.floor(set.length/2);
        var leftRet = divide(set.slice(0, x), indices.slice(0, x));
        var rightRet = divide(set.slice(x, set.length), indices.slice(x, set.length));
        var combRet = merge([...leftRet[0]], [...rightRet[0]], [...leftRet[1]], [...rightRet[1]]);
        console.log('divide-values: ', leftRet[0], rightRet[0], combRet[0]);
        console.log('divide-indices: ', leftRet[1], rightRet[1], combRet[1]);
        return combRet;
    }

    async function main(){
        var indices = [];
        for(var i=0; i<props.sampleSize; i++){
            indices.push(i);
        }
        var set = [...props.sample]
        var i, j;
        console.log(set, indices);
        var ret = divide(set, indices);
        console.log(ret[0], ret[1]);
        props.setSample(ret[0]);
    }
    props.setSorting(true);
    main();
    props.setSorting(false);
    props.setSorted(true);
}