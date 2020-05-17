//variant of 102
var levelOrderBottom = function (root) {
    // unshift level order traversal
    let res = []
    if (!root) return res
    let q = []
    q.push(root)
    while (q.length) {
        res.unshift([])
        let len = q.length
        for (let i = 0; i < len; i++) {
            let node = q.shift()
            res[0].push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
    }
    return res
};
