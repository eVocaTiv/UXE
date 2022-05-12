// Return the maximum possible font-size
// that can be applied to the textString inside domNode such that
// the textString will fit inside domNode without overflowing (i.e will be in a single line)

// @return {node}
// function getMaxFontSize(str, node) {
//   const origOverflow = node.style.overflow;
//   const origTextContent = node.textContent;
//   const origHeight = node.clientHeight;
//   const origWidth = node.clientWidth;
//   function isCellOverflowing(element) {
//     return element.scrollHeight > origHeight || element.scrollWidth > origWidth;
//   }

//   const origFontSize = parseInt(
//     window.getComputedStyle(node).getPropertyValue("font-size")
//   );
//   let res = origFontSize + 1; // node.style.fontSize will be '' if set from a stylesheet.
//   node.textContent = str;
//   node.style.overflow = "auto";

//   while (!isCellOverflowing(node)) {
//     node.style.fontSize = `${res}px`;
//     res++;
//   }
//   node.textContent = origTextContent;
//   node.style.fontSize = `${origFontSize}px`;
//   node.style.overflow = origOverflow;
//   return res - 1;
// }






// Assuming overflow is wrt offset H/W

// for overflow wrt client H / client W (get text ht / width using getComputerStyle(node).getPropertyValue('width/height)) 
// and compare it with original clientH/W

function getMaxFontSize(str, node) {
  const nodeOH = node.offsetHeight;
  const nodeOW = node.offsetWidth;
  const nodeTextContent = node.textContent;
  const nodeCurOverflow = node.overflow;

  node.textContent = str;
  node.overflow = 'auto';

  const origFontSize = parseInt(
    window.getComputedStyle(node).getPropertyValue("font-size")
  );

  function isSizeValid(fontSize, node) {
    node.style.fontSize = `${fontSize}px`;
    // IMP - If overflow wrt context box then subtract padding aswell.
    return node.scrollHeight <= nodeOH && node.scrollWidth <= nodeOW;
  }

  let lo = str === nodeTextContent ? origFontSize : 1; // We don't know if new str causes overflow at original font size or not.
  let hi = nodeCH;
  let mid;
  let res = origFontSize;
  console.log(lo, hi);
  while(lo <= hi) {
    mid = Math.floor(lo + (hi-lo)/2);

    if(isSizeValid(mid, node)) {
      res = mid;
      lo = mid+1;
    } else {
      hi = mid-1;
    }
  }

  node.textContent = nodeTextContent;
  node.overflow = nodeCurOverflow;
  node.fontSize = origFontSize;

  return res;

}
