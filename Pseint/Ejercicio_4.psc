//Ejercicio 4: Un profesor prepara tres cuestionarios para una evaluacion final:
// A,B y C. Se sabe que se tarda 5 minutos en revisar el cuestionario A,
// 8 en revisar el cuestionario B y 6 en el C, La cantidad de cada 
// tipo se enteran por teclado. ¿Cuantos horas y cuantos minutos se tardará en
//revisar todas las evaluaciones?

Proceso Ejercicio_4
	Definir cantidad_A,cantidad_B,cantidad_C Como Entero;
	Definir tiempo_A,tiempo_B,tiempo_C Como Entero;
	Definir tiempo_total Como Entero;
	Definir horas, minutos Como Enteros;
	
	Escribir "Digite la cantidad de cuestionarios A: ";
	Leer cantidad_A;
	Escribir "Digite la cantidad de cuestionarios B: ";
	Leer cantidad_B;
	Escribir "Digite la cantidad de cuestionarios C: ";
	Leer cantidad_C;
	
//Calcular los minutos que se tardara por cada cuestionario
	tiempo_A <- cantidad_A * 5;
	tiempo_B <- cantidad_B * 8;
	tiempo_C <- cantidad_C * 6;
	
//Calculamos el tiempo total que le toma revisar todos los cuestionarios 
	tiempo_total <- tiempo_A + tiempo_B + tiempo_C;
	
//Calculamos las horas y minutos
	horas <- trunc(tiempo_total / 60);
	minutos <- tiempo_total mod 60;
	
	Escribir "Se tardara ",horas," horas y ",minutos," minutos";
FinProceso
