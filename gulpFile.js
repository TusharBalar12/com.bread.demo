var gulp = require('gulp')
, uglify = require('gulp-uglify')
, concat = require('gulp-concat')
, coffee = require('gulp-coffee')
, minifyHtml = require("gulp-minify-html")
, minifyCss = require('gulp-minify-css')
, less = require('gulp-less')
, jshint = require('gulp-jshint')
, rename = require('gulp-rename');

//CoffeeScript Compilation
gulp.task('coffee', function(){
    gulp.src('src/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('dist4'));

});

// HTML minification
gulp.task('minify-html', function () {
    gulp.src('./src/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist'));
});

//CSS minification
gulp.task('minify-css', function(){
    gulp.src('./src/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('dist'));
});

//JS minification
gulp.task('scripts', function(){
    gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist2'));
});

//JS concate
gulp.task('script', function(){
    gulp.src('src/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist2'));
});

//Less Compilation
gulp.task('compile-less', function(){
    gulp.src('src/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist'));
});



//Rename a file
gulp.task('rename', function(){
    gulp.src('dist/*.coffee')
    .pipe(coffee())
    .pipe(rename('renamed.js'))
    .pipe(gulp.dest('dest'))
});