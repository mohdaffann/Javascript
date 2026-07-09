/* 
A closure is when a function accesses outer functions variables 
Below is an example of lexical scope where displayName function access local variable of outer init() fn.

*/


// function init() {
//     let name = 'gorilla';
//     function displayName() {
//         console.log(name);
//     }
//     displayName();
// }

//init();

// function init() {
//     const name = 'godzilla';
//     function getName() {
//         console.log(name);

//     }
//     return getName;
// }
// let displayName = init();
// displayName()

/*
In above we returned the actual function instead of calling it inside the init 
so we only call init which also returns the inner functions output
*/

function outer() {
    let c = 0;
    function inc() {
        c++;
        console.log(c);

    }
    function dec() {
        c--;
        console.log(c);

    }
    function access() {
        return c;
    }
    return { inc, dec, access }
}

// let counter = outer();
// counter.inc();
// counter.inc();

// console.log(counter.access());
// console.log(counter.c);


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0
    )
}
// In above the var is only global scoped and all functions looped inside var refer to that single var
// so by the time loop ends var is 3 and all timeouts print 3 since all refer to one var
// With let each function inside it creates a  seperate block scope and dont share same variables
// so they orint 0 , 1 , 2 with let




