require.config({
  baseUrl : '../js',
  paths : {
    jquery : './lib/jquery',
    tabView : './widget/tabView',
    checkLogin : './core/checkLogin',
    slider : './widget/slider',
    xhsdJson : './core/xhsdJson',
    getJsonName : './core/getJsonName',
    getUrl : './core/getUrl'
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


require(['jquery','getJsonName','getUrl'],function($,getname,geturl){
  var url = window.location.href;
  var store = new geturl.GetUrl().firstDomain(url);
  $('.wx').find('img').attr('src','/static/img/wx/'+store+'.jpg');

  $('#store').html(new getname.GetJsonName().getName(url)+'<i></i>');

  var path = '/page/index/news/'+store+'/news.inc';
  $.ajax({
    type : 'get',
    url : path,
    data : '',
    success : function(data){
      $('#news').html(data);
    }
  });
});