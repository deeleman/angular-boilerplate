'use strict';

var testPort = 3001;

exports.config = {
    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        'test/e2e/**/*.spec.js'
    ],

    baseUrl: 'http://localhost:' + testPort,

    framework: 'mocha',

    mochaOpts: {
        enableTimeouts: true
    },

    onPrepare: function() {
        var connect = require('connect');
        var serveStatic = require('serve-static');
        connect().use(serveStatic(__dirname + '/public')).listen(testPort);
    }
};
