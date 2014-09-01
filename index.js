
function TreeNode() {
  console.log('i am a tree');
  this._children = [];
}


Object.defineProperties(TreeNode.prototype, { 
  "children": {
    get: function() {
      return this._children;	
    }
  }
});
module.exports = TreeNode;
