module.exports = function(config) {

  "use strict";

  const gulp          = require('gulp'),
        concat        = require('gulp-concat'),
        sourcemaps    = require('gulp-sourcemaps'),
        babel         = require('gulp-babel'),
        uglify        = require('gulp-uglify'),
        gulpif        = require('gulp-if'),
        ARGV          = require('yargs').argv,
        browserSync   = require('browser-sync').get('syncBrowser');

  let handleError = function(error) {
    'use strict';
    console.log("\n\u0007");
    console.log(error.message);
    console.log(error.codeFrame);
    console.log("\n");
    this.emit('end');
  }

  gulp.task('scripts', () => {
    return gulp.src(config.scripts.sources)
    .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      })).on('error', handleError)
      .pipe(uglify({
        mangle: false
      })).on('error', handleError)
      .pipe(concat('app.min.js'))
    .pipe(gulpif(!ARGV.production, sourcemaps.write()))
    .pipe(gulp.dest(config.scripts.dest));
  });

}
