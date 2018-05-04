function eh_numero(token){
    return !isNaN(token) && token !== "";
}

function eh_operador(token){
    return token == "+" || token == "-" || token == "/" || token == "*" && token !== "";
}

function calcula(numero_1, numero_2, operador){
    if(operador == "+"){
        return numero_1 + numero_2;
    }
    else if(operador == "-"){
        return numero_1 - numero_2;
    }
    else if(operador == "/"){
        return numero_1 / numero_2;
    }
    else if(operador == "*"){
        return numero_1 * numero_2;
    }
}

export {eh_numero, eh_operador, calcula}