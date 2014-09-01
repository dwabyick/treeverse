/**
 * A minimal TreeNode class to test the traversal functions.
 * @constructor
 */

function TreeNode(id) {
  this._id = id;
  this._children = [];
  this._parent = null;
}


Object.defineProperties(TreeNode.prototype, { 
  "children": {
    get: function() {
      return this._children;	
    }
  },
  "parent": {
    get: function() {
      return this._parent;
    }
  }
});


TreeNode.prototype.addChild = function (child) {
  if (this._children.indexOf(child) >= 0) {
    return;
  }
  else {
    this._children.push(child);
    child._parent = this;
  }
}

TreeNode.prototype.toString = function() {
  return 'TreeNode: ' + this._id;
}

module.exports = TreeNode;
