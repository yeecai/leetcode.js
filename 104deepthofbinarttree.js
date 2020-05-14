// 1.BFS
var maxDepth = function (root) {
    let res = [];
    if (!root) return res;
    // hmm should be q instead of p
    let level = 0
    let p = [];
    p.push(root);
    while (p.length) {
        level++;
        let len = p.length
        for (let i = 0; i < len; i++) {
            let node = p.shift()
            if (node.left) p.push(node.left)
            if (node.right) p.push(node.right)
        }
    }
    return level
};
