(function(){
    var systemNumber = Math.floor(Math.random() * 10);
    var attemptCounter = 0;
    var maxAttempts = 5;

    var checkIfWin = function(userNum, ownNum)
    {
        if (!userNum)
        {
            alert("Попытка не пытка!");
            attemptCounter++;
            return false;
        }
    
        else if (isNaN(userNum))
        {
            alert("Введите число!");
            attemptCounter++;
            return false;
        }
    
        else if (Number(userNum) > ownNum && attemptCounter < maxAttempts)
        {
            alert("Меньше!");
            attemptCounter++;
            return false;
        }
    
        else if (Number(userNum) < ownNum && attemptCounter < maxAttempts)
        {
            alert("Больше!");
            attemptCounter++;
            return false;
        }
    
        else if(Number(userNum) == ownNum && attemptCounter < maxAttempts)
        {
            alert("Правильно!");
            return true;
        }
    }

    window.start = function()
    {
        debugger;
        do
        {
            var userNumber = prompt("Введите число");
            var result = checkIfWin(userNumber, systemNumber);
            
            if(attemptCounter >= maxAttempts)
            {
                alert("Количество попыток исчерпано!Приходите в другой раз!");
                break;
            }
        }
        while(!result && userNumber !== null);
    }

})()