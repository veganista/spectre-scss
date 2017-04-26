var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');


gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', ['build']);
});

gulp.task('build', function() {
  gulp.src('./scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write('.'))
  .pipe(csscomb())
  .pipe(cleancss())
  .pipe(gulp.dest('./docs/dist'))
});

gulp.task('default', ['build']);
