// Ejercicio 9: Hacer un programa que tenga un men� con los siguientes opciones:
// opci�n 1: Elevar un n�mero a una potencia x
// opci�n 2: Sacar la ra�z cuadrada de un n�mero
// opci�n 3: Salir
Proceso Ejercicio_9
	Definir opcion como entero;
	Escribir "MENU";
	Escribir "1. Elevar un numero a una potencia x";
	Escribir "2. Sacar la raiz cuadrada de un numero";
	Escribir "3. Salir";
	Escribir "Digite una opcion:";
	Leer opcion;
	Segun opcion Hacer
		1:
			Definir num,pot,resultado como reales;
			Escribir "Digite un numero: ";
			Leer num;
			Escribir "Digite la potencia";
			Leer pot;
			resultado <- num^pot ;
			Escribir "El resultado es: ",resultado;
		2:
			Definir num,resultado como reales;
			Escribir "Digite un numero: ";
			Leer num;
			resultado <- rc(num);
			Escribir "El resultado es: ",resultado;
		3:
		De Otro Modo:
			Escribir "Se equivoco de opcion de menu";
	FinSegun
FinProceso
