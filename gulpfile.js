var gulp = require("gulp");
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var config = require('./config.json');
gulp.task("jshint", function() {
    gulp.src(config.jshint_src)
        .pipe(jshint({
            "node": true,
            "nonstandard": true
        }))
        .pipe(jshint.reporter())
});

gulp.task("minify-js", function() {
    gulp.src(config.uglify_src)
        .pipe(uglify({
            mangle: {
                except: ['require', 'exports', 'modules']
            }
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(config.uglify_dest))
});

gulp.watch(config.jshint_src, ['jshint']);
gulp.watch(config.uglify_src, ['minify-js']);
gulp.task('default', ['jshint','minify-js']);
