jQuery(document).ready(function () {
	console.log('doemais');

	if (window.location.pathname !== '/') {
		$(".navbar").addClass('bg-white');
	} else {
		$(window).scroll(function () {
			$(this).scrollTop() > $("#intro").height() ? $(".navbar").addClass('bg-white') : $(".navbar").removeClass('bg-white');
		});
	}

	$('#contact-form').submit(function (e) {
		window.location.href = '/thanks.html';
		return false;
	});

	$('#contact-form').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true
			},
			telephone: {
				required: true
			},
			subject: {
				required: true
			},
			message: {
				required: true
			}
		},
		messages: {
			name: {
				required: "Este campo é obrigatório."
			},
			email: {
				required: "Este campo é obrigatório."
			},
			telephone: {
				required: "Este campo é obrigatório."
			},
			subject: {
				required: "Este campo é obrigatório."
			},
			message: {
				required: "Este campo é obrigatório."
			}
		}
	});
});
