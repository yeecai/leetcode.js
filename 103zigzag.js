var zigzagLevelOrder = function (root) {
    const res = [];
    if (!root) return res;

    const q = [];
    q.push(root);
    var flag = true; // if single zig, even zag
    while (q.length) {
        const len = q.length
        res.push([])
        node = q.shift() //singe by order, even reverse
        for (let i = 0; i < len; i++) {
            if (flag) { //zig
                res[res.length - 1].push(node.val)
            } else {
                res[res.length - 1].unshift(node.val)
            }
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        flag = !flag
    }
    return res
};
