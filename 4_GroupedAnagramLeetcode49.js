let input = ["eat",'tea','tan','ate','nat','bat']

// step 1: approach is to sort each of the word in the array and store it to new array
//       temp = ['aet','aet, 'ant','aet','ant','abt']
// step 2: then iterate through the array and keep a set to keep track of inserted entries
// step 3: check similar words and the index if present in the inserted entries list 
333 

const groupAnagram = (input) => {
    const temp = input.map((item)=>item.split('').sort().join(''));

    let result =[]
    let indexInserted=new Set();

    for(let i = 0 ; i < temp.length ; i++){
        let k = temp[i];
        let list = []
        for(let j = i ; j < temp.length; j++){
            if(k === temp[j] && !indexInserted.has(j)){
                list.push(input[j]);
                indexInserted.add(j);
            }
        }

        if(list.length>0){
            result.push(list);
        }
    }

    return result;
}

let ans= groupAnagram(input)

console.log(ans)



const optimalSoln=( input )=>{
    let map = new Map();

    for( let i = 0 ; i < input.length ; i++){
        let temp = new Array(26).fill(0);
        for(let j = 0 ; j < input[i].length ; j++){
            temp[input[i].charCodeAt(j) - 'a'.charCodeAt(0)]++;
        }

        let s = temp.toString();

        if(map.has(s)){
           map.get(s).push(input[i]);
        }else{
            map.set(s,[input[i]]);
        }
    }

    let result=[]
    for( const[key,val] of map){
        result.push(val);
    }

    return result
}

const optml = optimalSoln(input)
console.log("optimal soln ",optml)

console.log('testt ','a'.charCodeAt(0));
console.log('reverse',String.fromCharCode(97));