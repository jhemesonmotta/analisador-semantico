'use strict';

var _tree = require('./classes/tree');

var arvore = new _tree.Tree();

arvore.raiz.esquerdo = new _tree.Node('e');
arvore.raiz.esquerdo.centro = new _tree.Node('Number');
arvore.raiz.esquerdo.centro.centro = new _tree.Node(1);

arvore.raiz.centro = new _tree.Node('+');

arvore.raiz.direito = new _tree.Node('e');
arvore.raiz.direito.centro = new _tree.Node('Number');
arvore.raiz.direito.centro.centro = new _tree.Node(1);

console.log(arvore);
console.log(arvore.raiz);
console.log(arvore.raiz.visitInOrdem());