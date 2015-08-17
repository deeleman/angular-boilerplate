'use strict';

module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-ui-router/build/angular-ui-router.js',
            'src/js/**/*.js',
            'test/ng/**/*.js'
        ],
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};
