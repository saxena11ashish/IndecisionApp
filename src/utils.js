console.log('UTILS FILE RUNNING');

const square = (x) => x*x;

const add = (a,b) => a+b;

const sub = (a,b) => a-b;
// Exports are of 2 types
// Default and named

//named export
export { square, add, sub as default };