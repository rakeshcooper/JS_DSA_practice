function abc(){
    console.log(a,b,c);
    
    var a = 10
    let b = 20
    const c = 30
}

// abc();

let num = [1,2,3,4]

let reducedNum = num.reduce((acc,cur,index) => {
    return cur
},0)

console.log(reducedNum);







