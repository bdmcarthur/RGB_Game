
square = document.querySelectorAll('.square');
tagline = document.getElementById('tagline');
heading = document.getElementById('heading');
button = document.querySelector('button')
var coArr = colorPicker();
var answer = answerNum();


button.addEventListener("click", function(){
    heading.style.backgroundColor = "orange";
    coArr = colorPicker();
    answer = answerNum();
    squareAssigner();
    play();
})


function colorPicker(){
var colorArr = [];
//chooses random RGB for each square
for (var i = 0; i < square.length; i++) {
    colorArr.push("rgb" + "(" + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ", " + parseInt(Math.random() * 256) + ")")
}
return colorArr;
}



function squareAssigner(){
//gives each square a color
for (var i = 0; i < coArr.length; i++){
        square[i].style.backgroundColor = coArr[i]
}

}

function answerNum(){
var code = coArr[Math.floor(Math.random() * 6)]
rgbText = document.getElementById('rgb')
rgbText.textContent = code
return code;

}

function play(){
//changes square background for a right or wrong answer
for (let i = 0; i < square.length; i++)
{square[i].addEventListener("click", function()
    {if (answer !== square[i].style.backgroundColor)
        {console.log(answer + "is answer" + square[i].style.backgroundColor + "is square")
        square[i].style.backgroundColor = "black"
        tagline.textContent = "Try Again!"
        }
    else {
        for (let i = 0; i < square.length; i++)
            {square[i].style.backgroundColor = answer
            }
        heading.style.backgroundColor = answer
        tagline.textContent = "Correct!"
        button.textContent = "Play Again?"
         }
    }
)
}
}

colorPicker();
answerNum();
squareAssigner();
play();
