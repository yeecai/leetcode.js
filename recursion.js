//783. Minimum Distance Between BST Nodes
//https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/

var minDiffInBST = function (root) {
    function recursion(node) {
        if (node === null) return;
        recursion(node.left)
        if (last !== null) {
            ans = Math.min(ans, Math.abs(node.val - last));
        }
        last = node.val;
        recursion(node.right)
    }

    let last = null, ans = Infinity;
    recursion(root)

    return ans
};

// 530, same solution do it again for practice
// left -> mid -> right, record last val then compare
// do we have faster solution?
// how about push it into an array
var getMinimumDifference = function (root) {
    function recursion(node) {
        if (node === null) return;
        recursion(node.left)
        if (last !== null) {
            res = Math.min(res, Math.abs(node.val - last))
        }
        last = node.val
        recursion(node.right)
    }

    let last = null, res = Infinity
    recursion(root)
    return res
};

// 16.11. Diving Board LCCI
/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */

// if k = 0 return 
// from all shorties to all longies
var divingBoard = function (shorter, longer, k) {
    if (k === 0) return []
    if (shorter === longer) return [shorter * k]
    var arr = []
    // the most important part :)
    for (let s = k, l = 0; s >= 0, l <= k; s-- , l++)
        arr.push(s*shorter + l*longer)
    return arr
};