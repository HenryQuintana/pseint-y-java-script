//Ejercicio 3: Intercambiar el valor de dos variables 

Proceso Principal
	Definir a,b,aux Como Entero;
	
	Escribir "Digite el valor de a: ";
	Leer a;
	Escribir "Digite el valor de b: ";
	Leer b;
	
	aux <- a;
	a <- b;
	b <- aux;
	
	Escribir "El nuevo valor de a es: ",a;
	Escribir "El nuevo valor de b es: ",b;
	
FinProceso
