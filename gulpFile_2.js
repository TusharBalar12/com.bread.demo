// including plugins
var gulp = require('gulp')
, rename = require('gulp-rename')
, coffee = require("gulp-coffee")
, concat = require("gulp-concat")
, fs = require('fs')
, header = require('gulp-header')
, minifyHtml = require("gulp-minify-html");
 
// task
gulp.task('minify-html', function () {
    gulp.src('src/*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist4'));
});

gulp.task('rename', function () {
    gulp.src('src/*.coffee') 
    .pipe(coffee()) 
    .pipe(rename('renamed.js')) // rename into "renamed.js" (original name "one.js")
    .pipe(gulp.dest('dist4'));
});

gulp.task('concat', function () {
    gulp.src('src/*.js') // path to your files
    .pipe(concat('concat.js'))
    .pipe(gulp.dest('dist4'));
});

var getCopyright = function(){
    return fs.readFileSync('Copyright');
};
gulp.task('concat-copyright', function(){
    gulp.src('src/*.js')
    .pipe(concat('concat-copyright.js'))
    .pipe(header(getCopyright()))
    .pipe(gulp.dest('dest4'));
});