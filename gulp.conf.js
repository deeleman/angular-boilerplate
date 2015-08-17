'use strict';

module.exports = {
    html: {
        src: './src/html/**/*.html',
        dest: './public',
        options: {
            comments: true,
            conditionals: true
        }
    },
    vendor: {
        src: [
            'node_modules/angular/angular.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-ui-router/build/angular-ui-router.js'
        ],
        dest: {
            path: 'public/assets/js',
            filename: 'vendor.js'
        }
    },
    js: {
        src: './src/js/**/*.js',
        dest: {
            path: 'public/assets/js',
            filename: 'app.js'
        }
    },
    sass: {
        src: './src/scss/**/*.scss',
        dest: './public/assets/css',
        options: {
            outputStyle: 'compressed',
            sourceComments: false
        }
    },
    server: {
        port: 3000,
        wwwroot: 'public'
    }
};
