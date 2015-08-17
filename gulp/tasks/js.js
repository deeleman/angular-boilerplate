'use strict';

module.exports = function (gulpContainer, settings, errorHandler, livereload) {
    var gulp = gulpContainer.gulp;
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var sourcemaps = require('gulp-sourcemaps');
    var rename = require('gulp-rename');
    var watch = require('gulp-watch');
    var config = settings.js;

    gulp.task('js:src', function() {
        gulp.src(config.src)
            .on('error', errorHandler)
            .pipe(concat(config.dest.filename))
            .pipe(gulp.dest(config.dest.path))
            .pipe(uglify())
            .pipe(rename({ extname: '.min.js' }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.dest.path))
            .pipe(livereload());
    });

    gulp.task('js:watch', ['js:src'], function () {
        watch(config.src, { ignoreInitial: false, verbose: true }, function() {
            gulp.start('js:src');
        });
    });

    gulp.task('js', ['js:watch']);

    gulpContainer.getContainer('dev').addTask('js');
};
