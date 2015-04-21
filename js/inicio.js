var time_t = 0;
var clients_t = 0;

var time_o = 0;
var clients_o = 0;

var cola_taquilla = new Array;
var cola_operaciones = new Array;

var taquilla_cont = 100;
var operaciones_cont = 500;

var out_t = 0;
var out_o = 0;



function taquilla(){
	clients_t = clients_t + 1;
	time_t = clients_t * 3;
	taquilla_cont = taquilla_cont + 1;
	cola_taquilla.push(taquilla_cont);
	console.log("clientes en cola" + " " + cola_taquilla);
	console.log("tiempo de espera" + " " + time_t);
	console.log("numero cliente" + " " + taquilla_cont);
	document.getElementById("num1").innerHTML = ("Su numero es " + cola_taquilla[cola_taquilla.length-1] + " Tiempo aproximado de espera " + time_t +" minutos");
}

function operaciones(){
	clients_o = clients_o + 1;
	time_o = clients_o * 8 ;
	operaciones_cont = operaciones_cont + 1;
	cola_operaciones.push(operaciones_cont);
	console.log("clientes en cola" + " " + cola_operaciones);
	console.log("tiempo de espera" + " " + time_o);
	console.log("numero cliente" + " " + operaciones_cont);
	document.getElementById("num2").innerHTML = ("Su numero es " + cola_operaciones[cola_operaciones.length-1] + " Tiempo aproximado de espera " + time_o +" minutos");
}

function cajero(){
	if (cola_taquilla.length != 0){
		clients_t = clients_t - 1;
		time_t = clients_t * 3;
		out_t = out_t + 1;
		document.getElementById("num5").innerHTML = ("Proximo cliente taquilla " + cola_taquilla[0]);
		console.log("Proximo Cliente" + cola_taquilla[0])
		cola_taquilla.shift();
		document.getElementById("num6").innerHTML = ("Clientes en cola Taquilla " + cola_taquilla);
		console.log("Clientes en cola" + " " + cola_taquilla)
	}else{
		document.getElementById("num6").innerHTML = ("No hay Clientes en cola de Taquilla ");
	}
}

function atencion(){
	if (cola_operaciones.length != 0){
		clients_o = clients_o - 1;
		time_o = clients_o * 8;
		out_o = out_o + 1;
		document.getElementById("num7").innerHTML = ("Proximo cliente Atencion al Cliente " + cola_operaciones[0]);
		console.log("Proximo Cliente" + cola_operaciones[0])
		cola_operaciones.shift(0);
		document.getElementById("num7").innerHTML = ("Clientes en cola Atencion al Cliente " + cola_operaciones);
		console.log("Clientes en cola" + " " + cola_operaciones)
	}else{
		document.getElementById("num8").innerHTML = ("No hay Clientes en cola de Atencion al Cliente ");
		console.log("No hay clientes en cola")
	}
}

time_t_3 = 0;
clients_t_3 = 0;

time_o_3 = 0;
clients_o_3 = 0;

cola_taquilla_3 = new Array;
cola_operaciones_3 = new Array;

taquilla_cont_3 = 600;
operaciones_cont_3 =900;

out_t_3 = 0;
out_o_3 = 0;

function taquilla_3 (){
	clients_t_3 = clients_t_3 + 1;
	time_t_3 = clients_t_3 * 5;
	taquilla_cont_3 = taquilla_cont_3 + 1;
	cola_taquilla_3.push(taquilla_cont_3);
	console.log("clientes en cola" + " " + taquilla_cont_3)
	console.log("tiempo de espera" + " " + time_t_3)
	console.log("numero cliente" + " " + taquilla_cont_3)
	document.getElementById("num3").innerHTML = ("Su numero es " + cola_taquilla_3[cola_taquilla_3	.length-1] + " Tiempo aproximado de espera " + time_t_3 +" minutos");

}

function operaciones_3 (){
	clients_o_3 = clients_o_3 + 1;
	time_o_3 = clients_o_3 * 12;
	operaciones_cont_3  = operaciones_cont_3  + 1;
	cola_operaciones_3.push(operaciones_cont_3 );
	console.log("clientes en cola" + " " + cola_operaciones_3)
	console.log("tiempo de espera" + " " + time_o)
	console.log("numero cliente" + " " + operaciones_cont_3)
	document.getElementById("num4").innerHTML = ("Su numero es " + cola_operaciones_3[cola_operaciones_3.length-1] + " Tiempo aproximado de espera " +  time_o_3 +" minutos");
}

function cajero_3 (){
	if (cola_taquilla_3.length != 0){
		clients_t_3 = clients_t_3 - 1;
		time_t_3 = clients_t_3 * 5;
		out_t_3 = out_t_3 + 1;
		document.getElementById("num9").innerHTML = ("Proximo cliente taquilla 3ra edad " + cola_taquilla_3[0]);
		console.log("Proximo Cliente" + " " +cola_taquilla_3[0])
		cola_taquilla_3.shift();
		document.getElementById("num10").innerHTML = ("Clientes en cola Taquilla 3ra edad " + cola_taquilla_3);
		console.log("Clientes en cola" + " " + cola_taquilla_3)
	}else{
		document.getElementById("num10").innerHTML = ("No hay Clientes en cola de Taquilla 3ra edad ");
		console.log("No hay clientes en cola")
	} 
}


function atencion_3 (){
	if (cola_operaciones_3.length != 0){
		clients_o_3 = clients_o_3 - 1;
		time_o_3 = clients_o_3 * 12;
		out_o_3 = out_o_3 + 1;
		document.getElementById("num11").innerHTML = ("Proximo cliente Atencion al Cliente 3ra edad " + cola_operaciones_3[0]);
		console.log("Proximo Cliente" + " " +cola_operaciones_3[0])
		cola_operaciones_3.shift(0);
		document.getElementById("num12").innerHTML = ("Clientes en cola Atencion al Cliente 3ra edad " + cola_operaciones_3);
		console.log("Clientes en cola" + " " + cola_operaciones_3)
	}else{ 
		document.getElementById("num12").innerHTML = ("No hay Clientes en cola de Atencion al Cliente 3ra edad");
		console.log("No hay clientes en cola")
	}
}	
