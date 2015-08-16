/**
 * Created by Hina on 2015/8/11.
 */
require.config({
  baseUrl : '../js',
  paths : {
    jquery : './lib/jquery',
    checkLogin : './core/checkLogin',
    xhsdJson : './core/xhsdJson',
    getJsonName : './core/getJsonName',
    getUrl : './core/getUrl',
    scrollTo : './widget/scrollTo',
    backTop : './widget/backTop',
    common : './core/common'
  }
});
require(['jquery','common'],function($){
  $.allCommon();
});