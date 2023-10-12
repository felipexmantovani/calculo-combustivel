const GULP = require('gulp')
const CSSNANO = require('gulp-cssnano')
const SOURCEMAPS = require('gulp-sourcemaps')
const CONCAT =  require('gulp-concat')
const UGLIFY = require('gulp-uglify')
const BABEL = require('gulp-babel')
const HTMLMIN = require('gulp-minify-html');
const CLEAN = require('gulp-clean');
const JQUERY = './node_modules/jquery/dist/jquery.min.js';
const JQUERYMASK = './node_modules/jquery-mask-plugin/dist/jquery.mask.min.js'
const BROWSER_SYNC = require('browser-sync').create();

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

function browserSyncInit(done) {
  // BROWSER_SYNC.init({
  //     server: {
  //       baseDir: './dist',
  //     },
  //     port: 3000,
  //     open: !IS_PRODUCTION,
  //     localOnly: true
  // });
  // done();
}

function watchFiles(){
    GULP.watch('./src/css/*.css',css)
    GULP.watch('./src/js/*.js',processoScript)
    GULP.watch('./src/html/*.html',html)
}

function clean(){
  return GULP.src('./dist/*', { read: false, allowEmpty: true })
    .pipe(CLEAN());
}

function css() {
    return GULP.src('./src/css/*.css')
    .pipe(SOURCEMAPS.init())
    .pipe(CSSNANO())
    .pipe(SOURCEMAPS.write('.'))
    .pipe(GULP.dest('./dist/css'))
    .pipe(BROWSER_SYNC.stream());
}

function lib(){
 return GULP.src([JQUERY, JQUERYMASK])
 .pipe(CONCAT('all-Lib.js'))
 .pipe(GULP.dest('./dist/js'))
}

function processoScript() {
    return GULP.src(['./src/js/script.js', './src/js/toast.js'])
      .pipe(CONCAT('all-Script.js'))
      .pipe(BABEL({
        presets: [
          ["env", {
            "targets": {
              "browsers": ['> 1%', 'last 2 versions']
            }
          }]
        ]
      }))
      .pipe(UGLIFY())
      .pipe(GULP.dest('./dist/js'))
      .pipe(BROWSER_SYNC.stream());
  }

  function concatenaEExporta() {
    return GULP.src(['./dist/js/all-Lib.js','./dist/js/all-Script.js'])
      .pipe(CONCAT('final.js'))
      .pipe(GULP.dest('./dist/js'))
      .pipe(BROWSER_SYNC.stream());
  }

function html(){
    return GULP.src('./src/html/*.html')
    .pipe(HTMLMIN())
    .pipe(GULP.dest('./dist/'))
    .pipe(BROWSER_SYNC.stream());
}

function img(){
  return GULP.src('./src/img/*')
  .pipe(GULP.dest('./dist/img'))
}

exports.default = GULP.series(clean,lib,processoScript, concatenaEExporta,GULP.parallel(css, html,img, browserSyncInit, watchFiles))
