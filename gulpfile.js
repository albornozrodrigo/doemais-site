'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var liveReload = require('gulp-livereload');

gulp.task('sass', function() {
    return gulp.src('./src/sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function() {
	liveReload.listen();
	gulp.watch('./src/sass/*.*', ['sass']);
});

gulp.task('default', function(done) {
	gulp.start('sass')
	.on('end', done);
});