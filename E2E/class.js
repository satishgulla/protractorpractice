var Emp = (function () {
    function Emp() {
        this.empName = 'satish';
    }
    Emp.prototype.test = function () {
        console.log(this.empName);
    };
    return Emp;
}());
var e = new Emp();
var s = 2;
e.test();
