
const meses = [
    "enero",
   "febrero",
    "marzo",
   "abril",
    "mayo",
   "junio",
    "julio",
   "agosto",
    "septiembre",
    "octubre",
    "noviembre",
   "diciembre",
 
];
  
let indice = 0;

 const nuMeses = document.getElementById("meses");


function mostrar(){

   
    // 1. Cogemos el mes que ha elegido el usuario (ej: "marzo")
    const mesSeleccionado = nuMeses.value;

    // 2. Buscamos en qué posición del array está ese mes (ej: devuelve 2)
    indice = meses.indexOf(mesSeleccionado);

    // 3. Seleccionamos el div de la pantalla donde pintaremos el resultado
    const cajaResultado = document.getElementById("resultado");

    // 4. Si lo encuentra, le sumamos 1 para tener el número real del mes
    if (indice !== -1) {
        const numeroRealDelMes = indice + 1;
        
        // Pintamos el resultado en la pantalla usando la nueva variable
        cajaResultado.innerText = `El mes corresponde al número: ${numeroRealDelMes}`;
    } else {
        cajaResultado.innerText = "Por favor, selecciona un mes válido.";
    }
}




   







