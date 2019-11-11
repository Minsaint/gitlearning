// 链表的实现, 链表是指多个对象之间通过属性保存另一个对象的地址简历关联关系的数据结构


// 生成节点的类  
class Node {
    constructor(value) {
        // 当前节点保存的值
        this.value = value;
        // 当前节点保存的下一个节点的地址
        this.next = null
    }
}
// 生成链表的类
class LinkList {
    constructor() {
        // 链表只需要定义第一个节点即可, 找到第一个节点就可以找到整条链表
        this.head = null;
        // 定义变量记录链表长度
        this.length = 0;
    }

    // 向链表添加节点
    append(node) {
        // 判断node是否为节点类型
        if (!(node instanceof Node)) {
            throw new Error('请使用Node类创建节点')
        }
        // 链表为空时,直接给head赋值
        if (this.length === 0) {
            this.head = node;
        } else {
            // 从最后一个节点添加
            let lastNode = this.getNode(this.length - 1);
            lastNode.next = node;
        }
        // 计算链表长度
        this.length++
    }

    // 根据索引获取节点
    getNode(position) {
        // 超出链表范围的返回null
        if (position > this.length || position < 0) {
            return null
        };

        let curNode = this.head;
        let index = 0;
        curNode = this.head;

        while (index < position) {
            curNode = curNode.next;
            index ++;
        }
        return curNode;
    }

    // 查找节点
    indexOf(value) {
        let curNode = this.head;
        let result = -1;
        for (let index = 0; index < this.length; index++) {
            if (curNode.value === value) {
                result = index;
                break;
            }
            curNode = curNode.next;
        }
        return result;
    }

    // 遍历链表
    forEach(callback) {
        let curNode = this.head;
        for (let index = 0, len = this.length; index < len; index++) {
            callback(curNode, index)
            curNode = curNode.next;
        }
    }

    // 插入节点到链表的任意位置
    insert(position, node) {
        // 超出链表范围的返回null
        if (position > this.length || position < 0) {
            return null
        }
        
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let preNode = this.getNode(position - 1);
            node.next = preNode.next;
            preNode.next = node;
        }
        return ++ this.length;
    }

    // 删除节点
    remove(position) {
        if (position > this.length || position < 0) {
            return null
        }
        let curNode = this.head;
        if (position === 0) {
            this.head = curNode.next 
        } else {
            let preNode = this.getNode(position -1);
            curNode = preNode.next
            preNode.next = curNode.next;
        }
        this.length --;
        return curNode;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    
}
var list = new List();
var arr = [1,2,3,4,5,6,7]
arr.forEach(val => {
    console.log('添加:==>>', val);
    list.append(new Node(val))
});
console.log(list)