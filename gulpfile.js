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
      tabView : './widget/tabView',
      checkLogin : './core/checkLogin',
      slider : './widget/slider',
      xhsdJson : './core/xhsdJson',
      getJsonName : './core/getJsonName',
      getUrl : './core/getUrl',
      scrollTo : './widget/scrollTo',
      backTop : './widget/backTop',
      common : './core/common'
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
      checkLogin : './core/checkLogin',
      xhsdJson : './core/xhsdJson',
      getJsonName : './core/getJsonName',
      getUrl : './core/getUrl',
      scrollTo : './widget/scrollTo',
      backTop : './widget/backTop',
      common : './core/common'
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