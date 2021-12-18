/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
 function isEqual(a, b, map = new Map()) {
    if(a === b) return true; // cover promitives and same objects
    if(typeof a !== 'object' || typeof b !== 'object') return false;
    
    if(map.has(a) && (map.get(a) === b)) return true;
    map.set(a, b);
  
    let keysA = [...Object.getOwnPropertySymbols(a), ...Object.keys(a)];
    let keysB = [...Object.getOwnPropertySymbols(b), ...Object.keys(b)];
    
   
    if(keysA.length !== keysB.length) return false;
    
    for(i=0; i<keysA.length; i++) {
      if(keysA[i] !== keysB[i]) return false;
      if(!isEqual(a[keysA[i]], b[keysB[i]], map)) return false;
    }
  
    return true;
  
  }