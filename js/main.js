function displayConstruction() {
	$(".overlay").fadeIn(500);
	$(".alert").show();

	$(".alert .button").click(function() {
		$(".overlay").fadeOut(500);
		$(".alert").hide();
	});

	$(".overlay").click(function() {
		$(".overlay").fadeOut(500);
		$(".alert").hide();
	});
}

$(window).load(
	function() {

		$(window).scrollTop(0);

		//displayConstruction();

		$(window).resize(function() {
			$('nav ul.links li, nav ul.social').removeAttr('style');
		});

    }

);

var toggleNav = function(x, open) {
    if (open) {
        $('nav ul.links li, nav ul.social').css('display', 'none');
        x.setAttribute('onclick', "javascript:toggleNav(this, false);")
    }
		
	else {
    	$('nav ul.links li, nav ul.social').css('display', 'block');
    	x.setAttribute('onclick', "javascript:toggleNav(this, true);")
	}
}

