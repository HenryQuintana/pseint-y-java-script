//Ejercicio 4: Leer 2 números; si son iguales que los multiples, si el 
// primero es mayor que el segundo que los reste y si no que los sume.

Proceso Ejercicio_4D
	Definir num1,num2,resultado Como Real;
	
	Escribir "Digite dos numeros: ";
	Leer num1,num2;
	
	Si num1=num2 Entonces
		//Si son iguales multiplicaciones 
		resultado <- num1 * num2;
	SiNo
		Si num1>num2 Entonces
			//Si el primer numero es mayor los restamos 
			resultado <- num1 - num2;
		SiNo
			resultado <- num1 + num2;
		FinSi
	FinSi
	
	Escribir "El resultado es: ",resultado;
FinProceso
