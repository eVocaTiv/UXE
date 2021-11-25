getDocCoords(elem) {
    // pageX = clientX + height of scrolled-out vertical part of the doc.
    let box = elem.getBoundingClientRect();
    let clientX = elem.x;
    let clientY = elem.y;

    return {
        top: box.top + window.scrollY,
        bottom: box.bottom + window.scrollY,
        right: box.right + window.scrollX,
        left = box.left + window.scrollX,
    }
}