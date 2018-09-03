'use strict';

var gulp = require('gulp');
const minify = require('gulp-minify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var obfuscate = require('gulp-javascript-obfuscator');

gulp.task('html', function () {
    gulp.src('./dev/html/**/*.html')
        .pipe(minify())
        .pipe(gulp.dest('./public'));
});

gulp.task('scss', function () {
    return gulp.src('./dev/scss/**/*.scss')
        .pipe(concat('app.css'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(minify())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function () {
    return gulp.src('./dev/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(obfuscate())
        .pipe(gulp.dest('./public/js'));
});

gulp.task('build', function () {
    gulp.start('html');
    gulp.start('scss');
    gulp.start('js');
});

gulp.task('watch', function () {
    gulp.watch('dev/html/**/*.html', ['html']);
    gulp.watch('dev/scss/**/*.scss', ['scss']);
    gulp.watch('dev/js/**/*.js', ['js']);
});