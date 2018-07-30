$(document).ready(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$('.owl-carousel').slick({
		loop:true,
		dots: true,
		arrows: false,
		items: 1,
		dotsSpeed : 600,
	});


	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
 		autoplaySpeed: 6500,
		dots: true,
		arrows: false,
		fade: true,
		infinite: true,
		asNavFor: '.slider-nav',
		fade: true,
		speed: 500,
	});
	$('.slider-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		asNavFor: '.slider-for',
		arrows: true,
		fade: true,
		speed: 500,
	});

	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".home_sect h2, .home_sect h4").animated("fadeInUp");
	$(".animate, .animat_footer p, .animat_footer .social, .animat_footer .last_text").animated("fadeInUp");

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
