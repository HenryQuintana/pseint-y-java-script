// Ejercicio 4: Un profesor prepara tres cuestionarios para una evaluacion final:
// A,B y C. Se sabe que se tarda 5 minutos en revisar el cuestionario A,
// 8 en revisar el cuestionario B y 6 en el C, La cantidad de cada 
// tipo se enteran por teclado. ¿Cuantos horas y cuantos minutos se tardara en
// revisar todas las evaluaciones?
function ejercicio_4() {
	var cantidad_a = new Number();
	var cantidad_b = new Number();
	var cantidad_c = new Number();
	var tiempo_a = new Number();
	var tiempo_b = new Number();
	var tiempo_c = new Number();
	var tiempo_total = new Number();
	var horas = new Number();
	var minutos = new Number();
	document.write("Digite la cantidad de cuestionarios A: ",'<BR/>');
	cantidad_a = Number(prompt());
	document.write("Digite la cantidad de cuestionarios B: ",'<BR/>');
	cantidad_b = Number(prompt());
	document.write("Digite la cantidad de cuestionarios C: ",'<BR/>');
	cantidad_c = Number(prompt());
	// Calcular los minutos que se tardara por cada cuestionario
	tiempo_a = cantidad_a*5;
	tiempo_b = cantidad_b*8;
	tiempo_c = cantidad_c*6;
	// Calculamos el tiempo total que le toma revisar todos los cuestionarios 
	tiempo_total = tiempo_a+tiempo_b+tiempo_c;
	// Calculamos las horas y minutos
	horas = Math.trunc(tiempo_total/60);
	minutos = tiempo_total%60;
	document.write("Se tardara ",horas," horas y ",minutos," minutos",'<BR/>');
}

