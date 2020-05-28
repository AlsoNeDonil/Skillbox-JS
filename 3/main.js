function checkIfWin(userNum, ownNum)
{
	if (!userNum)
		alert("Попытка не пытка");
	
	else if (isNaN(userNum))
		alert("Введите число!");

	else if (Number(userNum) > ownNum )
		alert("Меньше!");
		

	else if (Number(userNum) < ownNum )
		alert("Больше!");

	else
	{
		alert("Правильно!");
		return true;
	}

	attem
	return false;
}

var systemNumber = Math.floor(Math.random() * 1000);
alert(systemNumber) // delete this line or try to win  

do
{
	var userNumber = prompt("Введите число");
	var result = checkIfWin(userNumber, systemNumber);

} while(!result && userNumber !== null);
