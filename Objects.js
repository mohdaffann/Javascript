// const jsuser = {
//     name: 'Joshua',
//     age: 18,
//     location: 'Hyderabad',
//     'Full Name': 'Anthony Joshua'
// }
// //console.log(jsuser['age']); // access using key
// //console.log(jsuser.Full Name); // cant accuess using dot since the key full name has a space between
// //console.log(jsuser['Full Name']); //can access using key

// jsuser.greeting = function () {
//     console.log(`Hello ${this.name}`);

// }
// console.log(jsuser.greeting());

const userDB = {
    id: '123abc',
    isLoggedIn: false,
    name: {
        fullName: 'Mohammed Affan',
        userName: 'mohdaffann'
    },
    age: 20
}

// const onj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 6 }
// //const obj3 = Object.assign({}, onj1, obj2);
// const obj3 = { ...onj1, ...obj2 }; // a better way is to just spread the objects
// console.log(obj3);

const keys = Object.keys(userDB); //get keys of an obj in array format
const vals = Object.values(userDB); //get vals of an obj in arr format
console.log(keys);
console.log(vals);

const fruitPrices = { orange: 100, mango: 50, apple: 70 }

const doubledPrices = Object.fromEntries(
    Object.entries(fruitPrices).map(([k, v]) => [k, 2 * v]))

console.log(doubledPrices); // .fromEntries takes key value array pairs and returns them in an object

console.log(Object.hasOwn(fruitPrices, 'apple'));



