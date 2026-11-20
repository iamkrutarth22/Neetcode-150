let s = "A man, a Plan, a canal: Panama"
let p = 's   @s'
let k= "race a car"



console.log('test ',(/[a-zA-Z0-9]/.test('A')))

const soln = (s) => {

    let i = 0;
    let j = s.length -1

    while(i < j){
        if(!(/[a-zA-Z0-9]/.test(s[i]))){
            i++
            continue;
        }
        if(!(/[a-zA-Z0-9]/.test(s[j]))){
            j--
            continue;
        }

        if(s[i].toLowerCase() === s[j].toLowerCase()){
            i++;
            j--;
        }
        else{
            console.log(s[i],s[j])
            return false
        }
    }

    return true
}


console.log(soln(k))