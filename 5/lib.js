(function(){
    var attemptCounter = 5;
    var systemNumber = Math.floor(Math.random() * 10);

    var checkIfWin = function(num)
    {
        if(--attemptCounter > 0)
        {
            if(isNaN(num))
            {
                alert('Вы должны ввести число!');
                var newNum = prompt('Введите число:');
                return checkIfWin(newNum);
            }
            if(Number(num) > systemNumber)
            {
                alert('Меньше');
                var newNum = prompt('Введите число:');
                return checkIfWin(newNum);
            }

            else if(Number(num) < systemNumber)
            {
                alert('Больше');
                var newNum = prompt('Введите число:');
                return checkIfWin(newNum);
            }

            else if(Number(num) == systemNumber)
            {
                return true;
            }
        }
        else
        {
            var answer = confirm('У вас закончились попытки! Хотите сыграть еще раз?');
            if(answer)
            {
                systemNumber = Math.floor(Math.random() * 10); 
                attemptCounter = 5;
                var newNum = prompt('Введите число:');
                return checkIfWin(newNum);
            }
            return false;
        } 
    }

    window.start = function()
    {
        var num = prompt('Введите число:');
        if(checkIfWin(num))
        {
            alert('Поздравляем! Вы угадали число!!!');
            return;
        }

        alert('Приходите еще(((');
    }
})()