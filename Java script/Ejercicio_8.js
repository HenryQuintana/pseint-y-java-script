// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio 8: Elaborar un programa que me muestre el
// significado de aniversario de cada década hasta los 60.
function ejercicio_8() {
	var decada = new Number();
	document.write("Digite una decada",'<BR/>');
	decada = Number(prompt());
	switch (decada) {
	case 10:
		document.write("Bodas de Hojalata",'<BR/>');
		break;
	case 20:
		document.write("Bodas de porcelana",'<BR/>');
		break;
	case 30:
		document.write("Bodas de perlas",'<BR/>');
		break;
	case 40:
		document.write("Bodas de Rubi",'<BR/>');
		break;
	case 50:
		document.write("Bodas de Oro",'<BR/>');
		break;
	case 60:
		document.write("Bodas de Diamante",'<BR/>');
		break;
	default:
		document.write("Decada no existente",'<BR/>');
	}
}

