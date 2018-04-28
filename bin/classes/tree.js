'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tree = function Tree() {
  _classCallCheck(this, Tree);

  this.raiz = new Node('e');
};

var Node = function () {
  function Node(val) {
    _classCallCheck(this, Node);

    this.info = val;
  }

  _createClass(Node, [{
    key: 'visitInOrdem',
    value: function visitInOrdem() {
      var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.esquerdo) {
        console.log(this.esquerdo);
        result = this.esquerdo.visitInOrdem(result);
      }
      if (this.centro) {
        result = this.centro.visitInOrdem(result);
      }
      if (this.direito) {
        result = this.direito.visitInOrdem(result);
      }
      if (this.info) {
        result = result + this.info + " ";
      }
      return result;
    }
  }, {
    key: 'getJSON',
    value: function getJSON() {
      var filhoAtual = { text: { name: this.info.valor }, children: [] };

      if (this.direito !== null) {
        filhoAtual.children.unshift(this.direito.getJSON());
      }
      if (this.centro !== null) {
        filhoAtual.children.unshift(this.centro.getJSON());
      }
      if (this.esquerdo !== null) {
        filhoAtual.children.unshift(this.esquerdo.getJSON());
      }
      return filhoAtual;
    }
  }]);

  return Node;
}();

exports.Tree = Tree;
exports.Node = Node;