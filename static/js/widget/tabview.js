define(['jquery'],function($){
  function TabView(){
    this.opt = {
      mode : 'mouseover',
      control : null,
      item : null
    };
    this.act = {
      mode : 'mouseover',
      item : null
    }
  }
  TabView.prototype = {
    tab : function(opts){
      var opt = $.extend({},this.opt,opts);
      $(opt.control).on(opt.mode,'li',function(){
        var $this = $(this);
        var index = $(this).index();
        $this.addClass('active').siblings().removeClass('active');
        $this.parent().parent().find(opt.item).eq(index).addClass('active').siblings().removeClass('active');
      });
      return this;
    },
    tabActive : function(acts){
      var act = $.extend({},this.act,acts);
      $(act.item).on(act.mode,'li',function(){
        var $this = $(this);
        $this.addClass('active').siblings().removeClass('active');
      });
      return this
    }
  };
  return {
    TabView : TabView
  }
});
