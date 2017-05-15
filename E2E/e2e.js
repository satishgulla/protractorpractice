

describe("Login TestScenarios", () => {

  beforeEach(function () {

        console.log('-----before each------');

    });
  
    

    afterEach(function () {

        console.log('-----after each------');

    });

    beforeAll(function () {

        console.log('******before all*****');

    });



    afterAll(function () {

        console.log('******after all*****');

    });

    it("should Success", () => {

        // util.toBe(2,2);
        console.log("success")


    });

    describe("Lets test above", () => {

        it("should fail", () => {

            // util.notToBe(2,3);

            console.log("Fail");
        });

    });

    




});


describe("Login2 TestScenarios", () => {

 
     beforeEach(function () {

        console.log('-----before2 each------');

    });

    afterEach(function () {

        console.log('-----after each------');

    });

    beforeAll(function () {

        console.log('******before all*****');

    });



    afterAll(function () {

        console.log('******after all*****');

    });



    it("should Success", () => {

        // util.toBe(2,2);
        console.log("success2")


    });

    describe("Lets test above", () => {

        it("should fail", () => {

            // util.notToBe(2,3);

            console.log("Fail2");

            
        });

    });




});