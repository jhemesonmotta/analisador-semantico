import { Tree, Node } from './classes/tree'


var arvore = new Tree()

arvore.raiz.esquerdo = new Node('e')
arvore.raiz.esquerdo.centro = new Node('Number')
arvore.raiz.esquerdo.centro.centro = new Node(1)

arvore.raiz.centro = new Node('+')

arvore.raiz.direito = new Node('e')
arvore.raiz.direito.centro = new Node('Number')
arvore.raiz.direito.centro.centro = new Node(1)

console.log(arvore)
console.log(arvore.raiz)
console.log(arvore.raiz.visitInOrdem())