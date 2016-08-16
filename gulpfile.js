var gulp = require('gulp');
var liquify = require('gulp-liquify');
var locals = require('./index')

gulp.task('go', () => {

  gulp.src('./src/*.html')
      .pipe(liquify(locals, { base: "./src/templates/" }))
      .pipe(gulp.dest('./dist/'))
})
