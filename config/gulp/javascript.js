var gulp = require('gulp');
var gutil = require('gulp-util');
var dutil = require('./doc-util');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var eslint = require('gulp-eslint');

// aliases to the blendid task
gulp.task('js', [ 'javascripts' ]);
gulp.task('javascript', [ 'javascripts' ]);

gulp.task('eslint', function (done) {
  if (!cFlags.test) {
    dutil.logMessage('eslint', 'Skipping linting of JavaScript files.');
    return done();
  }

  return gulp.src([
      'src/js/**/*.js',
      'spec/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format());
});
