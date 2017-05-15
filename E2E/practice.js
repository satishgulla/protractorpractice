function addSuccess(a, b) {
    var c = a + b;
    return c;
}
console.log(addSuccess(2, 'test')); // calling the function addsuccess
function mulSuccessDefault(a, b) {
    if (b === void 0) { b = 3; }
    var c = a * b;
    return c;
}
console.log(mulSuccessDefault(2)); //sending only one parameter as the other one is default parameter
console.log(mulSuccessDefault(3, 2));
var cars;
(function (cars) {
    cars[cars["honda"] = 1] = "honda";
    cars[cars["bmw"] = 2] = "bmw";
})(cars || (cars = {})); //declaring an enum
console.log(cars.bmw); // calling enum
function testOptionalTypes(a, b) {
    var c = a + b;
    return c;
}
//console.log(testOptionalTypes(2)); 
