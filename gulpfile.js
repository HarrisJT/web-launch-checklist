const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const csscomb = require('gulp-csscomb');
const minify = require('gulp-minify-css');
const imagemin = require('gulp-imagemin');

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
      .pipe(minify())
      .pipe(gulp.dest('_include/css'));

});

gulp.task('img', function () {
  return gulp.src('_include/img/*.{png,gif,jpg}')
      .pipe(imagemin())
      .pipe(gulp.dest('_include/img'));
});

gulp.task('default', gulp.series('js', 'css', 'img', function (done) {
  gulp.watch('_include/js/main.js').on('change', gulp.task('js'));
  gulp.watch('_include/css/main.css').on('change', gulp.task('css'));
  gulp.watch('_include/img/**/*.{png,gif,jpg}').on('add', gulp.task('img'));
  done();
}));
