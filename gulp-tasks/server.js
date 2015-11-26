module.exports = function(config) {

  "use strict";

  const gulp          = require('gulp'),
        ARGV          = require('yargs').argv,
        spawn         = require('child_process').spawn;
        
  var rackup;
  
  gulp.task('server', ['server-start'], () => {
    gulp.watch(config.watchpaths.server, ['server-stop', 'server-start']); // restart server when app.rb changes
  });
  
  gulp.task('server-start', () => {
    rackup = spawn(config.server.cmd, config.server.args);
    rackup.stdout.setEncoding('utf8');
    rackup.stdout.on('data', (data) => {
      console.log(data)
    });
  });
  
  gulp.task('server-stop', () => {
    rackup.kill();
  });
  
}
