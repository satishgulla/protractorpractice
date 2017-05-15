

function addSuccess(a: number, b: string): string {  //Returns String... passing two parameters

    var c: string = a + b;
    return c;

}

console.log(addSuccess(2, 'test')); // calling the function addsuccess

function mulSuccessDefault(a: number, b: number = 3): number {

    var c: number = a * b;
    return c;
}

console.log(mulSuccessDefault(2));//sending only one parameter as the other one is default parameter

console.log(mulSuccessDefault(3,2));

enum cars{honda =1, bmw=2} //declaring an enum

console.log(cars.bmw); // calling enum


function testOptionalTypes(a:number, b?:number){

    var c  = a+b;
    return c;
}



interface testIneter{

     interfaceTest1 : number,
    interfaceTest2 : string;
    //testinterface(a : number): string;
}


function testFunction(w : testIneter){

console.log(w);
// testIneter.testinterface(){


// }
    
}

testFunction(2, 'test');

//console.log(testOptionalTypes(2));