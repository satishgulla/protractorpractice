function test(a) {
    return a;
}
;
var x = test('satish');
console.log(x);
var y = test(2);
console.log(y);
var a = 'name';
var b = 'name';
console.log(a === b);
function interfaceTest(w) {
    console.log(w);
}
interfaceTest({ username: 'satish', age: 31 });
// var c =  Symbol('name');
// var d =  Symbol('name');
// console.log(c === d);
// var c: string;
// var ar: number[];
// ar = [2, 3, 4];
// var t: [string, number, boolean, any, void, null, undefined] = ['satish', 30, false, 'gulla', undefined, null, undefined];//void can be null or undefined
// function getError() : never{
//    throw new Error('something');
// } // to throw error explicitly
// enum Color { Red = 1, Green = 2, Blue = 4 };
// console.log(Color.Red);
// c = test('satish', 3);
// console.log(c);
// getError(); 
