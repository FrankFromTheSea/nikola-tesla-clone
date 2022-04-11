$(document).ready(function() {
$(document).scroll(function() {
	var compensation = $(window).height() / 2;
	 var uno = ($('.model-y').offset().top) - compensation;
	 var due = ($('.model-3').offset().top) - compensation;
	 var tre = ($('.model-s').offset().top) - compensation;
	 var quattro = ($('.model-x').offset().top) - compensation;
	 var cinque = ($('.solar').offset().top) - compensation;
	 var sei = ($('.accesories').offset().top) - compensation;
	 var scrollPos = $(document).scrollTop();





	 	// $('h1').css('opacity', 1 - $(window).scrollTop()/500);
	



	
	 
	 	 
	
	
	


  	if(scrollPos < due) {
  		$('h1').text('Model Y');	
  	}
  	else if(scrollPos >= due && scrollPos < tre) {
  		$('h1').text('Model 3');
  	}
  	else if(scrollPos >= tre && scrollPos < quattro) {
  		$('h1').text('Model S');
  	}
  	else if(scrollPos >= quattro && scrollPos < cinque) {
  		$('h1').text('Model X');
  	}
  	else if(scrollPos >= cinque && scrollPos < sei) {
  		$('h1').text('Impianto fotovoltaico e Powerwall');
  	}
  	else if(scrollPos >= sei) {
  		$('h1').text('Accessories');
  	}

});
$(document).ready(function(){
    $(this).scrollTop(0);
});
	

});
