require.config({
  baseUrl : '../js',
  paths : {
    jquery : './lib/jquery',
    jqueryUI : './lib/jquery-ui',
    tabview : './widget/tabview',
    checkLogin : './core/checklogin',
    slider : './widget/slider'
  },
  urlArgs: "bust=" +  (new Date()).getTime()
});


require(['jquery','checkLogin'],function($,checklogin){
  new checklogin.CheckLogin().init({
    url : '/browse/isLogined.jsp',
    handle : function(data){
      if(data.status == 1){
        $('.top-bar').find('.left').html(
          '<span>您好！'+data.username+'，欢迎光临！ </span>'
        );
      }else{
        $('.top-bar').find('.left').html(
          '<span>您好！欢迎光临！ </span>'+
          '<a href="http://www.zxhsd.com/Club/login.jsp">登录</a>'+
          '<span> | </span>'+
          '<a href="http://www.zxhsd.com/Club/register_first.jsp">注册</a>'
        );
      }
    }
  });
});

require(['jquery','tabview'],function($,tabview){
  new tabview.TabView().tab({
    control : '.tab-control',
    item : '.tab-item'
  }).tabActive({
    item : '.book-list'
  })
});

require(['jquery','slider'],function($,slider){
  $('.banner-box').slider({
    speed : 500,
    autoTime : 3000
  })
});

