

function curry(f) {
    return function curried(...args) {
        if(f.length <= args.length) {
            // args passed are more than function has in it's definition.
            // so just call it.
            return f.apply(this, args);
        } else {
            // transform into a partial.
            return function(...argsNext) {
                return curried.apply(this, args.concat(argsNext))
            }
        }
    }
}






// usage
function sum(a,b) {
    return a+b;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2));
