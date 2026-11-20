let input = [100, 4, 200, 1, 3, 2];
let input2 = [0, 5, 3, -1, 200, -1, 0, 2, 7, 4];

const soln1 = (input) => {
  if (input.length === 1) return 1;

  let temp = input.sort((a,b)=> a-b);

  let LCS = 1;
  let CCS = 1;

  console.log(temp);

  for (let i = 1; i < temp.length; i++) {
    if (temp[i] - temp[i - 1] === 1) {
      CCS++;
    } else {
      CCS = 1;
    }

    if (CCS > LCS) LCS = CCS;
  }

  return LCS;
};

console.log("input ans ", soln1(input));
console.log("input2 ans ",soln1(input2) )


const optimalSoln =(input)=>{
    let hashset = new Set();

    let LCS = 1;
    let CCS = 1;
    for(let i = 0 ; i < input.length ; i++){
        hashset.add(input[i]);
    }


    for(let i = 0 ; i < input.length ; i++){
        //check if start

        if(hashset.has(input[i]-1)){
            continue;
        }

    
        while(hashset.has(input[i]+CCS)){
            CCS++;
        }

        if(CCS > LCS){
            LCS = CCS
        }
        CCS = 1
    }
    

    return LCS;
}

console.log("optimal soln ",optimalSoln(input2))