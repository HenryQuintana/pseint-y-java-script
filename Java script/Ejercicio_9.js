// Ejercicio 9: Hacer un programa que tenga un men� con los siguientes opciones:
// opci�n 1: Elevar un n�mero a una potencia x
// opci�n 2: Sacar la ra�z cuadrada de un n�mero
// opci�n 3: Salir
function ejercicio_9() {
	var opcion = new Number();
	document.write("MENU",'<BR/>');
	document.write("1. Elevar un numero a una potencia x",'<BR/>');
	document.write("2. Sacar la raiz cuadrada de un numero",'<BR/>');
	document.write("3. Salir",'<BR/>');
	document.write("Digite una opcion:",'<BR/>');
	opcion = Number(prompt());
	switch (opcion) {
	case 1:
		var num = new Number();
		var pot = new Number();
		var resultado = new Number();
		document.write("Digite un numero: ",'<BR/>');
		num = Number(prompt());
		document.write("Digite la potencia",'<BR/>');
		pot = Number(prompt());
		resultado = Math.pow(num,pot);
		document.write("El resultado es: ",resultado,'<BR/>');
		break;
	case 2:
		var num = new Number();
		var resultado = new Number();
		document.write("Digite un numero: ",'<BR/>');
		num = Number(prompt());
		resultado = Math.sqrt(num);
		document.write("El resultado es: ",resultado,'<BR/>');
		break;
	case 3:
		break;
	default:
		document.write("Se equivoco de opcion de menu",'<BR/>');
	}
}

