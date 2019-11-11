/**
 * constructor 要被执行的构造函数
 * 第一个参数往后为constructor执行时的入参
 */
let myNew = function (constructor) {
    if (!(constructor instanceof Function)) { throw new Error('arguments[0] require a function')};

    let restArgs = Array.prototype.slice.call(arguments, 1);
    // 第一步 创建一个新对象并关联构造函数原型
    let instance = Object.create(constructor.prototype)
    // 相当于
    // let instance = {};!(constructor instanceof Function)
    // instance.__proto__ = constructor.prototype;

    // 第二步 将构造函数的this指向该对象
    // 第三步 执行构造函数
    let result = constructor.apply(instance, restArgs)
    // 第四部 返回该新对象
    return result instanceof Object ? result : instance
}

/****************************测试用例*************************************/
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function() {console.log('My name is great ', this.name)};

var P1 = new Person('Alex', 22);
console.log(P1, P1.sayHi())

var P2 = myNew(Person, 'Bob', 23)
console.log(P2, P2.sayHi())