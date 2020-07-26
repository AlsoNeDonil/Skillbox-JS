//getting objects for logic
const WIDTH = 800;
const HEIGHT = 526;
let ball = $(".ball");

let dir = 1;

ball.on("click", function()
{
    const XPOS = (dir * 750).toString();
    const YPOS = (Math.random() * (HEIGHT - 50) + 50).toString();

    ball.animate({"left": `+=${XPOS}`,"top": YPOS}, 
                2000,
                function()
                {
                    if(parseInt(ball.css('top')) > 280 && parseInt(ball.css('top')) < 380)
                        alert("Goal!!!");
                }
    );
    dir *= -1;
});
