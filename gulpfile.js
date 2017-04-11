const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const csscomb = require('gulp-csscomb');
const cleanCSS = require('gulp-clean-css');

gulp.task('js', function () {
  return gulp.src('_include/js/main.js')
      .pipe(concat('main.min.js'))
      .pipe(babel({ presets: ['babili'] }))
      .pipe(gulp.dest('_include/js'));
});

gulp.task('css', function () {
  return gulp.src('_include/css/main.css')
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      }))
      .pipe(csscomb())
      .pipe(concat('main.min.css'))
      .pipe(cleanCSS())
      .pipe(gulp.dest('_include/css'));

});

gulp.task('default', gulp.series('js', 'css', function (done) {
  gulp.watch('_include/js/main.js', gulp.task('js'));
  gulp.watch('_include/css/main.css', gulp.task('css'));
  done();
}));
