//Ejercicio 1: ingrese un numero entero y reportar si es par o impar.

Proceso Par_o_Impar
	Definir num Como Entero;
	
	Escribir "Digite un numero: ";
	Leer num;
	
	Si num mod 2 = 0 Entonces
		Escribir "El numero ",num," es par";
	SiNo
		Escribir "El numero ",num," es impar";
	FinSi
	
	
FinProceso
