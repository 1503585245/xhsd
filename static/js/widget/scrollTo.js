/**
 * Created by Hina on 2015/8/13.
 */
define(['jquery'],function(){
  function ScrollTo(opts){
    this.opt = {
      dest : 0,
      speed : 800
    };
    this.opt = $.extend({},this.opt,opts);
    this.$el = $('html,body')
  }

  ScrollTo.prototype = {
    move : function(){
      var opts = this.opt;
      if($(window).scrollTop() != opts.dest){
        if(!this.$el.is(':animated')){
          this.$el.animate({
            scrollTop : opts.dest
          },opts.speed);
        }
      }
    },
    go : function(){
      var dest = this.opt.dest;
      if($(window).scrollTop() != dest){
        this.$el.scrollTop(dest);
      }
    }
  };
  return {
    ScrollTo : ScrollTo
  }
});