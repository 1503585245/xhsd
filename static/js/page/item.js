/**
 * Created by Hina on 2015/8/11.
 */
require.config({
  baseUrl : '../js',
  paths : {
    jquery : './lib/jquery',
    checkLogin : './core/checklogin'
  },
  urlArgs: "bust=" +  (new Date()).getTime()
});
require(['jquery'],function($){
  $('#nav .main-list').on('mouseover',function(){
    $(this).addClass('active');
  }).on('mouseout',function(){
    $(this).removeClass('active');
  });
});