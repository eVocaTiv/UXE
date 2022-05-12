// get text between 2 nodes excluding both.
// function getTextBetween(f, nodeA, nodeB, res = [], seenA = false, seenB = false) {
//     if(!nodeA || !nodeB || !f) return res;
//     if(f === nodeA) seenA = true;
//     if(f === nodeB) seenB = true;

//     if(seenB) return res;

//     if(seenA && nodeA !== f) {
//         if(f.nodeType === Node.TEXT_NODE) res.push(f.nodeValue);
//     }
//     if(f.nodeType === Node.TEXT_NODE) console.log(f.nodeValue, seenA, seenB)


//     for(const child of f.childNodes) {
//         getTextBetween(child, nodeA, nodeB, res, seenA, seenB);
//     }
//     return res;
// }