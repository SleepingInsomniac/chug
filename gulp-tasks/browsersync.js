module.exports = function(config) {
  
  "use strict";
  
  const gulp          = require('gulp'),
        browserSync   = require('browser-sync').create('syncBrowser');

  gulp.task('browser-sync', () => {
    browserSync.init(config.browsersync);
  });

  gulp.task('watch', () => {
    gulp.watch(config.watchpaths.styles, ['styles']);
    gulp.watch(config.watchpaths.scripts, ['scripts']).on('change', browserSync.reload);
    gulp.watch(config.watchpaths.markup).on('change', browserSync.reload);
  });
  
}
