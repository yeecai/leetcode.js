// https://leetcode.cn/problems/maximum-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    const max = (nums) => {
        const maxVal = Math.max.apply(Math, nums)
        const maxIndex = nums.indexOf(maxVal)
        return { maxVal, maxIndex }
    }
    const recur = (nums) => {
        const { maxVal, maxIndex } = max(nums)
        const node = new TreeNode(maxVal)
        if(maxIndex > 0) {
            node.left = recur(nums.slice(0, maxIndex))
        }
       if(maxIndex < nums.length - 1) {
            node.right =  recur(nums.slice(maxIndex + 1))
       }
        return node
    }
    return recur(nums)
};
