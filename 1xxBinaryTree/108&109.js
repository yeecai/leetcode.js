//  inorder recursion
var sortedArrayToBST = function(nums) {
 if(!nums.length) return null
 const root = new TreeNode(null)

 if(nums.length > 1) root.left = sortedArrayToBST(nums.splice(0, nums.length/2))
 root.val = nums[0]
 root.right = sortedArrayToBST(nums.splice(1))

 return root
};


//109 2 points or list -> array then 108
var sortedListToBST = function (head) {
    if (!head) return null
    let node = head
    let nums = []
    while (node) {
        nums.push(node.val)
        node = node.next
    }
    return sortedArrayToBST(nums)
};

var sortedListToBST = function (head) {
    var makeTree = function (head, tail) {
        if (head === tail) return null
        var p1 = head, p2 = head
        while(p2 !== tail) {
            p2 = p2.next
            if(p2 !== tail) {
                p1 = p1.next
                p2 = p2.next
            }
        }

        var treeNode = new TreeNode(p1.val)
        treeNode.left = makeTree(head, p1)
        treeNode.right = makeTree(p1.next, tail)
        return treeNode
    }
    return makeTree(head, null)
};


//110
var isBalanced = function(root) {
    const dfs = (node) => {
        if(!node) return true
        let left = dfs(node.left)
        let right = dfs(node.right)
        if(!left || !right || Math.abs(left - right) > 1) return false
        return Math.max(left, right) + 1
    }
    
    return dfs(root)
}; 
