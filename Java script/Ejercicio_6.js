
// un alumno desea saber cuál será su calificación final en la materia de Algoritmo
// Dicha calificación se compone de los siguientes porcentajes:
// 50 MOD  del promedio de sus tres parciales.
// 30 MOD  de la calificación del examen final.
// 15 MOD  de la calificacion de un trabajo final.
function ejercicio_6() {
	var parcial_1 = new Number();
	var parcial_2 = new Number();
	var parcial_3 = new Number();
	var promedio_p = new Number();
	var nota_parcial = new Number();
	var examen_final = new Number();
	var nota_examen = new Number();
	var nota_trabajo = new Number();
	var nota_f_trabajo = new Number();
	var nota_final = new Number();
	document.write("Digite las tres notas de los parciales",'<BR/>');
	parcial_1 = Number(prompt());
	parcial_2 = Number(prompt());
	parcial_3 = Number(prompt());
	promedio_p = (parcial_1+parcial_2+parcial_3)/3;
	nota_parcial = promedio_p*0.55;
	document.write("Digite la nota del examen final: ",'<BR/>');
	examen_final = Number(prompt());
	nota_examen = examen_final*0.3;
	document.write("Digite la nota del trabajo final: ",'<BR/>');
	nota_trabajo = Number(prompt());
	nota_f_trabajo = nota_trabajo*0.15;
	nota_final = nota_parcial+nota_examen+nota_f_trabajo;
	document.write("La calificacion final es: ",nota_final,'<BR/>');
}

