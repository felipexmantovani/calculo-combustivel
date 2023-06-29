const GULP = require('gulp')
const CSSNANO = require('gulp-cssnano')
const SOURCEMAPS = require('gulp-sourcemaps')
/*const CONCAT =  require('gulp-concat')
const UNGLIFY = require('gulp-uglify')
const BABEL = require('gulp-babel')*/

function css() {
    return GULP.src('./css/*.css')
    .pipe(SOURCEMAPS.init())
    .pipe(CSSNANO())
    .pipe(SOURCEMAPS.write('.'))
    .pipe(GULP.dest('./css'))
}


/*
function js() {
    return GULP.src('./lib/jquery.mask.js','./js/toast.js','./js/script.js')
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
    .pipe(GULP.dest('./js-min'))
}
*/
exports.default = GULP.parallel(css)