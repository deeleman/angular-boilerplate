'use strict';

module.exports = function (gulpContainer, settings, errorHandler, livereload) {
    var gulp = gulpContainer.gulp;
    var sass = require('gulp-sass');
    var autoprefixer = require('gulp-autoprefixer');
    var sourcemaps = require('gulp-sourcemaps');
    var rename = require('gulp-rename');
    var watch = require('gulp-watch');
    var config = settings.sass;

    gulp.task('sass:app', function () {
        gulp.src(config.src)
            .pipe(sourcemaps.init())
            .pipe(sass(config.options))
            .on('error', errorHandler)
            .pipe(autoprefixer({
                cascade: false
            }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.dest))
            .pipe(sass({ outputStyle: 'compressed' }))
            .pipe(rename({ extname: '.min.css' }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.dest))
            .pipe(livereload());
    });

    gulp.task('sass:watch', ['sass:app'], function () {
        watch(config.src, { ignoreInitial: false, verbose: true }, function() {
            gulp.start('sass:app');
        });
    });

    gulp.task('sass', ['sass:watch']);

    gulpContainer.getContainer('dev').addTask('sass');
};
