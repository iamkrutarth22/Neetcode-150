//two sum

let nums = [15,7,2,11] 
let target = 15


let twoSum = (nums, target)=>{
    let map = new Map();

    for(let i = 0 ; i < nums.length ; i++){
        let k = target - nums[i];

        if(map.has(k) )
            return [i,map.get(k)];
        else
            map.set(nums[i],i);
    }
    return [-1,-1];
}


console.log(" two sum = ",twoSum(nums,target));