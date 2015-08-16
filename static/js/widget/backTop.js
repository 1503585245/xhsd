/**
 * Created by Hina on 2015/8/14.
 */
define(['jquery','scrollTo'],function($,scrollto){
  function BackTop(el,opts){
    this.opt = {
      mode : 'move',
      ops : $(window).height(),
      speed : 800
    };
    this.$el = $(el);
    this.opt = $.extend({},this.opt,opts);
    this.scroll = new scrollto.ScrollTo({
      dest : 0,
      speed : this.opt.speed
    });

    this._checkPosition();
    if(this.opt.mode == 'move'){
      this.$el.on('click', $.proxy(this._move,this));
    }else{
      this.$el.on('click', $.proxy(this._go,this));
    }
    $(window).on('scroll', $.proxy(this._checkPosition,this));
  }

  BackTop.prototype = {
    _move : function(){
      this.scroll.move();
    },
    _go : function(){
      this.scroll.go();
    },
    _checkPosition : function(){
      var el = this.$el;
      if($(window).scrollTop()>this.opt.ops){
        el.fadeIn();
      }else{
        el.fadeOut();
      }
    }
  };

  $.fn.extend({
    backtop : function(opts){
      this.each(function(){
        new BackTop(this,opts)
      });
      return this;
    }
  });

  return {
    BackTop : BackTop
  }

});