$('.status__check').click(function(){
	if ($(this).is(':checked')) {
		 $('.status__check').not(this).prop('checked', false);
	}
});

$('.format__check').click(function(){
	if ($(this).is(':checked')) {
		 $('.format__check').not(this).prop('checked', false);
	}
});

$('.who__check').click(function(){
	if ($(this).is(':checked')) {
		 $('.who__check').not(this).prop('checked', false);
	}
});