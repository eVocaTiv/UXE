// Given input:

// // could be potentially more than 3 keys in the object above
// items = [
// {color: 'red', type: 'tv', age: 18},
// {color: 'silver', type: 'phone', age: 20}
// ...
// ] - n

// excludes = [
// {k: 'color', v: 'silver'},
// {k: 'type', v: 'tv'},
// ....
// ] - e
// function excludeItems(items, excludes) {
// excludes.forEach(pair => {
// items = items.filter(item => item[pair.k] === item[pair.v]);  
// });
// return items;
// }

// 1. Describe what this function is doing...
// 2. What is wrong with that function ?
// item[pair.k] !== pair.v --- correct way
// 3. How would you optimize it ?
// O(en)


let set = new Set();
excludes.forEach(({k, v}) =>  {
    set.add(`${k}-${v}`);
})


function excludeItems(items, excludesMap) { // O(n*p) ~ O(n)
    items = items.filter(item => !shouldBeExcluded(item, excludesMap))
}

function shouldBeExcluded(item, map) { // assuming #properties is constant, O(p) ~ O(1)
    for(let [key, val] of Object.entries(item)) {
        if(set.has(`${key}-${val}`)) return true;
    }
    return false;
}

// O(e) space for the map.