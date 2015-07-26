var gulp = require('gulp');
var gulp_uglify = require('gulp-uglify');
var gulp_rename = require('gulp-rename');
var gulp_concat = require('gulp-concat');

gulp.task('uglify', function() {
  return gulp.src([
    'src/*.js', 'src/**/*.js', 'src/**/**/*.js',
  ])
  .pipe(gulp_concat('concat.js'))
  .pipe(gulp.dest('dist'))
  .pipe(gulp_rename('uglify.js'))
  .pipe(gulp_uglify()).on('error', errorHandler)
  .pipe(gulp.dest('dist'))
});

gulp.task('default', ['uglify']);


// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}
