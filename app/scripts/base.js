$(document).ready(function() {

	$('#sidebar').affix({
	    offset: {
	        top: $('.jumbotron').height()
	    }
	});

 $(".male").click( function(){
     console.log('male button clicked');
    });
 $(".female").click( function(){
     console.log('female button clicked');
    });

});
