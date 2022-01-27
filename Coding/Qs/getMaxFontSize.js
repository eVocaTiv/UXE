// Return the maximum possible font-size
// that can be applied to the textString inside domNode such that
// the textString will fit inside domNode without overflowing (i.e will be in a single line)

// @return {node}
function getMaxFontSize(str, node) {
  const origOverflow = node.style.overflow;
  const origTextContent = node.textContent;
  const origHeight = node.clientHeight;
  const origWidth = node.clientWidth;
  function isCellOverflowing(element) {
    return element.scrollHeight > origHeight || element.scrollWidth > origWidth;
  }

  const origFontSize = parseInt(
    window.getComputedStyle(node).getPropertyValue("font-size")
  );
  let res = origFontSize + 1; // node.style.fontSize will be '' if set from a stylesheet.
  node.textContent = str;
  node.style.overflow = "auto";

  while (!isCellOverflowing(node)) {
    node.style.fontSize = `${res}px`;
    res++;
  }
  node.textContent = origTextContent;
  node.style.fontSize = `${origFontSize}px`;
  node.style.overflow = origOverflow;
  return res - 1;
}
