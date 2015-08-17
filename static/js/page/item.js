/**
 * Created by Hina on 2015/8/11.
 */
require.config({
  baseUrl : '../js',
  paths : {
    jquery : './lib/jquery',
    checkLogin : './core/checkLogin',
    xhsdJson : './core/xhsdJson',
    getJsonName : './core/getJsonName',
    getUrl : './core/getUrl',
    scrollTo : './widget/scrollTo',
    backTop : './widget/backTop',
    common : './core/common',
    sidebar : './core/sidebar'
  }
});
require(['jquery','common'],function($){
  $.allCommon();
  $('#add').on('click',function(){
    var v = $('#input-num').val();
    v = parseInt(v)+1;
    $('#input-num').val(v);
  });
  $('#min').on('click',function(){
    var v = $('#input-num').val();
    if(v<1){
      return;
    }else{
      $('#input-num').val(v-1);
    }
  });
  $('dd.more').on('click',function(){
    console.log($(this).prev());
    if($(this).prev().hasClass('active')){
      $(this).html('查看全部&gt;&gt;');
      $(this).prev().removeClass('active');
    }else{
      $(this).html('收起全部&lt;&lt;');
      $(this).prev().addClass('active');
    }
  })
});

require(['jquery','sidebar'],function($,sidebar){
  new sidebar.Sidebar({
    $el : $('.sidebar'),
    $child : $('.sidebar').find('li'),
    $item : $('.main-info').find('dl')
  })
});