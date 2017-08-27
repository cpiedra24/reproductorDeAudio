function iniciar(){
maximo = 600;
medio = document.getElementById('medio');
reproducir = document.getElementById('reproducir');
barra = document.getElementById('barra');
progreso = document.getElementById('progreso');
 
 reproducir.addEvenListener('click',precionar,false);
 barra.addEvenListener('click',mover,false);
}
//Metodo para cuando dan click en el boton play;
function precionar(){
	if (!medio.pause && !medio.ended) {
		medio.pause();
		reproducir.innerHTML = "Play";
		window.clearInterval(bucle);
	}
	else{
		medio.play();
		reproducir.innerHTML = "pause";
		bucle = setInterval(estado, 100);
	}
}
//metodo que permite que nuestra barra de estado se mueva con la cancion;
function estado(){
	if (!medio.ended) {
		var total =	parseInt(medio.currentTime*maximo/medio.duration);
		progreso.style.width = total+'px';
	}
	else{
		progreso.style.width = '0px';
		reproducir.innerHTML = "Play";
		window.clearInterval(bucle);	
	}
}
//
function mover(e){
	if (!medio.pause && !medio.ended) {
		var ratonX = e.pageX-barra.offsetLeft;
		var nuevoTiempo = ratonX*medio.duration/maximo;
		medio.currentTime = nuevoTiempo;
		progreso.style.width =ratonX+'px';
	}
}
window.addEvenListener('load',iniciar,false);