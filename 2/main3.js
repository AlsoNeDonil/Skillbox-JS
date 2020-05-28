var result = 0;

while(true)
{
	var tmp = prompt("Введите число");
	if (tmp == null) 
		break;
	if(!isNaN(tmp))
		result += Number(tmp);
}

alert(result);