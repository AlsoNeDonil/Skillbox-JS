var firstName = prompt("Введите имя:");
var secondName = prompt("Введите фамилию:");

var birthYear = prompt("Когда вы родились:");
var currentYear = 2020;
var age = currentYear - birthYear;

if(age < 20)
{
	alert("Привет, " + firstName + " " + secondName + "!");
}
else if (age >= 20 && age < 40)
{
	alert("Добрый день, " + firstName + " " + secondName + "!");
}
else
{
	alert("Здравствуйте, " + firstName + " " + secondName + "!");
}