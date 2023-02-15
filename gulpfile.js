var gulp = require("gulp"), sass = require("gulp-sass")(require("sass"))

var paths = {
    styles: {
        src: "src/styles/*.scss",
        dest: "dist/css"
    }
};

function style() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(gulp.dest(paths.styles.dest))
}

exports.default = style

function watch() {
    gulp.watch(paths.styles.src, gulp.parallel(style));
}

exports.watch = watch

// npm run gulp watch
