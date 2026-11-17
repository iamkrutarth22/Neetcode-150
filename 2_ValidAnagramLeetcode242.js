let s1= 'cat' 
let s2= 'rat'


//optimal approach is keeping  a freq array with 26 elements same as total
//number of alphabets , for strings to be anagram it should have a freq 0
// when adding freq of string 1 and canceling char count of string 2
// so for a valid anagram freq array should be 0 for all elements

const checkValidAnagram=(s1 , s2)=>{
    
    let freq = new Array(26).fill(0);
    if(s1.length != s2.length)
        return false;

    for(let i = 0 ; i < s1.length ; i++){
        freq[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }


    for(let i =0 ; i < freq.length ; i++){
        if(freq[i] != 0)
            return false
    }

    return true;
}

console.log("valid anagram ",checkValidAnagram(s1,s2))
