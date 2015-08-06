/**
 * Created by Hina on 2015/8/6.
 */
/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2015 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var config = {
    app : 'static',
    dist : 'static/dist'
  };

  grunt.initConfig({

    config : config,
    stylus: {
      build: {
        options: {
          linenos: false,
          compress: true
        },
        files: [{
          expand: true,
          cwd: './static/css/page/',
          src: [ '*.styl' ],
          dest: './static/dist/css/',
          ext: '.css'
        }]
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "./static/js",
          paths : {
            jquery : './lib/jquery',
            tabview : './widget/tabview',
            checkLogin : './core/checklogin',
            slider : './widget/slider'
          },
          include : [
            'jquery',
            'tabview',
            'checkLogin',
            'slider',
            './page/index.js'
          ],
          out : './static/dist/js/index.js'
        }
      }
    }
  });
};






































