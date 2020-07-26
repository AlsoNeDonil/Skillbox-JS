var button = document.querySelector(".send");
var text_field = document.querySelector("input");

var access_key = "" // your access key

button.addEventListener("click", function(){
	window.fetch("http://api.weatherstack.com/current?access_key="+ access_key +"&query=" + text_field.value)
	.then(function(response){
		return response.json()
	})
	.then(function(response){
		if(typeof(response.success) == "undefined") // if this field doesn't exist, than the response isn't null
		{
			document.querySelector(".city").innerHTML = response.location.name;
			document.querySelector(".temperature").innerHTML = response.current.temperature;
			document.querySelector(".wind_speed").innerHTML = response.current.wind_speed;
			document.querySelector(".precipitation").innerHTML = response.current.precip;
		} else{ alert("City does not exist");}
	});
});
