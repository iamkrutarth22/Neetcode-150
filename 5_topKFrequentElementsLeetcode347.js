let input = [1,1,1,2,2,3] 
let k = 2 // no of frequent elements to find;
//expected output [1,2]

//approach is using hashmap with priority queue 

const getKey = (map,value)=>{

    for( const[a,b] of map){
        if(b === value)
            return a;
    }

    return undefined;
}

const KFreqEle = (input,k) => {
    let map = new Map();
    
    for(let i =0 ; i < input.length ; i++){
        map.set(input[i], isNaN(map.get(input[i]))?1:map.get(input[i])+1 );
    }


    let test = Array.from(map.values()).sort((a,b)=>b-a);
    let result =[]
    for(let i = 0 ; i < k ; i++){
        result.push(getKey(map,test[i]))
    }

    console.log(map );
    return result

    

}

console.log("result - ",KFreqEle(input,k));