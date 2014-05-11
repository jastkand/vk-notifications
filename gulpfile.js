var path    = require('path'),
    gulp    = require('gulp'),
    watch   = require('gulp-watch'),
    sass    = require('gulp-sass')
    include = require('gulp-include'),
    coffee  = require('gulp-coffee'),
    slim    = require("gulp-slim");

var ROOT_PATH           = __dirname,
    COFFEESCRIPTS_PATH  = path.join(ROOT_PATH, 'javascripts/*.coffee'),
    SASS_PATH           = path.join(ROOT_PATH, 'stylesheets/**/*.scss'),
    VENDOR_CSS_PATH     = path.join(ROOT_PATH, 'vendor/stylesheets/**/*.css'),
    VENDOR_JS_PATH      = path.join(ROOT_PATH, 'vendor/javascripts/**/*.js'),
    CSS_PATH            = path.join(ROOT_PATH, 'public/stylesheets'),
    JAVASCRIPTS_PATH    = path.join(ROOT_PATH, 'public/javascripts');


gulp.task('default', ['sass-watch', 'coffee-watch', 'slim-watch', 'vendor-styles', 'vendor-js']);

gulp.task('sass-watch', function () {
  gulp.src(SASS_PATH)
      .pipe(watch(function (files) {
        files.pipe( sass() )
             .pipe( gulp.dest(CSS_PATH) )
      }))
});

gulp.task("coffee-watch", function () {
  gulp.src(COFFEESCRIPTS_PATH)
      .pipe(watch(function (files) {
        files.pipe( include() )
             .pipe( coffee({ bare: true }) )
             .pipe( gulp.dest(JAVASCRIPTS_PATH) )
      }))
});

gulp.task('slim-watch', function(){
  gulp.src("views/*.slim")
    .pipe(watch(function (files) {
      files.pipe(slim({ pretty: true }))
           .pipe(gulp.dest("public"));
    }))
});

gulp.task('vendor-styles', function () {
  gulp.src(VENDOR_CSS_PATH)
      .pipe( gulp.dest(CSS_PATH) )
});

gulp.task('vendor-js', function () {
  gulp.src(VENDOR_JS_PATH)
      .pipe( gulp.dest(JAVASCRIPTS_PATH) )
});
