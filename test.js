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

function showDuplicate(name){
   let newName = name.split(" ")
   let obj = {}
   let newArray = []
   for (let i = 0; i < newName.length; i++) {
     if(obj[newName[i]]){
        obj[newName[i]] += 1
     } else {
        obj[newName[i]] = 1
     }
   }

   for (const key in obj) {
     newArray.push(key)
   }

   console.log(obj);
   console.log(newArray.join(" "));
   
}

showDuplicate("Cooper is good boy Cooper good")