'use strict';

module.exports = function (gulpContainer, settings, errorHandler, livereload) {
    var gulp = gulpContainer.gulp;
    var minify = require('gulp-minify-html');
    var watch = require('gulp-watch');
    var config = settings.html;

    gulp.task('html:minify', function () {
        gulp.src(config.src)
            .pipe(minify(config))
            .pipe(gulp.dest(config.dest))
            .pipe(livereload());
    });

    gulp.task('html:watch', ['html:minify'], function () {
        watch(config.src, { ignoreInitial: false, verbose: true }, function() {
            gulp.start('html:minify');
        });
    });

    gulp.task('html', ['html:watch']);

    gulpContainer.getContainer('dev').addTask('html');
};
