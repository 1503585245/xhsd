define(['jquery'],function($){
  function CheckLogin(){
    this.opt = {
      type : "post",
      url : null,
      data : "",
      dataType : "json",
      handle : null
    }
  }
  CheckLogin.prototype = {
    init : function(opts){
      var opt = $.extend({},this.opt,opts);
      $.ajax({
        type : opt.type,
        url : opt.url,
        data : opt.data,
        dataType : opt.dataType,
        success : function(data)
        {
          opt.handle && opt.handle(data);
        }
      });
    }
  };
  return {
    CheckLogin : CheckLogin
  }
});
