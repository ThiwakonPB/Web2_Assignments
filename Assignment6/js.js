
  
var scripts = document.getElementsByTagName("script"),
src = scripts[scripts.length-1].src;
  var w = window.innerWidth;
  var h = window.innerHeight;
  document.write("<h2> Assignment#6</h2> <p> <h2> Task#1 </h2>");
  document.write("w= " + w + "h =" + h + "<p>");
  document.write(src);
  document.write("<p><button type = 'button' onclick='location.reload();'>Reload</button> <p>")

function changeText1() {
document.getElementById('p1Text').setAttribute('style', 'color: green');
}

function changeText2() {
    document.getElementById('p2Text').innerHTML = "Hello ITE220";
    }

function changeText3() {
    if (document.getElementById("p3Text").style.visibility === "visible") {
        document.getElementById("p3Text").style.visibility = "hidden"
      } else {
        document.getElementById("p3Text").style.visibility = "visible"
      }
  }
    
function event1(){
    document.getElementById('a1').innerHTML = "MouseOver";
}
function event2(){
    document.getElementById('a1').innerHTML = "MouseOut";
}

function event3(){
    document.getElementById('a1').innerHTML = "Clicked";
}

function event4(){
    document.getElementById('a1').innerHTML = "MouseDown";
}
function event5(){
    document.getElementById('a1').innerHTML = "MouseUp";
}
function event6(){
    document.getElementById('a1').innerHTML = "DoubleClicked";
}