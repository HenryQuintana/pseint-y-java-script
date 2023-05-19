// Ejecicio 5: Una tienda ofrece un descuento del 15 MOD  usobre el total de la 
// compra y un cliente desea saber cuantos deberá pagar finalmente por su compra.
Proceso Ejercicio_5
	Definir precio,descuento,precio_final como real;
	Escribir "Digite el precio a pagar: ";
	Leer precio;
	descuento <- precio*0.15;
	precio_final <- precio - descuento;
	Escribir "El precio a pagar es de: ",precio_final;
FinProceso
