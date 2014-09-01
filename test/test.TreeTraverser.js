
var expect = require('chai').expect;
var TreeTraverser = require('../index');
var TreeNode = require('../TreeNode');

describe('TreeTraverser - Depth First', function() {

  var rootNode, a, b, c, d, e, f, g, h, i;
  before(function () {
    a = rootNode = new TreeNode('a');
    b = new TreeNode('b');
    c = new TreeNode('c');
    d = new TreeNode('d');
    e = new TreeNode('e');
    f = new TreeNode('f');
    g = new TreeNode('g');
    h = new TreeNode('h');
    i = new TreeNode('i');

    a.addChild(b);
      b.addChild(c);
        c.addChild(d);
        c.addChild(e);
          e.addChild(f);
        c.addChild(g);
    a.addChild(h);
    h.addChild(i);
  });

  describe('nextDepthFirstNode', function() {

    it('node with a child should return its first child', function() {
      expect(index.nextDepthFirstNode(a)).to.equal(b);
    });

    it('node with no children, and a following sibling should return next sibling', function() {
      expect(index.nextDepthFirstNode(d)).to.equal(e);
    });

    it('last child should return its next aunt', function() {
      expect(index.nextDepthFirstNode(f)).to.equal(g);
    });

    it('last node in tree should return the root', function() {
      expect(index.nextDepthFirstNode(i)).to.equal(a);
    });

  });

  describe('previousDepthFirstNode', function() {

    it('node without any siblings should return its parent', function() {
      expect(index.previousDepthFirstNode(i)).to.equal(h);
    })


    it('node with a previous sibling with descendents should return the previous sibling\'s last descendent', function() {
      //console.log(TreeTraverser.previousDepthFirstNode(h).toString());
      expect(index.previousDepthFirstNode(h)).to.equal(g);
    });

    it('node without a parent should return its last descendent', function() {
      expect(index.previousDepthFirstNode(a)).to.equal(i);
    });
  });


});
