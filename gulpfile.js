var gulp = require('gulp');
var liquify = require('gulp-liquify');

var dumbdata = require('./data');

gulp.task('default', () => {
  console.log('liquid template compilation example')
  gulp.src('./src/*.html')
      .pipe(liquify(data, { base: "./src/templates/" }))
      .pipe(gulp.dest('./dist/'))
})
