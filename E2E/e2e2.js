

describe('Launch an application', () => {


    var printLog = function (log) {

        console.log(log);
    }
    it('should launch an application', () => {



        browser.get('https://www.angularjs.org');
        //browser.pause();
        browser.debugger();

        // .then(function () {

        //     browser.executeScript("alert('hello')");
        // });

       // browser.executeScript("confirm('hello')");
       // browser.executeScript("prompt('hello')");
        browser.manage().window().maximize();
        browser.getCurrentUrl().then(printLog);
        browser.sleep(2000);
        expect(true).toBe(true);

        browser.get('https://www.angularjs.org')
        .then(()=>{
            

        });
        //browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 't')).perform();

        // browser.getCapabilities().then(printLog);
        // browser.getPageSource().then(printLog);



        // var browser2 = browser.forkNewDriverInstance();

        // browser2.get('https://docs.angularjs.org/');
        // browser2.sleep(3000);
        // // browser.navigate().back();
        // browser2.refresh();




    });

});