var gulp = require('gulp')
var requireDir = require('require-dir');

// Require all tasks as separate directory files
var dir = requireDir('./tasks');

gulp.task('hello', function() {
  console.log('Hello!')
});
