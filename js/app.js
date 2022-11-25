// function twonum(num1,num2,callback){
//     console.log(num1,num2)
//     callback(num1,num2)
// }

// function nums (num1,num2){
//  console.log(num1+num2)
// }

// twonum(4,4,nums);

// methods
// function inside object

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }

// const person1 = {
//     firstName : "harsh",
//     age: 8,
//     about: personInfo
// }
// const person2 = {
//     firstName : "rehman",
//     age: 18,
//     about: personInfo
// }
// const person3 = {
//     firstName : "nitish",
//     age: 17,
//     about: personInfo
// }

// person1.about();
// person2.about();
// person3.about();

// function name(){
//     console.log("hello")
// }
// name.call();



function about(hobbies,music){
    console.log(this.firstName,this.age,hobbies,music)
}

const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "ali",
    age: 9,
    
}

const item = about.bind(user1,["sleeping","akcent"]);
item();
