function sortObj(obj) {
    return Object.keys(obj).sort().reduce((res, key) => res[key] = obj[key], {});
}

 