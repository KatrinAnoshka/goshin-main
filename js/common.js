$(function() {

	/* Adaptive menu */

    (function($){
      $(function() {
        $('.menu__icon').on('click', function() {
           $(this).closest('.mob-wrap').toggleClass('menu_state_open');
           $('.header-right').toggleClass('hidden-div');
        });
      });
    })(jQuery);

    /* Download file */

   	$("#upfile1").click(function () {
    	$("#file1").trigger('click');
	});

	/* Left-scroll */

	$(window).scroll(function(event){
		var body = $('body').scrollTop();
		if (body == 0) {
			var body = $('html').scrollTop();
		}
		var id = 'index';
		$('section').each(function(i,elem) {
		 	var top = $(elem).offset().top;
		 	if (top < body+200)
		 		id = $(elem).attr('id');
		});
		$('.scroll li').removeClass('active');
		$('.scroll li a[href="#' + id + '"]').parent().addClass('active');
		$('.menu li').removeClass('active');
		$('.menu li a[href="#' + id + '"]').parent().addClass('active');

	});
	
	$('.scroll a, .menu a').click(function(e) {
		e.preventDefault();
		var topOffset = $($(this).attr('href')).offset().top-$('header .fix-menu').outerHeight();
		$('html,body').animate({ scrollTop: topOffset }, 600);
	});
		
	/* Section-samples animation */

	$(".section-samples").waypoint(function() {
		$(".samples-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "50%"
	});

	/* Section-numbers animation */

	$(".section-number").waypoint(function() {
		$(".number-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 200*index);
		});
	}, {
		offset : "50%"
	});

	/* Animation */

	$(".header-bg a.button, .section-contract a.button").animated("flash");
	$(".item-deb").animated("zoomIn");
	$(".item-work").animated("zoomIn");
	
	/* Chrome Smooth Scroll */ 

	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	/* Pop-up-form */

	// $(".order-call, .call").click(function() {
	// 	$("#callback h4").html($(this).text());
	// 	$("#callback input[name=formname]").val($(this).text());
	// }).magnificPopup({
	// 	type:"inline",
	// 	mainClass: 'mfp-forms'
	// });
});


