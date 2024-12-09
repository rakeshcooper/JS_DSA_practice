

function isPalindrome(x){
    return x === +x.toString().split("").reverse().join("")
}


const result = isPalindrome(121)

console.log(result);
