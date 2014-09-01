var TreeNode = require('../index');
var expect = require('chai').expect;

describe('TreeNode', function() {
   describe('constructor', function() {
     it('should be possible to create a treenode', function() {
       var root = new TreeNode();
       expect(root).not.to.be.null;     
     });
   });
});
