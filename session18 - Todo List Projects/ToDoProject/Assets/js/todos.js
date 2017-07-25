// Cross out todo items on click
$('ul').on('click', "li", function(){
	$(this).toggleClass('completedTask');
});

// Span event listener for clicking the X on the li
// This approach is necessary rather than using $('li') with 'span' as the second argument because before creating a new li, that li does not exist and an event handler can not be placed on it
// By using the ul selector instead and applying the li > span as the second argument, we can gaurantee that any future span inside an li created will have the event handler applied.
$('ul').on('click', 'li > span', function(e){
	// Stop propagation prevents event bubbling, where an event triggers on parent event listeners as well and only triggers the specific element
	e.stopPropagation();

	// this here refers to the span that was clicked on
	$(this).parent().fadeOut(200, function(){
		// this here refers to the parent as that is what called .fadeOut
		$(this).remove();
	});
});

// Event listener to create a new todo item
$('input[type="text"]').keypress(function(e){
	// Check if enter key is pressed
	if (e.which === 13){

		// Append new <li> to <ul> list 
		$('#todoList').append("<li><span><i class='fa fa-trash'></i></span> " + $(this).val() + "</li>");

		// Clear text box
		$(this).val("");
	}
});

// Toggles the fade of the input and also the icon inside the h1 to be either plus or minus
// Once the fade is complete
$('h1 > i').click(function(){
	$('input[type="text"]').fadeToggle(function(){
		$('h1 > i').toggleClass('fa-minus');
		$('h1 > i').toggleClass('fa-plus');
	});
});