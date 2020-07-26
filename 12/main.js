//getting objects for logic
var width = 800;
var height = 526;
var ball = $(".ball");

var dir = 1;

ball.on("click", function()
{
    var xpos = (dir * 750).toString();
    var ypos = (Math.random() * (526 - 50) + 50).toString();
    
    ball.animate({"left": "+=" + xpos,"top": ypos}, 
                2000,
                function()
                {
                    if(parseInt(ball.css('top')) > 280 && parseInt(ball.css('top')) < 380)
                        alert("Goal!!!");
                });
    dir *= -1;
});
