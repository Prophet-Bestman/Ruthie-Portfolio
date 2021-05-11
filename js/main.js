$(document).ready(function () {
	//Testimonnial Carousel
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		autoplay: true,
		dots: true,
		smartSpeed: 2000,
		responsive: {
			0: {
				items: 1,
			},

			480: {
				items: 2,
			},

			1000: {
				items: 3,
			},
		},
	});

	// $(".navbar-dark > button").on("click", function () {
	// 	$(".navbar-dark").toggleClass("color-changed");
	// });
});
