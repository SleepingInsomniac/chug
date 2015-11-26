'use strict';

const config        = require('yaml-config').readConfig('./gulp-config.yaml'),
      gulp          = require('gulp'),
      tasks         = require('require-dir')('gulp-tasks'),
      ARGV          = require('yargs').argv;

if (ARGV.silent) config.browsersync.open = false;

// call all of the task modules with the config parameters
for (var t in tasks) tasks[t](config);
      
gulp.task('default', [
  'server',
  'build',
  'browser-sync',
  'watch'
]);

gulp.task('build', [
  'vendor',
  'styles',
  'scripts'
]);
