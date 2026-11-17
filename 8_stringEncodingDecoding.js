// given a array of string and we need to write two function encode and decode 
// such that when we pass a array of strings it should return a encoded string 
// and when a encoded string is passed to decoded function it should return the
// same original string

let input = ['abc','ab','xy']


function encode(input){
    let encodedString=''
    let code = String.fromCharCode(297)
    for(let s of input){
        encodedString=encodedString+s+code
    }   

    return encodedString.slice(0,encodedString.length)
}

function decode(input){
    let decodedOutput=[]
    let code = String.fromCharCode(297)
    let word= ''
    for(let s of input){
        if(s === code){
            decodedOutput.push(word)
            word=''
        }else{
            word = word+s;
        }
    }

    return decodedOutput
}

let encodedString = encode(input);
let decodedString = decode(encodedString);

console.log(encodedString);
console.log(decodedString);