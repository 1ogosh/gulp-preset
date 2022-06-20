const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));




gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});



gulp.task('styles', function() {
    return gulp.src("src/scss/*.+(scss|sass)")
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/scss/*.+(scss|sass)", gulp.parallel("styles"));
    gulp.watch("src/*html").on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));


//для нового проэкта{
//скопировать в корневую папку gulpfile и package.json
//прописать npm i
//}