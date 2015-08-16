/**
 * Created by Hina on 2015/8/15.
 */
define(['jquery','checkLogin','getJsonName','backTop'],function($,checkLogin,getJsonName){
  function Common(){

  }
  Common.prototype = {
    navControl : function(){
      var $nav = $('#nav');
      var $mainList = $nav.find('.main-list');
      var $item = $mainList.find('.item');
      $mainList.on('mouseover',function(){
        $(this).addClass('active');
      }).on('mouseout',function(){
        $(this).removeClass('active');
      });
      $item.on('mouseover',function(){
        $(this).find('.sub-item').show();
      });
      $item.on('mouseout',function(){
        $(this).find('.sub-item').hide();
      });
      return this;
    },
    storeControl : function(){
      var $store = $('#store');
      $store.on('click',function(e){
        e.stopPropagation();
        $(this).hasClass('active')?$(this).removeClass('active'):$(this).addClass('active');
        $(this).next().toggle();
      });
      $('body').on('click',function(){
        $store.removeClass('active');
        $store.next().hide();
      });
      var url = window.location.href;
      $store.html(new getJsonName.GetJsonName().getName(url)+'<i></i>');
      return this;
    },
    backtopControl : function(){
      var $backtop = $('.backtop');
      $backtop.backtop();
      var width = $(window).width();
      $backtop.css({
        left : width/2+605+'px'
      });
      return this;
    },
    checkLoginControl : function(){
      new checkLogin.CheckLogin().init({
        url : '/browse/isLogined.jsp',
        handle : function(data){
          if(data.status == 1){
            $('.top-bar').find('.left').html(
              '<span>ÄúºÃ£¡'+data.username+'£¬»¶Ó­¹âÁÙ£¡ </span>'
            );
          }else{
            $('.top-bar').find('.left').html(
              '<span>ÄúºÃ£¡»¶Ó­¹âÁÙ£¡ </span>'+
              '<a href="http://www.zxhsd.com/Club/login.jsp">µÇÂ¼</a>'+
              '<span> | </span>'+
              '<a href="http://www.zxhsd.com/Club/register_first.jsp">×¢²á</a>'
            );
          }
        }
      });
      return this;
    }
  };

  $.extend({
    allCommon : function(){
      new Common()
        .navControl()
        .storeControl()
        .backtopControl()
        .checkLoginControl();
      return this;
    },
    navControl : function(){
      new Common().navControl();
      return this;
    },
    storeControl : function(){
      new Common().storeControl();
      return this;
    },
    backtopControl : function(){
      new Common().backtopControl();
      return this;
    },
    checkLoginControl : function(){
      new Common().checkLoginControl();
      return this;
    }
  });

  return {
    Common : Common
  }
});