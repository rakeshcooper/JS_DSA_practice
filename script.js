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
console.log(newFlattenArr);

 










