/**
 * Created by Hina on 2015/8/12.
 */
define(['jquery','xhsdJson','getUrl'],function($,json,geturl){
  function GetJsonName(){

  }
  GetJsonName.prototype = {
    getName : function(url){
      var str = new geturl.GetUrl().firstDomain(url);
      return json[str];
    }
  };

  return {
    GetJsonName : GetJsonName
  }

});