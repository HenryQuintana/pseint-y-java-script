// Determinar si un alumno aprueba o reprueba un curso, sabiendo que asprobará
// si su promedio de calificaciones es mayor o igual a 70; repruba caso contrario.
// (Diagrama de flujo)
Proceso Ejercicio_2D
	Definir nota_1,nota_2,nota_3 como reales ;
	Definir promedio como reales ;
	Escribir "Digite las 3 calificaciones: ";
	Leer nota_1,nota_2,nota_3;
	promedio <- (nota_1+nota_2+nota_3)/3;
	Si promedio >= 70 Entonces
		Escribir "El alumno esta aprobado con: ",promedio;
	SiNo
		Escribir "El alumno esta reprobado con: ",promedio;
	FinSi
FinProceso
