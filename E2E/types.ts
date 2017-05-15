



function test<T>(a: T): T {


    return a;

};


// test(2,3);
type str = string;
var x: str = test<str>('satish');

console.log(x);

var y = test<number>(2);

console.log(y);

var a: string = 'name';

var b: string = 'name';

console.log(a === b);


interface i {

    username: string;
    age: number;

}

function interfaceTest(w: i) {

    console.log(w);

}

interfaceTest({ username: 'satish', age: 31 });


// function extend<T, U>(first: T, second: U): T & U {
// return first,
// return second; 

// }


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