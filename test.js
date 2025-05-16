//flattern array methods

function flattern(){
    let flatternArray = [1, [2, [3, [4, 5]]], 6]
    let newFlattenedArray = flatternArray.flat(3)
    console.log(newFlattenedArray);
}

//flattern()
let flatternArray = [1, [2, [3, [4, 5]]], 6]
let newFlattenedArray = []
function flatternMethodtwo(fa){
    // for (let i = 0; i < fa.length; i++) {
    //     if (Array.isArray(fa[i])) {
    //         flatternMethodtwo(fa[i])
    //     } else {
    //       newFlattenedArray.push(fa[i])
    //     }  
    // }

    for (const item of fa) {
        if (Array.isArray(item)) {
            flatternMethodtwo(item)
        } else {
          newFlattenedArray.push(item)
        }
    }
}

//flatternMethodtwo(flatternArray)
//console.log(newFlattenedArray);

//remove and count the duplicates

function showDuplicate(word){
  let newArray = word.split(" ")
  let obj = {}
  for (const items of newArray) {
    if(obj[items]){
      obj[items] += 1
    } else {
      obj[items] = 1
    }
  }

  console.log(obj);
  let removedArray = []
  for (const key in obj) {
    removedArray.push(key)
  }
  let newWord = removedArray.join(" ")
  console.log(newWord);

  let reversedArray = []
  for (let i = removedArray.length - 1; i >= 0 ; i--) {
    reversedArray.push(removedArray[i])
  }
  
  console.log(reversedArray.join(" "));

  for (const [key,value] of Object.entries(obj)) {
   if(value === 1){
    console.log(key,value);
   }
    
  }

  
  
  
}

//showDuplicate("Cooper is good boy Cooper good Cooper is good boy Walking")

// minimum and maximum in number
function minMaxNum(){
  let number = [25,65,18,22,45,95,36,18,100]
  let largestNum = number[0]
  let smallestNum = number[0]
  for (const num of number) {
    if(num > largestNum) largestNum = num
  }
  for (const num of number) {
    if(num < largestNum) smallestNum = num
  }
  console.log("largestNum : "+largestNum);
  console.log("smallestNum : "+smallestNum);
}

//minMaxNum()


// find largest num in nested array
function largeNumNested(){

   //this is for two dimensional array
  const nestedArraytwo = [[3, 5], [7, 2, 9], [1, 4]];
  let largeNum = 0
  for (let i = 0; i < nestedArraytwo.length; i++) {
    for (let j = 0; j < nestedArraytwo[i].length; j++) {
      let num = nestedArraytwo[i][j]
      if(num > largeNum) largeNum = num      
    }
  }
  console.log(largeNum);

  //this is for three dimensional array
  const nestedArraythree = [18, [22, [34, [84, 54]]], 76]
  let newArray = []
  let largestNum = 0
  function nestedArray(array){
    for (const item of array) {
      if(Array.isArray(item)){
        nestedArray(item)
      } else {
        newArray.push(item)
      }
    }
  }
  nestedArray(nestedArraythree)
  for (const num of newArray) {
    if(num > largestNum) largestNum = num
  }
  console.log(largestNum);
}

//largeNumNested()


function findIntersection(){
  // let arr1 = [1, 2, 3, 4, 5];
  // let arr2 = [4, 5, 6, 7, 8];

  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [4, 4, 5, 5, 6];
  let intersectedArray = []
  for (const num1 of arr1) {
    for (const num2 of arr2) {
      if(num1 === num2) intersectedArray.push(num1)
    }
  }
  let set = new Set(intersectedArray)
  console.log([...set]);
  
}

findIntersection()