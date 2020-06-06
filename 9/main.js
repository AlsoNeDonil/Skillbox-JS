//getting objects of entities
var list = document.querySelector(".list");
var input = document.querySelector(".input");
var button = document.querySelector(".button");

//add event listeners
button.addEventListener("click", function(event){
	var text = document.querySelector("input").value;
	document.querySelector("input").value = "";
	if(!text)
	{
		alert("Введите задачу!");
		return;
	}

	var newListItem = document.createElement("li");
	newListItem.innerText = text;
	list.appendChild(newListItem);
});

list.addEventListener("click", function(event)
{
	event.target.classList.toggle("done");
});