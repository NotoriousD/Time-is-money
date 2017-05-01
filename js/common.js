$(document).ready(function(){


  var owl = $(".owl-carousel");
  owl.owlCarousel({
	items : 1,
	loop : true,
  });
  
  $(".next_button").click(function(){
		owl.trigger("owl.next");
  });
  $(".prev_button").click(function(){
		owl.trigger("owl.prev");
  });

  var header = new Headhesive('.header');

  var options = {
  offset: 700
  }

  $("input, select, textarea").jqBootstrapValidation();

  $(".main_mnu li a").mPageScroll2id();

  $(".but_toggle2").hover(function(){
    $("#hblock2").toggleClass("hblockcolor");
  });


  $(".but_toggle3").hover(function(){
    $("#hblock3").toggleClass("hblockcolor");
  });

  $(".toggle_mnu").click(function(){
  	$(".main_mnu").toggleClass("active_main_mnu");
  });

  $(".main_mnu a").click(function() {
		$(".main_mnu").toggleClass("active_main_mnu");
  });

  

  $(".but_toggle1").hover(function(){
    $("#hblock1").toggleClass("hblockcolor");
  });

});