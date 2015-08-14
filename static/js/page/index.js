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
    backTop : './widget/backTop'
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

require(['jquery','backTop'],function($,backtop){
  new backtop.BackTop('',{
    mode : 'move'
  });
  var width = $(window).width();
  $('.backtop').css({
    left : width/2+605+'px'
  })
});

require(['jquery','getJsonName','getUrl'],function($,getname,geturl){
  var url = window.location.href;
  var store = new geturl.GetUrl().firstDomain(url);
  $('.wx').find('img').attr('src','/static/img/wx/'+store+'.jpg');
  $('#store').html(new getname.GetJsonName().getName(url)+'<i></i>');
  var aPathDshd = '/page/index/dshd/'+store+'/index_1.shtml';
  $('#dshd-a').attr('href',aPathDshd);
  var pathNews = '/page/index/news/'+store+'/news.ajaxinc';
  var pathDshd = '/page/index/dshd/'+store+'/dshd.ajaxinc';

  $.ajax({
    type : 'get',
    url : pathNews,
    dataType : 'text',
    success : function(data){
      $('#news').html(data);
    }
  });
  $.ajax({
    type : 'get',
    url : pathDshd,
    dataType : 'text',
    success : function(data){
      $('#dshd').html(data);
    }
  });
});

require(['jquery'],function($){
  $('.main-list .item').on('mouseover',function(){
    $(this).find('.sub-item').show();
  });
  $('.main-list .item').on('mouseout',function(){
    $(this).find('.sub-item').hide();
  });
  $('#store').on('click',function(e){
    e.stopPropagation();
    $(this).hasClass('active')?$(this).removeClass('active'):$(this).addClass('active');
    $(this).next().toggle();
  });
  $('body').on('click',function(){
    $('#store').removeClass('active')
    $('#store').next().hide();
  });
});