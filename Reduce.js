let arr = [1, 2, 3, 4, 5, 6];

const res = arr.reduce((acc, curr) => {
    return acc + curr
}, 0)

//console.log(res);

// WHat reduce does is it takes an array , and inside it is a callback fn with two values , accumulator and a curr val
/* 
 the value after the callback ends is the initial value and it becomes the accumulator , curret val is the 
 current element of the array 

 Basically accumulator is the value that holds on b/w the callbucks
*/

let arr1 = [1, 2, 3];
const res1 = arr1.reduce((acc, curr) => {
    return acc * curr
})
//console.log(res1);
/*
  Without an initial value what happens is the accumulator takes first element as initial value and starts
  operations with second element:
  acc = 1;
  now curr = 2 acc = 1 res = 3
  curr = 3 , acc = 3 res = 6
*/

//NOTE : the problem with no initial value is if array is empty then reduce throws ReferenceError

let userData = [
    { age: 20, name: 'Affan' },
    { age: 21, name: 'Akash' },
    { age: 23, name: 'John' },
    { age: 21, name: 'Surye' },
    { age: 20, name: 'Punit' }
];

const group = userData.reduce((acc, curr) => {
    if (!acc[curr.age]) {
        acc[curr.age] = []
    }
    acc[curr.age].push(curr.name);
    return acc
}, {})

//console.log(group);

/* 
 The initial value we pass will be also the datastructure of the result variable like above

 so the acc is {}
 we check if any key is set in acc ie {} 
 if no then set the age as key and assign it empty array ie acc[age] = []; this looks like {21 : []}

 Then we push the names to respective age by acc[curr.age].push(curr.name) looks like {21 : ['Akash']}

 So then after we return this whole object so that the next callback could have it 

 And ninally grouoped ie the result variable holds objects of ages and their respective names 

*/

const result = [1, 2, 3].reduce((acc, curr) => {
    console.log(acc);

    return acc + curr
},);
console.log(result);
