function abc(){
    console.log(a,b,c);
    
    var a = 10
    let b = 20
    const c = 30
}

// abc();

let num = [1,2,3,4,5]

let reducedNum = num.reduce((acc,cur,index) => {
    return acc + cur
},0)

//console.log(reducedNum);

const words = ['Hello', 'world'];

const sentence = words.reduce((acc, curr) => acc + ' ' + curr);

//console.log(typeof sentence); // Output: "Hello world"




const numbers = [10];

// 'b' is not provided by the array, so it defaults to 20.


const [a, b = 20] = numbers;

// console.log(a); // 10
// console.log(b); // 20

let person = {
    name: "Cooper",
    age: 27,
    section: "howatt",
    class: "gloot"
}

let { name, age, ...rest} = person
//console.log(name,age = 25, rest);


let user = {
    name: "Cooper",
    getname(){
        let name = "Rakesh Cooper"
        console.log(this.name);

        getnewName = () => {
            let name = "Rakesh Cooper Rocks"
            console.log(this);
        }

        getnewName()
        
    },

   
}

//user.getname()

let number = [1,5,10,45,85,2,9]
let largest = number[0]

for (let i = 0; i < number.length; i++) {
    if(number[i] > largest){
        largest = number[i]
    }    
}

console.log(largest);

console.log("test");

let maximumNum = number.reduce((max,cur) => {
    if(cur > max){
        return cur
    }
    return max
})

//console.log(maximumNum);


function showDuplicatecount(name){
    let newName = name.split(" ")
    //console.log(newName);
    let obj = {}
    for (let i = 0; i < newName.length; i++) {
      //  obj[newName[i]] = (obj[newName[i]] || 0) + 1
      if (obj[newName[i]]) {
        obj[newName[i]] += 1;
      } else {
        obj[newName[i]] = 1;
      }
    
    }
    console.log(obj);

    let newArr = []
    for (const value in obj) {
        if(obj[value] > 1){
            newArr.push(value)
            console.log(value+":"+ obj[value]);
        }
        
        }

        console.log(newArr.join(" "));
        
        
}
//showDuplicatecount("Cooper is good boy Cooper good")


//let dActivebtn = document.querySelector(".deactive")
let clickedCount = 0

function handleClick(){
    clickedCount += 1
    console.log(clickedCount); 
     if(clickedCount == 3){
        dActivebtn.removeEventListener("click",handleClick)
        dActivebtn.disabled = true;
        dActivebtn.style.cursor = "none"
        console.log("button Deactivated");        
       }
}
//dActivebtn.addEventListener("click",handleClick)

let max = 0
console.log(max);

let n = [[5,1],[8,90],[588,9]]

let largeNum = -1

// for (const inner of n) {
//     for (const innerValue of inner) {
//         if (largeNum < innerValue) {
//             largeNum = innerValue
//         }
//     }
// }

const nestedArray = [[3, 5], [7, 2, 9], [1, 4]];
for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
        let innerValue = nestedArray[i][j]
         if (largeNum < innerValue) {
             largeNum = innerValue
         }
    }
}
//console.log(flattenArray);


//flattenArrays(nestedArray)
function flattenArrays(nArr){
    let flattenArray = []
    for (let i = 0; i < nArr.length; i++) {
        for (let j = 0; j < nArr[i].length; j++) {
            let innerValue = nArr[i][j]
            flattenArray.push(innerValue)
        }
    }
    console.log(flattenArray);
}

const newnestedArray = [1, [2, [3, [4, 5]]], 6];
let newFlattenArr = newnestedArray.flat(3)
//console.log(newFlattenArr);

let newFlattenedArray = []
function flatAnyDimensionalArray(nestedArray){
    for (const item of nestedArray) {
        if(Array.isArray(item)){
            flatAnyDimensionalArray(item)
        } else {
            newFlattenedArray.push(item)
        }
    }
}

//flatAnyDimensionalArray(newFlattenedArray)
//console.log("original : "+newFlattenArr);

// for (let i = newFlattenArr.length - 1; i >= 0  ; i--) {
//     console.log(newFlattenArr[i]);
// }

