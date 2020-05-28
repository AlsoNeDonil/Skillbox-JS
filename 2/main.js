var firstNumber = prompt("Введите первое число:");
var secondNumber = prompt("Введите второе число:");

if (isNaN(firstNumber))
{
	alert("Первое число не совсем число!");
}

if (isNaN(secondNumber))
{
	alert("Второе число не совсем число!");
}

if(!isNaN(firstNumber) && !isNaN(firstNumber))
{
	if(Number(firstNumber) < Number(secondNumber))
	{
		alert("Второе число больше первого");
	}

	else if(Number(firstNumber) > Number(secondNumber))
	{
		alert("Первое число больше второго");
	}

	else
	{
		alert("Числа равны");
	}
}
