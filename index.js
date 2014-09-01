/**
 * Functions for depth-first and breadth-first tree traversal.
 *
 * What differentiates this mini-lib is that it provides iterator
 * functions that do not require a complete traversal of the tree.
 */

/**
 * Return the next node using a depth first tree traversal.
 * @param node The given node
 * @return The next node in the depth first traversal, looping to the root if available.
 */
var nextDepthFirstNode = function(node) {

  var index, parent;
  if (node.children.length > 0) {
    return node.children[0];
  }
  else {
    while (parent = node.parent) {
      index = parent.children.indexOf(node);
      if (index < parent.children.length - 1) {
        return parent.children[index + 1];
      }
      node = node.parent;
    }
    return node;
  }
};


/**
 * Return the previous node using a depth first tree traversal.
 * @param node The given node
 * @return The previous node in the depth first traversal, looping to the last descendent if necessary.
 */
var previousDepthFirstNode = function(node) {
  var index, parent;
  parent = node.parent;
  if (parent) {
    index = parent.children.indexOf(node);
    if (index === 0) {
      return parent;
    }
    else {
      return _selectLastDescendent(parent.children[index-1]);
    }

  }
  else {
    return _selectLastDescendent(node);
  }

}

var _selectLastDescendent = function(node) {
  while (node.children.length > 0) {
    node = node.children[ node.children.length - 1 ];
  }
  return node;
}

module.exports.nextDepthFirstNode = nextDepthFirstNode;
module.exports.previousDepthFirstNode = previousDepthFirstNode;
