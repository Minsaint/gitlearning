/**
 * 传统递归求斐波那契数列
 *
 * @param {Number} n 第n项
 * @returns
 */
function fibonacci(n) {
    if(n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

/**
 * 尾递归优化(在一个函数的最后一步调用另一个函数)
 * @param {Number} n 
 */
function tailFactorial(n) {
    let fib = function(cur, next, n) {
        if (n === 1) {
            return cur;
        }
        return fib(next, cur + next, n - 1)
    }
    return fib(1, 1, n)
}

/**
 * 数组缓存
 *
 * @param {number} n
 * @returns
 */
function fib1(n) {
    let fibList = [1, 1];
    let index = 2;
    while (index < n) {
        fibList[index] = fibList[index - 1] + fibList[index - 2]
        index ++;
    }
    return fibList[n - 1];
}


function fib2(n) {
    let first =  1;
    let second = 1;
    let third = 2;
    if(n <= 2) return first;
    for (let index = 2; index < n; index++) {
        third = first + second;
        first = second;
        second = third;
    }
    return third;
}


/**
 * 计算函数执行耗时
 *
 * @param {Function} callback 要测量的函数
 * @param {any} rest 函数执行时的入参
 */
function timming(callback, ...rest) {
    console.time();
    callback.apply(null, rest);
    console.timeEnd();
}

