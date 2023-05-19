// Determinar si un alumno aprueba o reprueba un curso, sabiendo que asprobar�
// si su promedio de calificaciones es mayor o igual a 70; repruba caso contrario.
// (Diagrama de flujo)
function ejercicio_2d() {
	var nota_1 = new Number();
	var nota_2 = new Number();
	var nota_3 = new Number();
	var promedio = new Number();
	document.write("Digite las 3 calificaciones: ",'<BR/>');
	nota_1 = Number(prompt());
	nota_2 = Number(prompt());
	nota_3 = Number(prompt());
	promedio = (nota_1+nota_2+nota_3)/3;
	if (promedio>=70) {
		document.write("El alumno esta aprobado con: ",promedio,'<BR/>');
	} else {
		document.write("El alumno esta reprobado con: ",promedio,'<BR/>');
	}
}

