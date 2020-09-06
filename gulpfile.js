const gulp = require('gulp');
const { src, dest } = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
 

function css() {
    return src('less/**/*.less')
    .pipe(less())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

function watch(){
  browserSync.init({server: {baseDir: './',}});
  gulp.watch('./less/**/*.less', css);
  gulp.watch('./*.html').on('change', browserSync.reload)
}

exports.watch = watch;

exports.image = () => (
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);