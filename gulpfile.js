var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    del = require('del'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: true
    })
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/css/*.css', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('build', ['clean'], function() {
    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist')),
        buildFonts = gulp.src('app/fonts/**')
        .pipe(gulp.dest('dist/fonts')),
        buildJs = gulp.src('app/js/**')
        .pipe(gulp.dest('dist/js')),
        buildImg = gulp.src('app/img/**')
        .pipe(gulp.dest('dist/img')),
        buildIco = gulp.src('app/icons/**')
        .pipe(gulp.dest('dist/icons')),
        buildLibs = gulp.src('app/libs/**/*')
        .pipe(gulp.dest('dist/libs')),
        buildCss = gulp.src('app/css/**')
        .pipe(autoprefixer(['last 50 versions'], { cascade: true }))
        .pipe(gulp.dest('dist/css'));
})
