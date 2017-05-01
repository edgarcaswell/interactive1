$(document).ready(function(){
	// your code here

	//alert('hi');

	var n = 1;

	$('#content').click(function(){
		
		$('#content') .html('Im changing. Im evolving.');

		$('#content') .css('color', 'rgb('+n+','+n+','+n+')');

		// $('#body') .css('background-color', 'rgb('+redValue+','+blueValue+','+redValue+')');

		alert(n);

		n = n +10;

		// var redValue = Math.floor(Math.random()*255);

	});

		
	// n = 0;
	// $('body').click(function(){
	// 	n = n + 1;	
	// 	$('#pass').css('opacity', n/20);
	// });

	// $('body').mousemove(function(e){
	// 	$('#pass').css('opacity', + (e.pageY) / 10000);
	// });
	

});