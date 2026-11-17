//check if there are any duplicates in the array


//Leetcode 217 Easy
let nums=[1,4,3,5,4];

const checkDuplicate=( nums)=>{
    let hashSet = new Set();
    for( let i = 0 ; i < nums.length ; i++){
        if(hashSet.has(nums[i]))
            return true 
        else 
            hashSet.add(nums[i]);
    }
}

console.log("the solution is ",checkDuplicate(nums));