
	var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

 
// Tarea 1  minify-css
gulp.task('minifycss', function () {
  gulp.src('source/*.css')
  .pipe(autoprefixer('last 2 version'))
.pipe(cssnano())
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('build/css'))
  .pipe(notify({ message: 'Styles task complete' }));
});
 
// Tarea 2  minify-js
gulp.task('minifyjs', function () {
  gulp.src('source/*.js')
  .pipe(concat('script.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
});
 
