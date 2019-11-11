// 栈的实现 FILO
export default class Stack {
    stack = [];
    // 栈添加的方法
    add(item) {
        this.stack.unshift(item);
        return this.stack.length;
    }
    // 从栈弹出的方法
    shift() {
        return this.stack.shift();
    }
    // 读取栈长度
    sieze() {
        return this.stack.length;
    }
    // 返回第一个元素, 栈不变
    top() {
        return this.stack[0];
    }
    // 清空栈
    clear() {
        this.stack = [];
    }
    // 栈判空
    isEmpty() {
        return this.sieze() === 0;
    }
}
