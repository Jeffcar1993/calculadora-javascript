//agrega a la pantalla el valor que seleccionemos 

function agregar (valor) {
    document.getElementById("pantalla").value += valor
}

// borra lo que este en pantalla

function borrar (){
    document.getElementById("pantalla").value = ""
}

// calcula el resultado de los elemntos de la pantalla

function calcular (){
    const valorPantalla = document.getElementById("pantalla").value

    let resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
}