import { eh_numero, eh_operador, calcula } from './utils.js'
import { Node } from './classes/node';

function result(node){
  // se o do centro é operador
  if(node.centro != null && node.centro != undefined){
    if(eh_operador(node.centro.info)){
      //  se esquerdo && direito deste nó não são vazios
      if(node.esquerdo != undefined && node.direito != undefined){
        if(node.esquerdo.info != null && node.esquerdo.info != undefined && node.direito.info != null && node.direito.info != undefined){

          var valor_esquerdo = 0;
          var valor_direito = 0;
          
          //  se o nó da esquerda é numero
          if(eh_numero(node.esquerdo.centro.centro.info)){
            valor_esquerdo = Number(node.esquerdo.centro.centro.info);
          }
          else{
            // executo este mesmo método no nó da esquerda (neste contexto, o nó da esquerda não ser número significa que é outro nó)
            valor_esquerdo = result(node.esquerdo)
          }

          //  se o nó da direita é numero
          if(eh_numero(node.direito.centro.centro.info)){
            valor_direito = Number(node.direito.centro.centro.info);
          }
          else{
            // executo este mesmo método no nó da direita (neste contexto, o nó da direita não ser número significa que é outro nó)
            valor_direito = result(node.direito);
          }
          // calcula(numero_1, numero_2, operador)

          // console.log("indo somar, direita: " + valor_direito)
          // console.log("indo somar, esquerda: " + valor_esquerdo)

          var conta = calcula(valor_esquerdo, valor_direito, node.centro.info);
          // console.log("checkpoint 1.11 : " + conta);
          return conta;
        }
      }
    }
    else if(eh_numero(node.centro.info)){
        var numero_retorno = Number(node.centro.info);
        return numero_retorno;
    }
  }
  else if((node.centro == null || node.centro == undefined) && node.esquerdo.info != null && node.direito.info != null){
    // neste contexto significa que é a raíz da árvore. 
      //O nó a direito será apenas o EOF
        //portanto, podemos seguir pela esquerdo
        return result(node.esquerdo);
  }
  // false significa que é uma operação inválida
  return false;
}

export { result }