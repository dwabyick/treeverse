var TreeNode = require('../TreeNode');
var expect = require('chai').expect;

describe('TreeNode', function() {

  var rootNode, b, c;
  before(function() {
    rootNode = new TreeNode('a');
    b = new TreeNode('b');
    c = new TreeNode('c');
  });

  describe('root constructor', function() {

     it('should be possible to create a treenode', function() {
       expect(rootNode).not.to.be.null;
     });

     it('should not have any children', function() {
       expect(rootNode.children).not.to.be.null;
       expect(rootNode.children.length).to.equal(0);
     });

     it('should not have a parent', function() {
      expect(rootNode.parent).to.be.null;
     });

  });

  describe('addChild()', function() {

    beforeEach(function() {
      rootNode = new TreeNode();
    });

    it('should put the argument in the children array', function() {
      rootNode.addChild(b);
      expect(rootNode.children.indexOf(b)).to.equal(0);
    });

    it('should set the parent of the child node', function() {
      rootNode.addChild(b);
      expect(b.parent).to.equal(rootNode);
    });

    it('should put arguments in the correct order', function() {
      rootNode.addChild(b);
      rootNode.addChild(c);
      expect(rootNode.children).to.deep.equal([b,c]);
    });

    it('should not add the child twice', function() {
      rootNode.addChild(b);
      rootNode.addChild(b);
      expect(rootNode.children.length).to.equal(1);
    });



  });



});
