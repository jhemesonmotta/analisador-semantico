import { result } from '../result.js'

class Node {
    constructor(val) {
      this.info = val
    }
    getResult() {
      return result(this)
    }
  }
  export { Node }