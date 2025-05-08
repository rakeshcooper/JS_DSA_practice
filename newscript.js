// for call
function call(){
    let obj = { name: "Cooper" }
    function display(age, profession){
        return "hello " + this.name + " is " + age + " is an " + profession
    }
    console.log(display.call(obj,27,"frontend developer and astrologer"));
    console.log(display.call(obj,57,"frontend developer and astrologer"));
}
//call()

// for apply
function apply(){
    let obj = { name: "Cooper" }
    function display(age,profession){
        return "hello " + this.name + " is " + age + " is an " + profession
    }
    console.log(display.apply(obj,[27,"frontend developer and astrologer"]));
    console.log(display.apply(obj,[57,"frontend developer and astrologer"]));
}
//apply()

// for bind
function bind(){
    let obj = { name: "Cooper" }
    function display(age,profession){
        return "hello " + this.name + " is " + age + " is an " + profession
    }
    //let funcbind = display.bind(obj)
   // console.log(funcbind(27,"frontend developer and astrologer"));
    //console.log(funcbind(57,"frontend developer and astrologer"));

    console.log(display.bind(obj,27));
    
}

bind()