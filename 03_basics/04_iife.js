// Immediately Invoked Function Expressions (IIFE)
// Used for immidiately executiong any object 
// as well as preventing our function or scope from * global scope variable pollution *


(function chai(){ // named IIFE
    console.log(`DB CONNECTED`);
})();
// to make above function iife -> we write whole function body in () and at last 
// we add () as we do for calling a function ,So it will execute just after declaring

//IIFE gets invoked when we do but it doesnot know when to stop the execution so
// we have to add ; at the end of funcion call as we did on line 8
// so that function on line 15 can be executed when prev function will stop executing

( () => {  // Unnamed IIFE
    console.log(`DB CONNECTED 2`);
} )();

( (name) => {  // simple IIFE  // have given parameters
    console.log(`DB CONNECTED 2 ${name}`);
} )('Sohan');