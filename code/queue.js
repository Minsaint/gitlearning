// 队列的实现 FIFO
export default class Queue {
    queue = [];
    // 队列有从队列尾部添加的方法
    add(item) {
        this.queue.push(item);
        return this.queue.length;
    }
    // 从队列头部弹出的方法
    shift() {
        return this.queue.shift();
    }
    // 读取队列长度
    sieze() {
        return this.queue.length;
    }
    // 返回第一个元素, 队列不变
    top() {
        return this.queue[0];
    }
    // 清空队列
    clear() {
        this.queue = [];
    }
    // 队列判空
    isEmpty() {
        return this.sieze() === 0;
    }
}
