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
e.test();
