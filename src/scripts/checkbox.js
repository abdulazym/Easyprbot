$('.status__check').click(function(){
	if ($(this).is(':checked')) {
		 $('.status__check').not(this).prop('checked', false);
	}
});