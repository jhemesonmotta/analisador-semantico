import { Tree, Node } from './classes/tree'


var arvore = new Tree()

arvore.raiz.esquerdo = new Node('e')
arvore.raiz.esquerdo.centro = new Node('+')
arvore.raiz.esquerdo.centro.centro = "+"

arvore.raiz.esquerdo.esquerdo = new Node('e')
arvore.raiz.esquerdo.esquerdo.centro = new Node('number')
arvore.raiz.esquerdo.esquerdo.centro.centro = 1

arvore.raiz.esquerdo.direito = new Node('e')
arvore.raiz.esquerdo.direito.centro = new Node('number')
arvore.raiz.esquerdo.direito.centro.centro = 2

arvore.raiz.direito = new Node('EOF')

console.log(arvore)
console.log(arvore.raiz.getResult())
// console.log(arvore.raiz)
// console.log(arvore.raiz.visitInOrdem())