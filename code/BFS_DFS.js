// 准备一个对象
const tree = {
    '1': {
        '1-1': {
            '1-1-1': {
                '1-1-1-1': {
                    '1-1-1-1-1': '1-1-1-1-1'
                }
            },
            '1-1-2': {
                '1-1-2-1': '1-1-2-1',
                '1-1-2-2': {
                    '1-1-2-2-1': '1-1-2-2-1'
                }
            },
        },
        '1-2': {
            '1-2-1': {
                '1-2-1-1': '1-2-1-1'
            },
            '1-2-2': 'i',
        },
        '1-3': {
            '1-3-1': {
                '1-3-1-1': '1-3-1-1'
            },
        },
        '1-4': {
            '1-4-1': {
                '1-4-1-1': '1-4-1-1'
            },
            '1-4-2': '1-4-2'
        },



    }
}
// Breadth First Search 广度搜索优先 BFS
// 利用队列,将每个key作为一个节点, val作为子节点, 遇到一个节点将其入列, 然后出列的时候, 将其子节点再入列, 以此类推
let BFS = (function () {
    let list = [];

    return function(obj) {
        for (let key in obj) {
            console.log('push:', key, obj[key])
            // 入列
            list.push(obj[key])
        }

        while (list.length > 0) {
            // 出列
            let top = list.shift();
            // 当前仅考虑对象的情况
            if (top instanceof Object) {
                arguments.callee(top);
            }
        }
    }
})()
// BFS(tree);

// Deep First Search 深度优先 DFS
// 利用栈的先进后出的原理,实现回溯到上一节点;
let DFS = function(obj) {
    for(let key in obj) {
        console.log('已遍历的节点:', key, obj[key])
        if(obj[key] instanceof Object) {
            arguments.callee(obj[key])
        }
    }
}

DFS(tree)