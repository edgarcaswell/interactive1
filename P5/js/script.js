$(document).ready(function(){
	
	$('body').mousemove(function(e){
		
		// try switching the 'top' and 'left' values
		$('#trail').css({ 'top': e.pageY, 'left': e.pageX });
	});
});