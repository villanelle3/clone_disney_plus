var gulp = require("gulp"), sass = require("gulp-sass")(require("sass")), imagemin = require("gulp-imagemin")

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


function images(){
    return gulp.src("./src/images/**/*").pipe(imagemin()).pipe(gulp.dest("./dist/images"))
}

exports.default = gulp.parallel(style, images)

function watch() {
    gulp.watch(paths.styles.src, gulp.parallel(style));
}

exports.watch = watch

// npm run gulp watch
