// Ejercicio 5: Calcular el factorial de un número mayor o igual a 0.
function ejercicio_5() {
	var num = new Number();
	var i = new Number();
	var factorial = new Number();
	do {
		document.write("Digite un numero: ",'<BR/>');
		num = Number(prompt());
	} while (num<0);
	i = 1;
	factorial = 1;
	// N!= 1*2*3*...*N
	while (i<=num) {
		factorial = factorial*i;
		i = i+1;
	}
	document.write("El factorial es: ",factorial,'<BR/>');
}

