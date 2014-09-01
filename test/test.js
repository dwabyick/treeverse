
var expect = require('chai').expect;
var TreeTraverser = require('../index');
var TreeNode = require('../TreeNode');

describe('TreeTraversal - Depth First', function() {

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
      expect(TreeTraverser.nextDepthFirstNode(a)).to.equal(b);
    });

    it('node with no children, and a following sibling should return next sibling', function() {
      expect(TreeTraverser.nextDepthFirstNode(d)).to.equal(e);
    });

    it('last child should return its next aunt', function() {
      expect(TreeTraverser.nextDepthFirstNode(f)).to.equal(g);
    });

    it('last node in tree should return the root', function() {
      expect(TreeTraverser.nextDepthFirstNode(i)).to.equal(a);
    });

  });

  describe('previousDepthFirstNode', function() {

    it('node without any siblings should return its parent', function() {
      expect(TreeTraverser.previousDepthFirstNode(i)).to.equal(h);
    })


    it('node with a previous sibling with descendents should return the previous sibling\'s last descendent', function() {
      expect(TreeTraverser.previousDepthFirstNode(h)).to.equal(g);
    });

    it('node without a parent should return its last descendent', function() {
      expect(TreeTraverser.previousDepthFirstNode(a)).to.equal(i);
    });
  });

  describe('depthFirstTraversal', function() {
    it('should properly traverse from the root node', function() {
      expect(TreeTraverser.depthFirstTraversal(a)).to.deep.equal([a,b,c,d,e,f,g,h,i]);
    });

    it('should properly traverse from an arbitrary node', function() {
      expect(TreeTraverser.depthFirstTraversal(e)).to.deep.equal([e,f,g,h,i]);
      expect(TreeTraverser.depthFirstTraversal(i)).to.deep.equal([i]);
    });

    it('should properly loop from an arbitrary node', function() {
      expect(TreeTraverser.depthFirstTraversal(e, { looping:true })).to.deep.equal([e,f,g,h,i,a,b,c,d])
    });
  });



});
