

 var boton = document.getElementById('menu');
 var punto = document.getElementById('punto');
    document.getElementById('menu').onclick=function(){
        boton.style.display="none";
        console.log(punto.style.display)
        punto.style.display="block";
        console.log(punto.style.display)
        console.log(punto.attributes[1].value )
    }


//TARJETA 1
var imagen_1 = document.getElementById("f1_tarjeta_1");
imagen_1.onmouseover = function() {Ontarjeta1()};
imagen_1.onmouseout = function() {Outtarjeta1()};

//mouse encima
function Ontarjeta1() {
	document.getElementById("f1_tarjeta_1").style.width="100%"
}

//mouse afuera
function Outtarjeta1() {
	document.getElementById("f1_tarjeta_1").style.width="90%"
}
//---------------------------------------------------------------------------------------

//TARJETA 2
var imagen_2 = document.getElementById("f1_tarjeta_2");
imagen_2.onmouseover = function() {Ontarjeta2()};
imagen_2.onmouseout = function() {Outtarjeta2()};

//mouse encima
function Ontarjeta2() {
  document.getElementById("f1_tarjeta_2").style.width="100%"
}

//mouse afuera
function Outtarjeta2() {
  document.getElementById("f1_tarjeta_2").style.width="90%"
}
//---------------------------------------------------------------------------------------

//TARJETA 3 
var imagen_3= document.getElementById("f1_tarjeta_3");
imagen_3.onmouseover = function() {Ontarjeta3()};
imagen_3.onmouseout = function() {Outtarjeta3()};

//mouse encima
function Ontarjeta3() {
  document.getElementById("f1_tarjeta_3").style.width="100%"
}

//mouse afuera
function Outtarjeta3() {
  document.getElementById("f1_tarjeta_3").style.width="90%"
}
//---------------------------------------------------------------------------------------

//TARJETA 4
var imagen_4= document.getElementById("f2_tarjeta_1");
imagen_4.onmouseover = function() {Ontarjeta4()};
imagen_4.onmouseout = function() {Outtarjeta4()};

//mouse encima
function Ontarjeta4() {
  document.getElementById("f2_tarjeta_1").style.width="100%"
}

//mouse afuera
function Outtarjeta4() {
  document.getElementById("f2_tarjeta_1").style.width="90%"
}
//---------------------------------------------------------------------------------------

//TARJETA 5
var imagen_5= document.getElementById("f2_tarjeta_2");
imagen_5.onmouseover = function() {Ontarjeta5()};
imagen_5.onmouseout = function() {Outtarjeta5()};

//mouse encima
function Ontarjeta5(){
  document.getElementById("f2_tarjeta_2").style.width="100%"
}

//mouse afuera
function Outtarjeta5() {
  document.getElementById("f2_tarjeta_2").style.width="90%"
}
//---------------------------------------------------------------------------------------

//TARJETA 6
var imagen_6= document.getElementById("f2_tarjeta_3");
imagen_6.onmouseover = function() {Ontarjeta6()};
imagen_6.onmouseout = function() {Outtarjeta6()};

//mouse encima
function Ontarjeta6() {
  document.getElementById("f2_tarjeta_3").style.width="100%"
}

//mouse afuera
function Outtarjeta6() {
  document.getElementById("f2_tarjeta_3").style.width="90%"
}
//---------------------------------------------------------------------------------------

//TARJETA 7 
var imagen_7= document.getElementById("f3_tarjeta_1");
imagen_7.onmouseover = function() {Ontarjeta7()};
imagen_7.onmouseout = function() {Outtarjeta7()};

//mouse encima
function Ontarjeta7() {
  document.getElementById("f3_tarjeta_1").style.width="100%"
}

//mouse afuera
function Outtarjeta7() {
  document.getElementById("f3_tarjeta_1").style.width="90%"
}
//---------------------------------------------------------------------------------------

//TARJETA 8
var imagen_8= document.getElementById("f3_tarjeta_2");
imagen_8.onmouseover = function() {Ontarjeta8()};
imagen_8.onmouseout = function() {Outtarjeta8()};

//mouse encima
function Ontarjeta8() {
  document.getElementById("f3_tarjeta_2").style.width="100%"
}

//mouse afuera
function Outtarjeta8() {
  document.getElementById("f3_tarjeta_2").style.width="90%"
}
//---------------------------------------------------------------------------------------

//TARJETA 9
var imagen_9= document.getElementById("f3_tarjeta_3");
imagen_9.onmouseover = function() {Ontarjeta9()};
imagen_9.onmouseout = function() {Outtarjeta9()};

//mouse encima
function Ontarjeta9() {
  document.getElementById("f3_tarjeta_3").style.width="100%"
}

//mouse afuera
function Outtarjeta9() {
  document.getElementById("f3_tarjeta_3").style.width="90%"
}


