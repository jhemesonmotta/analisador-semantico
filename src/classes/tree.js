import { result } from './result.ts'

class Tree {
    constructor() {
        this.raiz = new Node('expressions')
    }
}

class Node {
  constructor(val) {
    this.info = val
  }

  visitInOrdem(result = '') {
    if (this.esquerdo) {
        console.log(this.esquerdo)
      result = this.esquerdo.visitInOrdem(result)
    }
    if (this.centro) {
      result = this.centro.visitInOrdem(result)
    }
    if (this.direito) {
      result = this.direito.visitInOrdem(result)
    }
    if (this.info) {
      result = result + this.info + " "
    }
    return result
  }

  getResult() {
    return result(this)
  }
}

export { Tree, Node }