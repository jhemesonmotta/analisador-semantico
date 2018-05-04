import { eh_numero, eh_operador, calcula } from './utils.js'

function result(node){
  // se o do centro é operador
  if(eh_operador(node.centro.info)){

    //  se esquerdo && direito deste nó não são vazios
    if(node.esquerdo.info != null && node.direito.info != null){
      var valor_esquerdo = 0;
      var valor_direito = 0;

      //  se o nó da esquerda é numero
      if(eh_numero(node.esquerdo.centro.info)){
        valor_esquerdo = Number(node.esquerdo.centro.info);
      }
      //  se o nó da esquerda não é numero
      else{
        // executo este mesmo método no nó da esquerda (neste contexto, o nó da esquerda não ser número significa que é outro nó)
        valor_esquerdo = result(node.esquerdo)
      }

      //  se o nó da direita é numero
      if(eh_numero(node.direito.centro.info)){
        valor_direito = Number(node.direito.centro.info);
      }
      else{
        // executo este mesmo método no nó da direita (neste contexto, o nó da direita não ser número significa que é outro nó)
        valor_direito = result(node.direito);
      }

      // calcula(numero_1, numero_2, operador)
      return calcula(valor_esquerdo, valor_direito, node.centro.info);
    }
  }
  else if(eh_numero(node.centro.info)){
      return Number(node.centro.info);
  }
  else if(node.centro.info == null && node.esquerdo.info != null && node.direito.info != null){
    // neste contexto significa que é a raíz da árvore. 
      //O nó a direito será apenas o EOF
        //portanto, podemos seguir pela esquerdo
    return result(node.esquerdo);
  }

  // false significa que é uma operação inválida
  return false;
}

export { result }