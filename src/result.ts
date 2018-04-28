function result(node){
  // esse é oq vai rolar
      // se o do centro é operador
        //  se esquerda && direita não são vazios
          //  se esquerda.centro.info é numero
            //return number()
          //  else (então não é nó de número)
            // result (node)
          // se direita.centro.info é numero: return number()
            //return number()
          // else (então não é nó de número)
            // result (node)
      // se o do centro.info é numero
        // return numero
  // final do que vai rolar

  // se o centro for um operador e houverem números dos dois lados entra aqui
  if(eh_operador(node.centro.info) && eh_numero(node.esquerda.centro.info) && eh_numero(node.direita.info)){
    // se for uma multiplicação
    if(node.centro.info == "*"){
        return result(node.esquerda) * result(node.direita)
    }

    // se for uma divisão
    else if(node.centro.info == "/"){
      return result(node.esquerda) / result(node.direita)
    }

    // se for subtração
    else if(node.centro.info == "-"){
      return result(node.esquerda) - result(node.direita)
    }

    // se for adição
    else if(node.centro.info == "+"){
      return result(node.esquerda) + result(node.direita)
    }

    // adicionar outras operações
  }
  else if(eh_operador(node.centro.info)){
    // ignora (ex.: parêntese)
  }
  else if(eh_numero(node.centro.info)){
    return Number(node.centro.info);
  }
}
