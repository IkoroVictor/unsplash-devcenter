module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            build: {
                cwd: 'assets/',
                src: ["**/*.ttf", "**/*.otf", "**/*.svg", "**/*.eot", "**/*.woff", "**/*.woff2", "**/*.png", "**/*.html", "**/*.json"],
                dest: 'dist/',
                expand: true
            },
        },
        cssmin: {
            minify: {
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['css/*.css'],
                    dest: 'assets/css/min/',
                    ext: '.min.css'
                }]
            },
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            combine:
            {
                files:
                {
                    'dist/css/application.css' : [
                        'node_modules/angular-material/angular-material.min.css',
                        'node_modules/angular-loading-bar/build/loading-bar.min.css',
                        'assets/css/min/css/main.min.css',
                        'assets/css/min/css/material-icons.min.css']
                }
            }
        },
        clean: {
            build: {
                src: ['dist/', 'assets/css/min/']
            }
        },
        uglify: {
            full_build: {
                options: {
                    mangle: false,
                    mangleProperties: false
                },
                files: [{
                    expand: true,
                    cwd: 'dist/js',
                    src: ['*.js', '!**/*.min.js'],
                    dest: 'dist/js/'
                }]
            },
            app_build: {
                options: {
                    mangle: false,
                    mangleProperties: false
                },
                files: [{
                    expand: true,
                    cwd: 'dist/js',
                    src: ['application.js', '!**/*.min.js'],
                    dest: 'dist/js/'
                }]
            }

        },
        concat: {
            options: {
                separator: '\n\n'
            },
            core : {
                src: [
                    'node_modules/angular/angular.min.js',
                    'node_modules/angular-sanitize/angular-sanitize.min.js',
                    'node_modules/angular-messages/angular-messages.min.js',
                    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
                    'node_modules/angular-animate/angular-animate.min.js', //Dependency for angular-material
                    'node_modules/angular-aria/angular-aria.min.js', //Dependency for angular-material
                    'node_modules/angular-material/angular-material.min.js',
                    'node_modules/angular-loading-bar/build/loading-bar.min.js'

                   ],
                dest: 'dist/js/core.js'
            },
            app: {
                src: [
                    'lib/constant/*.js',
                    'lib/app.js',
                    'lib/directive/*.js',
                    'lib/helper/*.js',
                    'lib/config/*.js',
                    'lib/service/*.js',
                    'lib/controller/*.js',
                ],
                dest: 'dist/js/application.js'
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-qunit-istanbul');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    //grunt.registerTask('default', ["clean", "copy", "cssmin","qunit_junit", "qunit"]);
    grunt.registerTask('default', ["clean", "copy", "cssmin", 'concat','uglify:app_build']);
    grunt.registerTask('app', [ 'concat:app','uglify:app_build']);
    grunt.registerTask('css', [ 'copy','cssmin']);


};
