//getting objects of entities
var editable_text = document.querySelector(".editable_text");
var edit_button = document.querySelector(".edit");
var save_button = document.querySelector(".save");
var cancel_button = document.querySelector(".cancel");

//add event listeners
edit_button.addEventListener("click", function(event){
	editable_text.setAttribute("contenteditable", "true");
	
	edit_button.setAttribute("disabled", "true");
	save_button.disabled = false;
	cancel_button.disabled = false;
});

save_button.addEventListener("click", function(event){
	localStorage.setItem("saved_text", editable_text.textContent);
	edit_button.disabled = false;
	save_button.disabled = true;
	cancel_button.disabled = true;
});

cancel_button.addEventListener("click", function(event){
	editable_text.textContent = localStorage.getItem("saved_text");

	editable_text.setAttribute("contenteditable", "false");
	
	edit_button.disabled = false;
	save_button.disabled = true;
	cancel_button.disabled = true;
});
