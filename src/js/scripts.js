$(document).ready(function () {
	console.log('doemais');

	if (window.location.pathname !== '/') {
		$(".navbar").addClass('bg-white');
	} else {
		$(window).scroll(function () {
			$(this).scrollTop() > $("#intro").height() ? $(".navbar").addClass('bg-white') : $(".navbar").removeClass('bg-white');
		});
	}

	$("#contact-form").submit(function (e) {
		window.location.href = '/thanks.html';

		e.preventDefault();
	});
});
