const GULP = require('gulp')
const CSSNANO = require('gulp-cssnano')
const SOURCEMAPS = require('gulp-sourcemaps')
const CONCAT =  require('gulp-concat')
const UNGLIFY = require('gulp-uglify')
const BABEL = require('gulp-babel')
const htmlmin = require('gulp-minify-html');

function watchFiles(){
    GULP.watch('./src/css/*.css',css)
    GULP.watch('./src/js/*.js',js)
    GULP.watch('./src/html/*.html')
    
}

function css() {
    return GULP.src('./src/css/*.css')
    .pipe(SOURCEMAPS.init())
    .pipe(CSSNANO())
    .pipe(SOURCEMAPS.write('.'))
    .pipe(GULP.dest('./dist/css'))
}

function js() {
    return GULP.src(['./src/js/jquery.mask.js','./src/js/toast.js','./src/js/script.js'])
    .pipe(CONCAT('all.js'))
    .pipe(BABEL({
        presets: [
            ["env", {
                "targets": {
                    "browsers": ['> 1%', 'last 2 versions']
                }
            }]
        ]
    }))
    .pipe(UNGLIFY())
    .pipe(GULP.dest('./dist/js'))
}

function html(){
    return GULP.src('index.html')
    .pipe(htmlmin())
    .pipe(GULP.dest('./dist/html'))
}

exports.default = GULP.parallel(css,js, html)
exports.watch = watchFiles;


