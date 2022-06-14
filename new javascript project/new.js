// // // slice methode 
// // var a =["usman", "javed", "ahmad", "yousaf", "ali" , "abdul"]
// // var b = a.slice(-3,-1)
// // document.write(b)

// // splice methode 
// var a =["usman", "javed", "ahmad", "yousaf", "ali" , "abdul"]
// var b = a.splice(2,0,"name" ,"asif")
// document.write(b)

// // // // // var dayWork = "fri"
// // // // // if(dayWork === "sat" || dayWork ==="sun"){
// // // // //     alert("Yessss! this is last ")
// // // // // }else if(dayWork==="fri"){
// // // // //     alert("this is best day")
// // // // // }else {
// // // // //     alert("now")
// // // // // }

// // // // var dayWork = "tues"
// // // // switch(dayWork){
// // // //     case "sat":
// // // //     alert("this is last day")
// // // //     break
// // // //     case "mon":
// // // //     alert("this is first day")
// // // //     break
// // // //     case "fri":
// // // //         alert("this is best day")
// // // //         break
// // // //         default:
// // // //         alert("shoot me")

// // // // }


// // // // while loop>
// // // for(var a = 0 ; a<=10; a++){
// // //     alert("a")

// // // }
// // var i =o 
// // while(i<= 10){
// //     alert("i")
// //     i++
// // }



// Event


// function myFunction(x){
//   x.style.background = "red";           

  
// }

// function newFunction(x){
//   x.style.background = "blue";

// }


// Reading Field 
 
// function checkAddress(){
//    var val = document.getElementById('email')
// }

// function checkAddress(event) {
//     event.preventDefault()
// var val = document.getElementById('email').value;
// console.log(val,"value");
// if (val === "") {
// alert("Email address required.");
// }
// }

// var element;
// element  = document.all[s]

// console.log(element);v

// DOM 


// var element;
// element= document.getElementById("text").attributes[2].value
// console.log(element);
 


//  changing values 
// var element;

// element= document.getElementById("head").innerHTML = "<h1>yes bro</h1>"
// element= document.getElementById("head").innerHTML


// console.log(element);
   


// changing value by attributes




// forum validation 


function  checkForLastName(){
    if(document.getElementById("lastNameField").value.length ===0  ){
        alert("Please enter your last name ")
        return
    }
    if(document.getElementById("email").value.length ===0  ){
        alert("Please enter  Email ")
        return
    }

}

// let obj = {
//     name: "usman",
//     age: 21,
//     city:"jaranwala"
    
// }

localStorage.setItem("name","usman")
localStorage.setItem("name2","Usman javed")
// localStorage.clear();   
let name=localStorage.getItem("name")
console.log(name);
localStorage.removeItem("name2")


let arry = ["jaranwla","faisalabad","multan","lahore"]
localStorage.setItem("cities" , "arry")
