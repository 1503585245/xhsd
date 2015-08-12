/**
 * Created by Hina on 2015/8/12.
 */
define([],function(){

  function GetUrl(){}
  GetUrl.prototype = {
    domain : function(url){
      if (url.indexOf('://') != -1){
        url = url.substr(url.indexOf('://') + 3);
      }
      var topLevel = ['com', 'net', 'org', 'gov', 'edu', 'mil', 'biz', 'name', 'info', 'mobi', 'pro', 'travel', 'museum', 'int', 'areo', 'post', 'rec'];
      var domains = url.split('.');
      if (domains.length <= 1){
        return url;
      }
      if (!isNaN(domains[domains.length - 1])){
        return url;
      }
      var i = 0;
      while(i < topLevel.length && topLevel[i] != domains[domains.length - 1]){
        i++;
      }
      if (i != topLevel.length){
        return domains[domains.length - 2] + '.' + domains[domains.length - 1];
      }else {
        i = 0;
        while (i < topLevel.length && topLevel[i] != domains[domains.length - 2]){
          i++;
        }
        if (i == topLevel.length){
          return domains[domains.length - 2] + '.' + domains[domains.length - 1];
        }
        else{
          return domains[domains.length - 3] + '.' + domains[domains.length - 2] + '.' + domains[domains.length - 1];
        }
      }
    },
    firstDomain : function(str){
      if (str.indexOf('://') != -1){
        str = str.substr(str.indexOf('://') + 3);
      }
      return str.split('.')[0].split('/')[0].split(':')[0];
    }
  };

  return {
    GetUrl : GetUrl
  }
});