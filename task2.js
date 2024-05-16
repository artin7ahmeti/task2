$(window).bind('scroll', function(e){
   parallaxScroll();
});

function parallaxScroll(){
   var scrolled = $(window).scrollTop();
   $('.layer-1').css('top', (0 - (scrolled * .25)) + 'px');
   $('.layer-2').css('top', (0 - (scrolled * .5)) + 'px');
   $('.layer-3').css('top', (0 - (scrolled * .75)) + 'px');
   $('.flower-1').css('top', (100 - (scrolled * .3)) + 'px');
   $('.flower-2').css('top', (150 - (scrolled * .4)) + 'px');
   $('.flower-3').css('top', (250 - (scrolled * .5)) + 'px');
   $('.flower-4').css('top', (300 - (scrolled * .6)) + 'px');
   $('.flower-5').css('top', (500 - (scrolled * .7)) + 'px');
   $('.flower-6').css('top', (600 - (scrolled * .8)) + 'px');
   $('.flower-7').css('top', (700 - (scrolled * .9)) + 'px');
   $('.flower-8').css('top', (800 - (scrolled * 1)) + 'px');
   $('.flower-9').css('top', (900 - (scrolled * 1.1)) + 'px');
}
