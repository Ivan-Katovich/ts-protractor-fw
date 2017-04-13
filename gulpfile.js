
var gulp = require('gulp'),
    util = require('gulp-util'),
    angularProtractor = require('gulp-angular-protractor');

gulp.task('prot', function() {
    return gulp.src(['./test/specs/*.js'])
        .pipe(angularProtractor({
            'configFile': 'test/config.js',
            'autoStartStopServer': true
        }))
        .on('error', function(e) { throw e });
});
