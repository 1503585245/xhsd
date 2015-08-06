define(['jquery'],function($){
  function Slider(){
    this.opt = {
      left : 0,
      top : 0,
      speed : 500,
      autoTime : 2000,
      prevNext : null
    };
    this.element = {
      width : 0,
      left : 0,
      totleWidth : 0,
      slider : null,
      sliderList : null,
      sliderItem : null,
      sliderBtn : null,
      sliderPrev : null,
      sliderNext : null
    }
  }
  Slider.prototype = {
    create : function(el,opts){
      $.extend(this.opt,opts);

      var slider = $(el).find('.slider');
      var sliderList = slider.find('.slider-list');
      var sliderItem = sliderList.find('.slider-item');

      var len = sliderItem.length;
      var str = '<ul class="slider-btn-box">';
      for(var i=0;i<len;i++){
        str += '<li class="slider-btn"></li>';
      }
      str += '</ul>';

      var btnBox = $(str);
      btnBox.appendTo(slider);
      var btn = $(el).find('.slider-btn');
      btn.eq(0).addClass('active');
      var width = $(el).width();
      var totleWidth = width * len;
      sliderList.width(totleWidth);

      var prev = $('<div class="slider-prev"></div>');
      var next = $('<div class="slider-next"></div>');
      prev.appendTo(slider);
      next.appendTo(slider);

      this.element.width = width;
      this.element.totleWidth = totleWidth;
      this.element.slider = slider;
      this.element.sliderList = sliderList;
      this.element.sliderItem = sliderItem;
      this.element.sliderBtn = btn;
      this.element.sliderPrev = $(el).find('.slider-prev');
      this.element.sliderNext = $(el).find('.slider-next');

      return this;
    },
    move : function(){
      var opt = this.opt;
      var el = this.element;
      var left = el.left;
      var index = 0;
      var width = el.width;
      var totleWidth = el.totleWidth;
      var timer = null;


      function animate(offset){

        if(offset < 0 && left == -totleWidth){
          left = 0;
        }else if(offset > 0 && left == 0){
          left = -totleWidth;
        }else{
          left += offset;
        }

        el.sliderList.animate({left : left},opt.speed);
        index = -(left/width);
        el.sliderBtn.eq(index).addClass('active').siblings().removeClass('active');
      }

      function play(){
        timer = setInterval(function(){
          if(index == el.sliderBtn.length-1){
            animate(totleWidth-width);
            return;
          }
          animate(-width);
        },opt.autoTime);
      }

      function stop(){
        clearInterval(timer);
      }

      el.sliderBtn.on('click',function(){
        var i = $(this).index();
        animate((index-i)*el.width);
      });
      el.sliderPrev.on('click',function(){
        if(index == 0){
          animate(-totleWidth+width);
          return;
        }
        animate(width);
      });
      el.sliderNext.on('click',function(){
        if(index == el.sliderBtn.length-1){
          animate(totleWidth-width);
          return;
        }
        animate(-width);
      });

      el.slider.on('mouseover',function(){
        stop();
      }).on('mouseout',function(){
        play();
      });
      play();

      return this;
    }
  };

  $.fn.extend({
    slider : function(opt){
      var that = $(this);
      new Slider().create(that,opt).move();
    }
  });

  return {
    Slider : Slider
  }
});
