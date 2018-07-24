$(function() {

	/* Adaptive menu */

    (function($){
      $(function() {
        $('.menu__icon').on('click', function() {
          $(this).closest('.mob-wrap').toggleClass('menu_state_open');
        });
      });
    })(jQuery);

    /* Download file */

   	$("#upfile1").click(function () {
    	$("#file1").trigger('click');
	});

	/* Animation */

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
		
		
		var top = $('.counter').offset().top-$(window).height();

		if (top < body) {
			if (counter == 0) {
				counter = 1;
				

				$({
					n: 0
					}).animate({
						n: count0
					}, {
					duration: 200E1,
						step: function (a) {
						$("#counter-0").html(a | 0)
					}
				});

				$({
					n: 0
					}).animate({
						n: count1
					}, {
					duration: 200E1,
						step: function (a) {
						$("#counter-1").html(a | 0)
					}
				});	
				$({
					n: 0
					}).animate({
						n: count2
					}, {
					duration: 200E1,
						step: function (a) {
						$("#counter-2").html(a | 0)
					}
				});				

			}
		}

	});
	
	$('.scroll a, .menu a').click(function(e) {
		e.preventDefault();
		var topOffset = $($(this).attr('href')).offset().top-$('header .fix-menu').outerHeight();
		$('html,body').animate({ scrollTop: topOffset }, 600);
	});
	

	/* Chrome Smooth Scroll */ 

	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	/********** Pop-up-form **********/

	// $(".order-call, .call").click(function() {
	// 	$("#callback h4").html($(this).text());
	// 	$("#callback input[name=formname]").val($(this).text());
	// }).magnificPopup({
	// 	type:"inline",
	// 	mainClass: 'mfp-forms'
	// });
});


