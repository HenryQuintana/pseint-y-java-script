// un alumno desea saber cuál será su calificación final en la materia de Algoritmo
// Dicha calificación se compone de los siguientes porcentajes:
// 50 MOD  del promedio de sus tres parciales.
// 30 MOD  de la calificación del examen final.
// 15 MOD  de la calificacion de un trabajo final.
Proceso Ejercicio_6
	Definir parcial_1,parcial_2,parcial_3,promedio_P,nota_parcial Como Real;
	Definir examen_final,nota_examen Como Real;
	Definir nota_trabajo,nota_f_trabajo Como Real;
	Definir nota_final Como Real;
	Escribir 'Digite las tres notas de los parciales';
	Leer parcial_1,parcial_2,parcial_3;
	promedio_P <- (parcial_1+parcial_2+parcial_3)/3;
	nota_parcial <- promedio_P*0.55;
	Escribir 'Digite la nota del examen final: ';
	Leer examen_final;
	nota_examen <- examen_final*0.3;
	Escribir 'Digite la nota del trabajo final: ';
	Leer nota_trabajo;
	nota_f_trabajo <- nota_trabajo*0.15;
	nota_final <- nota_parcial+nota_examen+nota_f_trabajo;
	Escribir 'La calificacion final es: ',nota_final;
FinProceso
