'use strict';

var fs = require('fs');
var errorHandler = require('./gulp/utils/errorHandler');
var gulpContainer = require('./gulp/utils/gulp-ioc')();
var settings = require('./gulp.conf');
var livereload = require('gulp-livereload');

livereload.listen();

fs.readdirSync(__dirname + '/gulp/tasks').forEach(function(task) {
    require('./gulp/tasks/' + task)(gulpContainer, settings, errorHandler, livereload);
});

gulpContainer.bootstrap();
