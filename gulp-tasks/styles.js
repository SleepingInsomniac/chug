module.exports = function(config) {
  
  "use strict";

  const gulp          = require('gulp'),
        browserSync   = require('browser-sync').get('syncBrowser'),
        sass          = require('gulp-sass'),
        // sass          = require('gulp-ruby-sass'),
        autoprefixer  = require('gulp-autoprefixer'),
        concat        = require('gulp-concat'),
        sourcemaps    = require('gulp-sourcemaps');

  let handleError = function(error) {
    'use strict';
    console.log("\n\u0007"); // terminal bell character
    console.log(error.messageFormatted);
    this.emit('end');
  }
  
  config.stylesheets.sources

  gulp.task('styles', () => {
    return gulp.src(
        config.stylesheets.sources
      )
      .pipe(sourcemaps.init())
      .pipe(sass(config.stylesheets.options))
      .on('error', handleError)
      .pipe(autoprefixer()).on('error', handleError)
      .pipe(concat('style.min.css'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.stylesheets.dest))
      .pipe(browserSync.stream());  
  });
  
}
