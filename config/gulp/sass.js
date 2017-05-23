var gulp = require('gulp');
var dutil = require('./doc-util');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var linter = require('@18f/stylelint-rules');
var pkg = require('../../package.json');
var filter = require('gulp-filter');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');
var del = require('del');
var task = 'sass';

var entryFileFilter = filter('uswds.scss', { restore: true });
var normalizeCssFilter = filter('normalize.css', { restore: true });

gulp.task(task, [ 'copy-vendor-sass', 'stylesheets' ]);

gulp.task('stylelint',
  linter('./src/stylesheets/{,core/,components/,elements/}*.scss',
  {
    ignore: './src/stylesheets/lib/**/*.scss'
  })
);

gulp.task('copy-vendor-sass', function () {

  dutil.logMessage('copy-vendor-sass', 'Compiling vendor CSS');

  var stream = gulp.src([
    './node_modules/normalize.css/normalize.css',
    './node_modules/bourbon/app/assets/stylesheets/**/*.scss',
    './node_modules/bourbon-neat/app/assets/stylesheets/**/*.scss',
  ])
    .pipe(normalizeCssFilter)
    .pipe(rename('_normalize.scss'))
    .pipe(normalizeCssFilter.restore)
    .on('error', function (error) {
      dutil.logError('copy-vendor-sass', error);
    })
    .pipe(gulp.dest('src/stylesheets/lib'));

  return stream;
});

