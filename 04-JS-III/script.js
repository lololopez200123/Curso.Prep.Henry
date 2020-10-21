/*var boton = document.getElementById("boton");
var segundoParrafo = document.querySelector("#segundo");
var singular = document.getElementsByClassName("texto");
var parrafos = document.getElementsByTagName("p")
var todosLosElementos = document.querySelectorAll(".texto")*/

var nuevoParrafo = document.createElement("p");
var nuevoTexto = document.createTextNode("hola soy un nuevito texto");

nuevoParrafo.appendChild(nuevoTexto);

nuevoParrafo.setAttribute("class", "texto");

var contenedor = document.getElementsByClassName("contenedor")[0];

//contenedor.appendChild(nuevoParrafo)  SE LO SACO SI NO ME CREA CONFLICTO MAS ADELANTE CUANDO VUELVO A CREAR LA CLASS CONTENEDOR

//agregue un elemento 

var segundoParrafo = document.getElementById("segundo");

segundoParrafo.className = "texto fondoRojo";

//modifique una clase

var primerParrafo =document.getElementsByClassName("texto")[0];

primerParrafo.id = "primero";

//modifique el id de una clase o elemento

//AHORA VAMOS A VER COMO UBICAR LOS ELEMENTOS EN LUGARES ESPECIFICOS

var parrafo = document.createElement("p");

var textoNuevo1 = document.createTextNode("soy un texto wiiii");

parrafo.appendChild(textoNuevo1);

parrafo.setAttribute("class","texto");

//como el elemento no tiene clase , seleccionamos el padre nediante un hijo con parentNode

var parrafoDelDoom = document.getElementsByClassName("texto")[2];

var nuevoParrafoEnElDoom = parrafoDelDoom.parentNode;

nuevoParrafoEnElDoom.className = "contenedor";

var parrafoSelector = document.getElementsByClassName("texto")[0]

nuevoParrafoEnElDoom.insertBefore(parrafo,parrafoSelector);

//aca agregue un elemento en la posicion que yo queria dependiendo de la class "texto"
var nuevoh1 = document.createElement("h1");
var textodelh1 = document.createTextNode("Soy tu nuevo titulo");
nuevoh1.appendChild(textodelh1);



var h1 = document.getElementsByTagName("h1")

var padreh1 = h1[0].parentNode;

padreh1.replaceChild(nuevoh1,h1[0])

//aca remplace un parrafo
	


//escuchar eventos

var boton = document.getElementById("btn");



boton.addEventListener("mouseover",function(){

	padreh1.setAttribute("class","contenedor1 fondoRojo");
});

boton.addEventListener("mouseout",function(){

	padreh1.setAttribute("class","contenedor");
})

















