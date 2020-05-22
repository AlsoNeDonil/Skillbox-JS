var mounthsArr = ["января", "февраля",
              "марта", "апреля", "мая",
              "июня", "июля", "августа",
              "сентября", "октября", "ноября",
              "декабря"];
var daysArr = ["воскресенье", "понедельник", "вторник",
            "среда", "четверг", "пятница", "суббота"];

function getDate()
{
  var currentTime = new Date();

  var year = currentTime.getFullYear();
  var mounth = currentTime.getMonth();
  var date = currentTime.getDate();
  var day = currentTime.getDay();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  
  console.log("Сегодня " + date + " " + mounthsArr[mounth] + " " + year + " года, " +
  daysArr[day] + " " + hours + " " + getEnd(hours, 'часов', 'час', 'часа') + " " + minutes +
  " " + getEnd(minutes, 'минут', 'минута', 'минуты') + " " + seconds + 
  " " + getEnd(seconds, 'секунд', 'секунда', 'секунды'));
}

function getEnd(value, endFirst, endSecond, endThird)
{
  
  if(value % 10 == 0 || value % 10 > 4)
    return endFirst;
  else if(value % 10 == 1)
    return endSecond;
  else if(value % 10 > 1 && value % 10 < 5)
    return endThird;
}

setInterval(getDate, 1000);
