
// Ejercicio 6: Cacular la siguiente sumatoria de los "N" elementos:
// S = 1 + 4 + 4 + 9 + _
function ejercicio_6() {
	var n_elementos = new Number();
	var i = new Number();
	var suma = new Number();
	document.write("Digite la catidad de elementos a sumarse: ",'<BR/>');
	n_elementos = Number(prompt());
	i = 1;
	suma = 0;
	while (i<=n_elementos) {
		suma = suma+Math.pow(i,2);
		i = i+1;
	}
	document.write("La suma es: ",suma,'<BR/>');
}

