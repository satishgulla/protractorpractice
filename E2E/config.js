

exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['e2e.js', 'e2e2.js'],

    suites: {
		homepage: 'e2e.js',
        all : ['e2e.js', 'e2e2.js', 'e2e3.js'] ,
        browserspec : 'e2e2.js'
	},

    capabilities: {
        'browserName': 'chrome'
    },

    params: {
        
        param1: 'value of param', 
        param2: '2nd param'
    },

    onPrepare: function () {
        global.myVariable = "Global Variable";

        global.util = require('./utilities.js').util;
    }

}