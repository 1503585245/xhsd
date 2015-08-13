/**
 * Created by Hina on 2015/8/13.
 */
define(['jquery'],function(){
  function WinBox(){
    this.opt = {

    }
  }
  WinBox.prototype = {
    alert : function(opts){
      $.extend(this.opt,opts);
    }
  }
});