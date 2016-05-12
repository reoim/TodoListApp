
//Check off specific Todos by clicking

// $("li").on("click", function(){
// 	$(this).toggleClass("done");
// });


/*
difference between above commented code and following code.
above code won't work for new todo ls elements. becuase event listner only added to existing "li"s.
follwing code add event listener to "ul" and have second argument "li". It will work on new "li"s.
*/
$("ul").on("click","li", function(){
	$(this).toggleClass("done");
});


//Click on X to delete Todo

// $("span").on("click", function(){
// 	$(this).parent().fadeOut(500, function(){ //$(this).parent() = li element. 
// 		$(this).remove(); //$(this) = li element
// 	})
// 	event.stopPropagation();
// }); 


/*
same problem as above code. 
use $("ul").on("click", "span", function(){}) instead of $(span).on("click", function(){})
*/
$("ul").on("click","span", function(){
	$(this).parent().fadeOut(500, function(){ //$(this).parent() = li element. 
		$(this).remove(); //$(this) = li element
	})
	event.stopPropagation();//stop other event. in this case, toggleClass("done") on "li"
}); 



$("input[type='text'").keypress(function(event){

	if(event.which===13){//check enter key
		var todoText = $(this).val();
		if(todoText){
			$(this).val("");//reset input field 
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		} 
	}

});

$(".fa-plus").click(function(){
	$("input[type='text").fadeToggle();
})