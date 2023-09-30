const GULP = require('gulp')
const CSSNANO = require('gulp-cssnano')
const SOURCEMAPS = require('gulp-sourcemaps')
const CONCAT =  require('gulp-concat')
const UGLIFY = require('gulp-uglify')
const BABEL = require('gulp-babel')
const HTMLMIN = require('gulp-minify-html');

const JQUERY = './node_modules/jquery/dist/jquery.min.js';
const JQUERYMASK = './node_modules/jquery-mask-plugin/dist/jquery.mask.min.js'

function watchFiles(){
    GULP.watch('./src/css/*.css',css)
    GULP.watch('./src/js/*.js',processoScript)
    GULP.watch('./src/html/*.html',html)
    
}

function css() {
    return GULP.src('./src/css/*.css')
    .pipe(SOURCEMAPS.init())
    .pipe(CSSNANO())
    .pipe(SOURCEMAPS.write('.'))
    .pipe(GULP.dest('./dist/css'))
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
      .pipe(GULP.dest('./dist/js'));
  }
  
  function concatenaEExporta() {
    return GULP.src(['./dist/js/all-Lib.js','./dist/js/all-Script.js'])
      .pipe(CONCAT('final.js')) 
      .pipe(GULP.dest('./dist/js'));
  }

function html(){
    return GULP.src('./src/html/*.html')
    .pipe(HTMLMIN())
    .pipe(GULP.dest('./'))
}

exports.default = GULP.parallel(css, lib,processoScript, concatenaEExporta, html)
exports.watch = watchFiles;


