'use strict';

module.exports = function (gulpContainer, settings, errorHandler, livereload) {
    var gulp = gulpContainer.gulp;
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');
    var watch = require('gulp-watch');
    var settingsPath = './gulp.conf';
    var config = settings.vendor;

    var checkArrayEquality = function(array1, array2) {
        var areEqual = array1.length === array2.length && array1.every(function(element, index) {
            return element === array2[index];
        });
        return areEqual;
    };

    gulp.task('vendor:src', function() {
        if(!config.src) {
            config.src = [];
        }
        gulp.src(config.src)
            .on('error', errorHandler)
            .pipe(concat(config.dest.filename))
            .pipe(gulp.dest(config.dest.path))
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(gulp.dest(config.dest.path))
            .pipe(livereload());
    });

    gulp.task('vendor:watch', ['vendor:src'], function () {
        watch(settingsPath, { ignoreInitial: true, verbose: true }, function() {
            var vendorDeps = require(settingsPath.replace('./', '../../')).vendor.src;
            if(checkArrayEquality(vendorDeps, config.src)) {
                config.src = vendorDeps;
                gulp.start('vendor:src');
            }
        });
    });

    gulp.task('vendor', ['vendor:watch']);

    gulpContainer.getContainer('dev').addTask('vendor');
};
