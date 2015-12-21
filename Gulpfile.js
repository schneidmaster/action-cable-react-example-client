var gulp    = require('gulp'),
    del     = require('del'),
    webpack = require('webpack-stream'),
    rename  = require('gulp-rename'),
    copy    = require('gulp-copy'),
    connect = require('gulp-connect');

gulp.task('clean', function() {
  del(['built/**/*']);
});
 
gulp.task('webpack', ['clean'], function() {
  gulp.src('index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(rename('production.js'))
    .pipe(gulp.dest('built'));
});

gulp.task('copy', function() {
  gulp.src('index.html')
    .pipe(copy('built'));
});

gulp.task('watch', function() {
  gulp.watch(['./*.js'], function(event) {
    gulp.src(event.path).pipe(connect.reload());
  });

  gulp.watch(['./*.js', 'node_modules/action-cable-react/dist/**/*.js'], ['default']);
});

gulp.task('connect', function() {
  connect.server({
    root: ['built'],
    port: 9010,
    livereload: {
      port: 32834
    },
    connect: {
      redirect: false
    }
  });
});

gulp.task('default', ['clean', 'webpack', 'copy']);
gulp.task('serve', ['default', 'connect', 'watch']);
