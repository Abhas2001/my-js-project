// var is function scoped which means it is available anywhere inside the function
//var can be redeclared and reassigned within the same scope
var p =900;
function Testvar(){
   console.log(p);
    if(true){
        var x =20
        console.log(x);
    }
    console.log(x);

    if(x==20){
        console.log(x);
    }
}

Testvar();
//As you can see above the var is function scoped as you can access x anywhere in the function

var z = 90;
var z = 110;//see above it can be redeclare
   z = 120 // see it can re-assigned
console.log(z); 

//Hoisting for var


console.log(y);//this will print undefined what exactly is happening here is var x this initialization goes above but declaration y=30 comes after console.log
var y = 30;

//above function in backside works like below

// var z 
// console.log(z); this prints udefined
// z=40;
// console.log(z); this prints 40


//let is block scoped hoisted and can be reassigned but not redeclared

function Testlet(){

    if(true){
        let a = 40;
        console.log(a); //prints 40
    }
    // console.log(a); //variable.js:44 Uncaught ReferenceError: a is not defined because let is block scoped it can only be accessed inside {}
}

Testlet();


let ho = 20;
ho=00;// reassignment is possible in let
console.log(ho);

// let ho = 40;//this throws error because you cannot redeclare in let


//CONST


// Block-scoped like let.

// Must be initialized at the time of declaration.

// Cannot be reassigned or redeclared.

// However, if const holds an object or array, its contents can still be mutated.



const a = 10;
// a = 20; ❌ TypeError

const obj = { name: 'Abhas' };
obj.name = 'Kumar'; // ✅ allowed
console.log(obj); // { name: 'Kumar' }


//print the output
// Q1:function outer() {   
//     var x = 10;
  
//     function inner() {
//       console.log(x); // (1)
//       var x = 20;
//       console.log(x); // (2)
//     }
  
//     inner();
//   }
  
//   outer();

// Q2:
// {
//     console.log(a); // (1)
//     let a = 5;
//     console.log(a); // (2)
//   }


//Q
// for (var i = 0; i < 3; i++) {
//     (function (j) {
//       setTimeout(() => {
//         console.log(j);  // Now j is captured
//       }, 100);
//     })(i);
//   }
//   🔹 Question 6: let in a loop + closure
//   js
//   Copy
//   Edit
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 100);
//   }