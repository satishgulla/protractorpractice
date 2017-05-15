

class Emp {

     empName : string = 'satish';

     test(){

         console.log(this.empName);
     } 

}

var e  = new Emp();

e.test();