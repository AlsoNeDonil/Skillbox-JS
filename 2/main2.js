var firstYear = Number(prompt("Введите начальный год:"));
var lastYear = Number(prompt("Введите конечный год:"));

if (firstYear > lastYear)
{
	var tmp = firstYear;
	firstYear = lastYear;
	lastYear = tmp;
}

for(var i = firstYear; i <= lastYear; i++)
{
	if(i % 400 == 0  || (i % 100 != 0 && i % 4 == 0))
	{
		console.log(i);
	}
}	
