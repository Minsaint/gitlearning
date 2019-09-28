// 定义Promise的三种状态常量
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class Promise_Self {
    // Promise的状态
    state = PENDING;
    // Promise的值
    value = undefined;
    // 用于收集then方法执行时传入的resolve处理函数
    onReolvedCallback = [];
    // 用于收集then方法执行时传入的reject函数
    onRejectedCallback = [];

    constructor(executor) {
        debugger
        if (typeof executor !== 'function') {
            throw new Error('params require function');
        }

        // 执行处理函数并传入两个回调函数
        try {
            // 使用bind是为了保证resolve在executor中执行的时候,this能够正确的指向Promise的实例
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (err) {
            this.reject.bind(this)(err);
        }
    }

    then(onResolve, onReject) {
        console.log('then执行', onResolve);
        return new Promise_Self((resolve, reject) => {
            this.handle({
                resolve: resolve,
                reject: reject,
                onResolve: onResolve || null,
                onReject: onReject || null
            })
        })
    }
    handle(option) {
        
        // 若then执行时状态为pendding则添加进执行数组中
        if (this.state === PENDING) {
            this.onReolvedCallback.push(option);
            console.log('执行队列:======>>>>', this.onReolvedCallback, this)
            return;
        }
        if (!option.onResolve && !option.onReject) {
            option.resolve(this.value)
            return;
        }
        if (this.state === FULFILLED) {
            let resolveRet = option.onResolve(this.value);
            return option.resolve(resolveRet);
        }
        let rejectRet = option.onReject(this.value);
        return option.reject(rejectRet);

    }

    // 成功状态的处理函数
    resolve(val) {
        console.log('resolve执行', val);
        debugger
        if (val && (typeof val === 'object' || typeof val === 'function')) {
            let then = val.then;
            if (typeof then === 'function') {
                then.call(val, this.resolve.bind(this));
                return;
            }
        }
        if (this.state !== PENDING) {
            return
        };
        this.state = FULFILLED;
        this.value = val;
        this.onReolvedCallback.forEach(option => this.handle(option));
    }

    // 失败的处理函数
    reject(err) {
        if (this.state !== PENDING) {
            return
        };
        this.state = REJECTED;
        this.value = err;
        this.onRejectedCallback.forEach(fn => fn(err));
    }
}