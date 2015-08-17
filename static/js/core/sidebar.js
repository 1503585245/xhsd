/**
 * Created by Hina on 2015/8/17.
 */
define(['jquery'],function($){
  function Sidebar(opts){
    this.opt = {
      dest : 600,
      speed : 200,
      $el : null,
      $child : null,
      $item : null,
      pos : []
    };
    this.opt = $.extend({},this.opt,opts);
    this.fadeInOut().reach().checkPos();
    $(window).on('scroll',$.proxy(this.checkPos,this));
    $(window).on('scroll',$.proxy(this.fadeInOut,this));

  }
  Sidebar.prototype = {
    fadeInOut : function(){
      var opt = this.opt;
      opt.$el.css({
        left : $(window).width()/2+515+'px'
      });
      if($(window).scrollTop() > opt.dest && $(window).scrollTop() < $(document).height()-800){
        opt.$el.fadeIn();
      }else{
        opt.$el.fadeOut();
      }
      return this;
    },
    reach : function(){
      var opt = this.opt;
      opt.$child.on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index = $(this).index();
        opt.$item.eq(index).animate({
          scrollTop : opt.$item.eq(index).scrollTop
        },opt.speed);
      });
      return this;
    },
    checkPos : function(){
      var opt = this.opt;
      for(var i=0;i<opt.$item.length;i++){
        this.opt.pos[i] = opt.$item.eq(i).offset().top;
      }
      if(this.opt.pos[0]>$(window).scrollTop()){
        opt.$child.eq(0).addClass('active').siblings().removeClass('active');
      }
      else{
        for(var i=1;i<opt.$item.length-1;i++){
          if(this.opt.pos[i]<$(window).scrollTop()&&this.opt.pos[i+1]>$(window).scrollTop()){
            opt.$child.eq(i).addClass('active').siblings().removeClass('active');
          }
        }
        if($(window).scrollTop()>this.opt.pos[opt.$item.length-1]){
          opt.$child.eq(opt.$item.length-1).addClass('active').siblings().removeClass('active');
        }
      }
      return this;
    }
  };
  return {
    Sidebar : Sidebar
  }
});