const adicion = (numeroUno, nuemeroDos) => numeroUno + nuemeroDos;
const sustraccion = (numeroUno, nuemeroDos) => numeroUno - nuemeroDos;
const multiplicar = (numeroUno, nuemeroDos) => numeroUno * nuemeroDos;
const dividir = (numeroUno, nuemeroDos) => numeroUno / nuemeroDos;
const residuo = (numeroUno, nuemeroDos) => numeroUno % nuemeroDos;

function valores ( cuenta, numeroUno, nuemeroDos ){
	switch (cuenta){

		case "+":
			console.log( adicion( numeroUno, nuemeroDos))
			break;
		case "-":
			console.log( sustraccion( numeroUno, nuemeroDos))
			break;
		case "*":
			console.log( multiplicacion( numeroUno, nuemeroDos))
			break;
		case "/":
			console.log( division( numeroUno, nuemeroDos))
			break;
		case "%":
				console.log( residuo( numeroUno, nuemeroDos))
				break;
		default:
			console.log ("Revisa tus operaciones")
	}
}

let  resultado;
 do{
	 let numeroUno, nuemeroDos, operador
	 do{
		 numeroUno =  parseFloat(prompt("Introduce tu primer numero"))
		 operador = prompt("Ingresa la operacion que quieres realizar (+, -, *, /, %)")
		 nuemeroDos =  parseFloat(prompt("Introduce tu segundo numero"))
		
	 
		if(isNaN (numeroUno) || isNaN (nuemeroDos)){
			console.log(" El numero que ingresaste no se reconoce")
		}
		if (nuemeroDos === 0 && operador == "/"){
			console.log("No se puede hacer tu division")
		}
		}while ((isNaN(numeroUno) || isNaN(nuemeroDos) || (nuemeroDos === 0 && operador == "/")))
		valores(operador, numeroUno, nuemeroDos)
		do{
			resultado = prompt("Quieres ingresar otra operacion?").toLowerCase()
		}while(resultado != "si" && resultado != "no")
 }while(resultado != "no")