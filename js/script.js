$(document).ready(function(){

	// window.open

	$("#popup").click(function(){
		window.open("http://facebook.com", "_blank", "width:400px, height:400px");
	});

	//Gallery

	$("#all_img").click(function(){
		$(".interior").fadeIn(4000);
		$(".web_design").fadeIn(4000);
		$(".web_dev").fadeIn(4000);
	});

	$("#all_hide").click(function(){
		$(".interior").fadeOut(4000);
		$(".web_design").fadeOut(4000);
		$(".web_dev").fadeOut(4000);
	});
	
	$("#interior").click(function(){
		$(".interior").fadeIn(4000);
		$(".web_design").fadeOut(4000);
		$(".web_dev").fadeOut(4000);
	});
	
	$("#web_design").click(function(){
		$(".interior").fadeOut(4000);
		$(".web_design").fadeIn(4000);
		$(".web_dev").fadeOut(4000);
	});
	
	$("#web_dev").click(function(){
		$(".interior").fadeOut(4000);
		$(".web_design").fadeOut(4000);
		$(".web_dev").fadeIn(4000);
	});

});

// mouseenter | mouseleave | mouseup | mousedown |mousemove 
$(document).ready(function(){

});

 // keyup | keydown | focus | focusout | focusin
// $(document).ready(function(){
	
// 	$(":input:text").keyup(function(){
// 		alert("Yes. It's KEYUp");
// 	});

// 	$(":input:password").keydown(function(){
// 		alert("Yes. It's also work");
// 	});
//  });

//Password checker

$(document).ready(function(){

	$("#password_checker").keyup(function(){
		var password = $("#password_checker").val().length;
		
		if(password<1){
			$(".password_strength").text("");
			$(".password_strength").removeClass("red");
			$(".password_strength").removeClass("green");
			$(".password_strength").removeClass("orange");

		}else if(password < 6 ){

			$(".password_strength").text("Weak");
			$(".password_strength").addClass("red");
			$(".password_strength").removeClass("green");
			$(".password_strength").removeClass("orange");
		}else if(password<=10){
			$(".password_strength").text("Good");
			$(".password_strength").addClass("orange");
			$(".password_strength").removeClass("green");
			$(".password_strength").removeClass("red");
		}else{
			$(".password_strength").text("Strong");
			$(".password_strength").addClass("green");
			$(".password_strength").removeClass("red");
			$(".password_strength").removeClass("orange");
		};

	});


});

 // background color change 
 $(document).ready(function(){

 	var bg_color= $("#select_color").val();
 	$("body").css("background", bg_color);

 	$("#select_color").change(function(){
 		bg_color = $(this).val();
 		$("body").css("background", bg_color);
 	});


 });

 // Bind | Unbind
$(document).ready(function(){

	$("#bind").click(function(){
		$(".back").text("The text will be hide when mouseover");

		$(".back").bind('mouseover', function(){
			$(".back").hide(4000);
		});
	});

	$("#unbind").click(function(){
		$(".back").text("The text will not be hide when mouseover");

		$(".back").unbind("mouseover");
	});


});

// Counting Character Remaining on Textarea

$(document).ready(function(){

	var max_character =200;
	$(".character_remaining").text("You have remaining "+max_character+" character");

	$("#character").keyup(function(){
		var total_character = $("#character").val().length;
		var remain_character = max_character-total_character;
		$(".character_remaining").text("You have remaining " +remain_character+ "character");

	});

});

// toggle
$(document).ready(function(){

	$("#toggle").click(function(){
		$(".img_box").toggle(4000);
	});

	$("#slideup").click(function(){
		$(".img_box").slideUp(4000);
	});

	$("#slidedown").click(function(){
		$(".img_box").slideDown(4000);
	});

	$("#slidetoggle").click(function(){
		$(".img_box").slideToggle(4000);
	});

	$("#stop").click(function(){
		$(".img_box").stop();
	});

	$("#delay").click(function(){
		$(".img_box").delay(4000).slideToggle(4000);
	});


});