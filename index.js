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

/**
 * Return a depth first traversal of the tree from the given node.
 *
 * @param node
 * @options
 *  - looping: true if it should loop through the root node. false (default) otherwise.
 * @returns An ordered array of nodes that represents the depth-first traversal of the tree.
 * @private
 */
var depthFirstTraversal = function(node, options)  {
  var res = [node];
  var next = node;
  var looping = options && options.looping;

  while ((next = nextDepthFirstNode(next)) != node) {
    if (looping || next.parent) {
      res.push(next);
    }
    else { // we hit the root and we're not looping. we're done.
      return res;
    }
  }
  return res;
}

var _selectLastDescendent = function(node) {
  while (node.children.length > 0) {
    node = node.children[ node.children.length - 1 ];
  }
  return node;
}

module.exports.nextDepthFirstNode = nextDepthFirstNode;
module.exports.previousDepthFirstNode = previousDepthFirstNode;
module.exports.depthFirstTraversal = depthFirstTraversal;
