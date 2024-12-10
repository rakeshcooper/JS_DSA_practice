

function isPalindrome(x){
    return x === +x.toString().split("").reverse().join("")
}


const results = isPalindrome(121)

console.log(results);
