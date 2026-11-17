let nums = [ 1,2,3,4]
//output = [24,12,8,6]

//leetcode 238 , solve without division and in o(n)


const prefixPostfix = (nums)=>{
    let prefix=[]
    let postfix=[]

    for(let i = 0 ; i < nums.length ; i++){
        if(i === 0 ){
            prefix.push(1)
        }else{

            prefix.push((prefix[prefix.length-1])*nums[i-1]);
        }
    }

    for(let i = nums.length-1 ; i>=0 ;i-- ){

        if(i === nums.length-1)
            postfix.unshift(1);
        else{
            postfix.unshift(postfix[0]*nums[i+1]);
        }
    }

    const result =[]

    for(let i = 0 ; i < nums.length ; i++){
        result[i] = prefix[i]*postfix[i];
    }

    return result;
}

let ans = prefixPostfix(nums)
console.log(ans)
// o(3n)


const optimalSoln = (nums)=>{
    let prefix = 1;
    let postfix = 1;
    let result=[1];

    //prefix calc
    for( let i = 1 ; i < nums.length ; i++){
        result[i] = prefix*nums[i-1];
        prefix = prefix*nums[i-1];
    }

    //postfix calc
    for(let i = nums.length-2 ; i>=0 ; i--){
        result[i] = result[i]*postfix*nums[i+1];
        postfix = postfix*nums[i+1];
    }

    return result
}

console.log("optiomal soln is ",optimalSoln(nums));