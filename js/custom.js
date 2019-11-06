/* global $, alert, console */

/*$(	function(){
	"use strict";
	
	// Trigger Nice Scroll
	$("html").niceScroll({
		cursorcolor: '#888',
		cursorwidth: '8',
		cursorborder: '1px solid #888',
		cursorborderradius: 8
	});
});*/

// Loading Website
$(window).on('load', function(){
	"use strict";
	$(".loading .sk-circle").fadeOut("slow", function(){
		$(this).parent().fadeOut(1000, function(){
			$("body").css("overflow", "auto");
			$(this).remove();
		});
	});
});


$(document).ready(function(){
	"use strict";
	// Trigger Nice Scroll
	$("html").niceScroll({
		railpadding: {top: 70, right: 0, left: 0, bottom: -100},
		cursorcolor: '#888',
		cursorwidth: '8',
		cursorborder: '1px solid #888',
		cursorborderradius: 8
	});
	
	// Making a Button to scroll to top
	var scrollButtonTop = $("#scroll_top");
	$(window).scroll(function(){if($(this).scrollTop() >= 700){scrollButtonTop.show();} else{scrollButtonTop.hide();}});
	// Scrolling to Top
	scrollButtonTop.click(function(){$("html, body").animate({scrollTop: 0}, 600);});
	
	// Show Color Option when Click on the gear icon
	$(".gear-check").click(function(){$(".color-option").fadeToggle();});
	
	// Change Theme Color on click
	var colorLi = $(".color-option ul li");
	colorLi
		.eq(0).css("backgroundColor", "#BBB").end()
		.eq(1).css("backgroundColor", "#000").end()
		.eq(2).css("backgroundColor", "#00F").end()
		.eq(3).css("backgroundColor", "#080").end()
		.eq(4).css("backgroundColor", "#E426D5").end()
		.eq(5).css("backgroundColor", "yellow");
		
	colorLi.click(function(){$("link[href*='theme']").attr("href", $(this).attr("data-value"));});
	
	// Carousel
	$('.carousel').carousel({interval: 4000});
});
