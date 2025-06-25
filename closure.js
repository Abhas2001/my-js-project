//CLOSURES


//basically what cosure is if you have two function one outer and one inner the variable declared inside outer function is remembered by the inner function also 
//example


function outer(){
    let count = 0;
  
    //see here whatever we write after return statement is the output when we call outer() as thats how a function works 
    return function inner(){
        console.log(count);
    }

}

// console.log(count);////And JavaScript does not look inside closures from the outside. hence it will throw error as count not defined
let newarr =  outer();//here we are already executing the outer function so what does newarr have here is the inner funciton because that is what we are returning

console.log(newarr());  //now when we call newarr() what actually we are calling is the inner function that is inner();
// and in the output we see 0 that means the variable count is remembered by the inner function 

//The variables of the outer scope (like name) are normally discarded after the function finishes.

//But when an inner function references those variables, JavaScript engine says:
//
//“Hold on — I can’t discard this outer scope yet, because someone (inner) still needs it.”
//
//So instead of clearing that memory, JS stores the name variable in the heap, not the stack.
//
//The closure (function) keeps a hidden reference to the outer variables it uses.


//return count++ this means it will return current count as 0 then increament;






for(var i=0;i<3;i++){
   
   function outer(j){

  
    setTimeout(()=>{
        console.log(j)
    },1000)

}
}


