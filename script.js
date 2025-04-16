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
console.log(name,age = 25, rest);








