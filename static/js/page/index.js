require.config({
  baseUrl : '../js',
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
  }
});


require(['jquery','tabView'],function($,tabview){
  new tabview.TabView().tab({
    control : '.tab-control',
    item : '.tab-item'
  }).tabActive({
    item : '.book-list'
  })
});

require(['jquery','slider'],function($){
  $('.banner-box').slider({
    speed : 500,
    autoTime : 3000
  }).on('mouseover',function(){
    $(this).find('.slider-prev,.slider-next').show();
  }).on('mouseout',function(){
    $(this).find('.slider-prev,.slider-next').hide();
  })
});

require(['jquery','common'],function($){
  $.allCommon();
});