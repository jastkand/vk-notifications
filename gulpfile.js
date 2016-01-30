var path    = require('path'),
    gulp    = require('gulp'),
    watch   = require('gulp-watch'),
    sass    = require('gulp-sass')
    prefix  = require('gulp-autoprefixer');

var ROOT_PATH           = __dirname,
    SASS_PATH           = path.join(ROOT_PATH, 'stylesheets/**/*.scss'),
    STYLESHEETS_PATH    = path.join(ROOT_PATH, 'public/stylesheets');

function buildSCSS (files) {
  files.pipe( sass() )
       .pipe( prefix("last 5 Chrome versions") )
       .pipe( gulp.dest(STYLESHEETS_PATH) )
}

gulp.task('default', ['sass-watch', 'vendor-stylesheets']);
gulp.task('build', ['sass-build', 'vendor-stylesheets']);

gulp.task('sass-watch', function () {
  gulp.src(SASS_PATH)
      .pipe(watch(buildSCSS))
});

gulp.task('sass-build', function () {
  buildSCSS(gulp.src(SASS_PATH))
});

gulp.task('vendor-stylesheets', function () {
  gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/emoji/lib/emoji.css'
  ]).pipe( gulp.dest(STYLESHEETS_PATH) )
});
