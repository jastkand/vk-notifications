var path    = require('path'),
    gulp    = require('gulp'),
    watch   = require('gulp-watch'),
    sass    = require('gulp-sass')
    include = require('gulp-include'),
    coffee  = require('gulp-coffee'),
    slim    = require("gulp-slim"),
    prefix  = require('gulp-autoprefixer');

var ROOT_PATH           = __dirname,
    COFFEESCRIPTS_PATH  = path.join(ROOT_PATH, 'javascripts/*.coffee'),
    SASS_PATH           = path.join(ROOT_PATH, 'stylesheets/**/*.scss'),
    STYLESHEETS_PATH    = path.join(ROOT_PATH, 'public/stylesheets'),
    JAVASCRIPTS_PATH    = path.join(ROOT_PATH, 'public/javascripts');

function buildSCSS (files) {
  files.pipe( sass() )
       .pipe( prefix("last 5 Chrome versions") )
       .pipe( gulp.dest(STYLESHEETS_PATH) )
}

function buildCoffee (files) {
  files.pipe( include() )
       .pipe( coffee() )
       .pipe( gulp.dest(JAVASCRIPTS_PATH) )
}

function buildJS (files) {
  files.pipe( include() )
       .pipe( gulp.dest(JAVASCRIPTS_PATH) )
}

function buildSlim (files) {
  files.pipe(slim({ pretty: true }))
       .pipe(gulp.dest("public"));
}

gulp.task('default', ['sass-watch', 'coffee-watch', 'slim-watch', 'vendor-stylesheets', 'vendor-javascripts']);
gulp.task('build', ['sass-build', 'coffee-build', 'slim-build', 'vendor-stylesheets', 'vendor-javascripts']);

gulp.task('sass-watch', function () {
  gulp.src(SASS_PATH)
      .pipe(watch(buildSCSS))
});

gulp.task("coffee-watch", function () {
  gulp.src(COFFEESCRIPTS_PATH)
      .pipe(watch(buildCoffee))
});

gulp.task('slim-watch', function() {
  gulp.src("views/*.slim")
    .pipe(watch(buildSlim))
});

gulp.task('sass-build', function () {
  buildSCSS(gulp.src(SASS_PATH))
});

gulp.task("coffee-build", function () {
  buildCoffee(gulp.src(COFFEESCRIPTS_PATH))
});

gulp.task('slim-build', function() {
  buildSlim(gulp.src("views/*.slim"))
});

gulp.task('vendor-stylesheets', function () {
  gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/emoji/lib/emoji.css'
  ]).pipe( gulp.dest(STYLESHEETS_PATH) )
});

gulp.task('vendor-javascripts', function () {
  gulp.src([
    'node_modules/angular/lib/angular.min.js'
  ]).pipe( gulp.dest(JAVASCRIPTS_PATH) )
});
