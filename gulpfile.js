/**
 * Created by hina on 8/6/15.
 */
var gulp = require('gulp');
var rjs = require('gulp-requirejs');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('index',function(){
  rjs({
    baseUrl : 'static/js',
    out : 'index.js',
    paths : {
      jquery : './lib/jquery',
      tabview : './widget/tabview',
      checkLogin : './core/checklogin',
      slider : './widget/slider'
    },
    include : [
      './page/index.js'
    ]
  }).pipe(uglify()).pipe(gulp.dest('static/dist/js/'));
});

gulp.task('item',function(){
  rjs({
    baseUrl : 'static/js',
    out : 'item.js',
    paths : {
      jquery : './lib/jquery',
      checkLogin : './core/checklogin',
    },
    include : [
      './page/item.js'
    ]
  }).pipe(uglify()).pipe(gulp.dest('static/dist/js/'));
});

gulp.task('styl',function(){
  gulp.src('./static/css/page/*.styl').pipe(stylus({
    compress: true
  })).pipe(gulp.dest('./static/dist/css'));
});