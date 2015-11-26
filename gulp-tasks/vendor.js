module.exports = function(config) {

  "use strict";

  const gulp          = require('gulp'),
        concat        = require('gulp-concat');

  gulp.task('vendor', () => {
    return gulp.src(config.vendor.sources)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.vendor.dest));
  });

}