//Given the array below, find the minimum and maximum number.
const newArr = [8, 3, 15, 1, 22, 7, 10];
function findMinandMax(arr){
    let min = newArr[0]
    let max = newArr[0]
    for (const Num of arr) {
        if(min > Num){
            min = Num
        }

        if(max < Num){
            max = Num
        }
    }
    console.log(`Min: ${min}`);
    console.log(`Max: ${max}`);
    
}
//findMinandMax(newArr)

// isPalindrome

function isPalindrome(word){
    return word === word.split("").reverse().join("")
}

// console.log(isPalindrome("madam"),       
// isPalindrome("hello"),     
// isPalindrome("racecar"),     
// isPalindrome("palindrome")  );


let RNarr = [1, 2, 3, 4, 5]
let RotaredArr = []
let lastItem
let firstItem

function forwardRotateArray(arr, r){
    if(r > 0){  
        r = r % arr.length    
        for (let i = 0; i < r; i++) {
            lastItem = arr[arr.length - 1]        
            // arr.splice(arr.length - 1, 1)
            arr.pop()         
            arr.unshift(lastItem)                 
        }
    console.log(arr)
    }
}
//forwardRotateArray(RNarr,2)

function backwardRotateArray(arr, r){     
    if(r > 0){
        r = r % arr.length    
        for (let i = 0; i < r; i++) {
            firstItem = arr[0]
            arr.shift()
            arr.push(firstItem)
        }
    }
    console.log(arr);
}
//backwardRotateArray(RNarr, 3)
 //console.log(RNarr);

 //find the Intersection of two array
function intersectionArray(){
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [4, 5, 6, 7, 8];
    let intersectedArray = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
           if(arr1[i] == arr2[j]){
            intersectedArray.push(arr1[i])
            }
        }
    }
    console.log(intersectedArray);
}
//intersectionArray()

function intersectionArray2(){
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [4, 5, 6, 7, 8];
    let intersectedArray = 
    arr1.filter((ele,) => {
        return arr2.includes(ele)
    })

    console.log(intersectedArray);
    
}

//intersectionArray2()

function removeduplinfil(){
    let arr = [1, 2, 3, 2, 4, 5, 5, 6]
    let intersectedArr = arr.filter((item,index,self) => {
        if(self.indexOf(item) === index){
            return item
        }
    })
    console.log(intersectedArr);
    
}
//removeduplinfil()

function findOddorEven(){
    let arr = [10, 3, 7, 2, 8, 9, 12]
    let even = []
    let odd = []

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0){
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }
    console.log(`Even Numbers: [${even}]`);
    console.log(`Odd Numbers: [${odd}]`);
    
    
}

//findOddorEven()

function sumPair(){
    let arr = [1, 2, 3, 4, 5, 6]
    let targetSum = 7
    let sumpairarr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === targetSum){
                sumpairarr.push([arr[i],arr[j]])
            }
        }
    }
    console.log(sumpairarr);
    
}

//sumPair()

let arr1 = [3,4]
let arr2 = [3,4]


// console.log(sumpairarr);
//     const uniqueNumbers = [...new Set(sumpairarr.flat())];
//     console.log(uniqueNumbers);


// find the factorial of the number

function findFactorialNum(n){
    if(n < 0) return undefined
    if(n === 0 || n === 1 ) return 1;
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i
    }
    return result
}

//console.log(findFactorialNum(10));

function findFactorialNumRecursion(n){
    if(n < 0) return undefined
    if(n === 0 || n === 1 ) return 1;
    return n * findFactorialNumRecursion(n - 1)
}

//console.log(findFactorialNumRecursion(10));
// let value = 10
// const obj = {
//     value: 10,
//     getValue: () => {
//         return this.value;
//       },
//     obj2:{
//         value : 10,
//         // getValue: () => {
//         //     return this.value;
//         //   }
//     }
//   };
//   console.log(obj.getValue());    

this.value = 100;

const obj = {
  value: 10,
  getValue: () => {
    console.log(this); // In browser, logs `window`
    return this.value;
  }
};

//console.log(obj.getValue()); // 💡 In browser: 100 (from global `value`)


function test(){
    for (var i = 0; i < 3; i++) { 
       // setTimeout(() => console.log(i), 0);
        // (function inner(j){
        //     setTimeout(() => console.log(j), 1000);
        // }(i)) 
        console.log(i);
        
    }
}

//test()

function scopetest(){
    {
        const x = 20
        console.log(x);
    }
    console.log(x);
}
//scopetest()




 










