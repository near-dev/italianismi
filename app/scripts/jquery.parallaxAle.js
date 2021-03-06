/*copyright 2012 robert w. stewart torontographic.com*/
;(function($) {
$.fn.parallaxSwipe = function(options) {
var defaults = {DECAY:0.9, MOUSEDOWN_DECAY:0.5, SPEED_SPRING:0.5, BOUNCE_SPRING:0.08,
  HORIZ:true, SNAPDISTANCE:20, DISABLELINKS:true, LAYER:[]
};
var o = $.extend(defaults, options);
var plugin = this; //jQuery object or a collection of jQuery objects.
var elm = document.getElementById(plugin.attr('id')); //instance
var panel = plugin.children(".panel"); // panels inside slider.
var vw = parseInt(plugin.parents('div').css('width'),10);  //viewport width.
var vh = parseInt(plugin.parents('div').css('height'),10); //viewport height.
var _velocity = 0, _velocity2 = 0;
var bouncing = 0, _mouseDownLT, _mouseDownXY, _lastMouseDownXY, panelnum=1;
var edge, sliderLT, sliderLen, _mouseDown = false, ie = false, hasTouch = false, VIEWPORT, len;
window.startAnimFrame=false;

if (o.HORIZ==true) {
  var sliderW = parseInt(panel.css('width'),10) * panel.length;
  VIEWPORT=vw; edge='left'; panel.css('float','left'); plugin.css('width',sliderW); sliderLen = sliderW;
} else {
  var sliderH = parseInt(panel.css('height'),10) * panel.length;
  // ale: + 750 per evitare il fondo che va troppo avanti
  VIEWPORT=vh + 100; edge='top'; panel.css('float','none'); plugin.css('height',sliderH); sliderLen = sliderH;
}

this.parallaxSwipe.getSize = function(i){ if (sliderW>'') { return sliderW; } else { return sliderH; }};

window.setTimeout(function() {
	$('#layer1, #layer2').css(edge, '0px'); $('#layer2 .logo, #cominciare, #lang').css('opacity', 1); 
	$('#top, #top_bk').css('opacity', 0);
}, 200); 

var mouseswipe=function(sliderLT) {

  //$('#entra').css('opacity', Math.max(0, Math.min(1, 1+((88 + parseInt(plugin.css(edge))) / 72))));
  $('#layer2 .logo').css('opacity', Math.max(0, Math.min(1, 1+((450 + parseInt(plugin.css(edge))) / 350))));
  $('#cominciare').css('opacity', Math.max(0, Math.min(1, 1+((140 + parseInt(plugin.css(edge))) / 72))));
  $('#lang').css('opacity', Math.max(0, Math.min(1, 1+((-60 + parseInt(plugin.css(edge))) / -72))));
  $('#top').css('opacity', Math.max(0, Math.min(1, 0-((200 + parseInt(plugin.css(edge))) / 1000))));
  $('#top_bk').css('opacity', Math.max(0, Math.min(1, 0-((200 + parseInt(plugin.css(edge))) / 1000))));
  $('#entra_uno').css('zoom', Math.max(0, Math.min(1, 0.5-((1800 + parseInt(plugin.css(edge))) / 800))));
  $('#entra_due').css('zoom', Math.max(0, Math.min(1, 0.5-((6000 + parseInt(plugin.css(edge))) / 800))));
  

  if (_mouseDown) {
    _velocity *= o.MOUSEDOWN_DECAY;
  } else {
    _velocity *= o.DECAY;
  }
  
  if (!_mouseDown) {
    if (sliderLT > 0)  {
      bouncing = -sliderLT * o.BOUNCE_SPRING;
    } else if (sliderLT + sliderLen < VIEWPORT) {
      bouncing = (VIEWPORT - sliderLen - sliderLT) * o.BOUNCE_SPRING;
    } else { bouncing = 0; }
    if (_lastMouseDownXY-_mouseDownXY < 0) {
      plugin.css(edge,sliderLT + Math.ceil(_velocity + bouncing)); //swipe left
      if (o.LAYER.length>0) {
        $.each(o.LAYER, function(index, value) {
          $('#layer'+(index+1)).css(edge,(sliderLT + Math.ceil(_velocity + bouncing))/value); //layer
        });
      }
    } else {
      plugin.css(edge,sliderLT + Math.floor(_velocity + bouncing)); //swipe right
      if (o.LAYER.length>0) {
        $.each(o.LAYER, function(index, value) {
          $('#layer'+(index+1)).css(edge,(sliderLT + Math.floor(_velocity + bouncing))/value); //layer
        });
      }
    }
}};

window.requestAnimFrame = function(){ 
  return ( window.requestAnimationFrame || window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || 
  function(callback){ if (window.x === true) window.setTimeout(callback, 1000 / 60); } );
}();

function frame() { mouseswipe(parseInt(plugin.css(edge),10)); if (window.startAnimFrame == true) { requestAnimFrame(frame); } };

var disablelinks=function() {
  $('a', plugin).each(function(){ 
  $(this).click(function(){ if(Math.abs(_lastMouseDownXY-_mouseDownXY) >= o.SNAPDISTANCE) {return false;} }); 
}); 
};

var touchStart=function(e) { //mouse down
  if (!_mouseDown) {
    if (hasTouch) { e.preventDefault(); e = event.touches[0]; } else { if (!e) e = window.event; }
    if (elm.setCapture) {
      elm.setCapture(); //if dragged outside of div
    } else {
      window.addEventListener('mousemove', touchMove, false);
      window.addEventListener('mouseup', touchEnd, false);
    }
    if (o.HORIZ==true) {
      _mouseDownXY = _lastMouseDownXY = ie == true ? e.clientX : e.pageX;
      _mouseDownLT = document.getElementById(plugin.attr('id')).offsetLeft;
    } else {
      _mouseDownXY = _lastMouseDownXY = ie == true ? e.clientY : e.pageY;
      _mouseDownLT = document.getElementById(plugin.attr('id')).offsetTop;
    }
    _mouseDown = true;
    if (window.startAnimFrame==false) { window.startAnimFrame=true; requestAnimFrame(frame); } //mouseSwipe
  }
};

var touchMove=function(e) { //mouse move

  if (_mouseDown) {

    if (hasTouch) { e.preventDefault(); e = event.touches[0]; } else { if (!e) e = window.event; }
    if (ie == true) {
      var MouseXY = edge == 'left' ? e.clientX : e.clientY;
    } else {
      var MouseXY = edge == 'left' ? e.pageX : e.pageY;
    }
    plugin.css(edge, _mouseDownLT + (MouseXY - _mouseDownXY));
    if (o.LAYER.length>0) {
      $.each(o.LAYER, function(index, value) {
        $('#layer'+(index+1)).css(edge, (_mouseDownLT + (MouseXY - _mouseDownXY))/value); //layer
      });
    }
    _velocity += ((MouseXY - _lastMouseDownXY) * o.SPEED_SPRING);
    _lastMouseDownXY = MouseXY;

    $('#layer2 .logo').css('opacity', Math.max(0, Math.min(1, 1+((450 + parseInt(plugin.css(edge))) / 350))));
    $('#cominciare').css('opacity', Math.max(0, Math.min(1, 1+((140 + parseInt(plugin.css(edge))) / 72))));
    $('#lang').css('opacity', Math.max(0, Math.min(1, 1+((-60 + parseInt(plugin.css(edge))) / -72))));
    $('#top').css('opacity', Math.max(0, Math.min(1, 0-((200 + parseInt(plugin.css(edge))) / 1000))));
    $('#top_bk').css('opacity', Math.max(0, Math.min(1, 0-((200 + parseInt(plugin.css(edge))) / 1000))));
    $('#entra_uno').css('zoom', Math.max(0, Math.min(1, 0.5-((1800 + parseInt(plugin.css(edge))) / 800))));
    $('#entra_due').css('zoom', Math.max(0, Math.min(1, 0.5-((6000 + parseInt(plugin.css(edge))) / 800))));
    
  }

};

var touchEnd=function(e) { //mouse up
  if (_mouseDown) {
      _mouseDown = false;
      disablelinks();
    if (elm.setCapture) { 
      elm.releaseCapture();
    } else { 
    window.removeEventListener('mousemove', touchMove, false);
    window.removeEventListener('mouseup', touchEnd, false);
    }
  }
};

hasTouch = 'ontouchstart' in window;
plugin.bind('mousedown touchstart', function(event){ touchStart(event); window.idleTime = 0;}); 
plugin.bind('mousemove touchmove', function(event){ touchMove(event); window.idleTime = 0; }); 
plugin.bind('mouseup touchend', function(event){ touchEnd(event); window.idleTime = 0; });



} //end options
})(jQuery)