const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
var gulps = require("gulp-series");
const { series } = require('gulp');


gulp.task('minifyhtml', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('move-js', () => {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', () => {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});



gulp.task('default', gulp.series("minifyhtml", "move-js", "fonts", function (done) {

  done();
}));
