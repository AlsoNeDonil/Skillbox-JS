//getting objects of entities
list = document.querySelector(".list");
input = document.querySelector(".input");
button = document.querySelector(".button");

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