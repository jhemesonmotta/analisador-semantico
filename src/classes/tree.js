import { eh_numero } from './utils.js'
class Tree {
    constructor() {
        this.raiz = new Node('expressions');
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
      result = result + this.info + " ";
    }
    return result

  }

  getResult(result = '') {
    if (this.esquerdo) {
      result = this.esquerdo.getResult(result)
    }
    if (this.centro) {
      result = this.centro.getResult(result)
    }
    if (this.direito) {
      result = this.direito.getResult(result)
    }
    if (this.info) {
      if(eh_numero(this.info)){
        result += this.info
      }
      result = result + this.info + " ";
    }
    return result

  }

}

export { Tree, Node }