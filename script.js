// var re = document.getElementById("rgb")
// var1 = Math.random() * 255
// var2 = Math.random() * 255
// var3 = Math.random() * 255
// re.style.color="rgb" + "(" + var1.toString() + "," + var2.toString() + "," + var3.toString() + ")"
//
// var bg = re.style.color
// console.log(bg)

var re = document.getElementsByClassName('square')

function randomColor(){
    for (let i = 0; i < re.length; i++) {
    var index = Math.floor((Math.random() * 5) + 1)
      re[0].style.backgroundColor = "rgb" + "(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")"
      re[1].style.backgroundColor = "rgb" + "(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")"
      re[2].style.backgroundColor = "rgb" + "(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")"
      re[3].style.backgroundColor = "rgb" + "(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")"
      re[4].style.backgroundColor = "rgb" + "(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")"
      re[5].style.backgroundColor = "rgb" + "(" + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + "," + parseInt(Math.random() * 255) + ")"

}
var numPick = re[index].style.backgroundColor
var rgb = document.getElementById('rgb')
rgb.textContent = numPick
}
randomColor()
