// Ejercicio 6: Cacular la siguiente sumatoria de los "N" elementos:
// S = 1 + 4 + 4 + 9 + _
Proceso Ejercicio_6
	Definir n_elementos como entero;
	Definir i, suma como entero;
	Escribir "Digite la catidad de elementos a sumarse: ";
	Leer n_elementos;
	i <- 1;
	suma <- 0;
	Mientras i <= n_elementos Hacer
		suma <- suma + i^2;
		i <- i + 1;
	FinMientras
	Escribir "La suma es: ",suma;
FinProceso
