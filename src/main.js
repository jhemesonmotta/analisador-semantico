import { Tree } from './classes/tree'
import { Node } from './classes/node'

var arvore = new Tree()
var arvore2 = new Tree()

// exemplo 1 (1 / 2)
        arvore.raiz.esquerdo = new Node('e')
        arvore.raiz.esquerdo.centro = new Node('/')
        arvore.raiz.esquerdo.centro.centro = new Node('/')

        arvore.raiz.esquerdo.esquerdo = new Node('e')
        arvore.raiz.esquerdo.esquerdo.centro = new Node('number')
        arvore.raiz.esquerdo.esquerdo.centro.centro = new Node(1)

        arvore.raiz.esquerdo.direito = new Node('e')
        arvore.raiz.esquerdo.direito.centro = new Node('number')
        arvore.raiz.esquerdo.direito.centro.centro = new Node(2)

        arvore.raiz.direito = new Node('EOF')

        console.log("1 / 2 = " + arvore.raiz.getResult())

// exemplo 2 (2 * 3 + 2)
    arvore2.raiz.esquerdo = new Node('e')
        arvore2.raiz.esquerdo.centro = new Node('+')
            arvore2.raiz.esquerdo.centro.centro = new Node('+')

        arvore2.raiz.esquerdo.esquerdo = new Node('e')
            arvore2.raiz.esquerdo.esquerdo.centro = new Node('*')
                arvore2.raiz.esquerdo.esquerdo.centro.centro = new Node('*')

            arvore2.raiz.esquerdo.esquerdo.esquerdo = new Node('e')
                arvore2.raiz.esquerdo.esquerdo.esquerdo.centro = new Node('number')
                    arvore2.raiz.esquerdo.esquerdo.esquerdo.centro.centro = new Node(2)

            arvore2.raiz.esquerdo.esquerdo.direito = new Node('e')
                arvore2.raiz.esquerdo.esquerdo.direito.centro = new Node('number')
                    arvore2.raiz.esquerdo.esquerdo.direito.centro.centro = new Node(3)

    arvore2.raiz.esquerdo.direito = new Node('e')
    arvore2.raiz.esquerdo.direito.centro = new Node('number')
    arvore2.raiz.esquerdo.direito.centro.centro = new Node(2)

    arvore2.raiz.direito = new Node('EOF')
    
    console.log("2 * 3 + 2 = " + arvore2.raiz.getResult())