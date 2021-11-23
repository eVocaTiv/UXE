function positionAt(anchor, position, elem) {
    
    let anchorBox = anchor.getBoundingClientRect();
    elem.style.position = 'fixed';
    isHidden = (elem) => !elem.offsetHeight && !elem.offsetWidth;

    // base case - elem must be visible in the doc.
    if(!isHidden(anchor)) {
        switch(position) {
            case 'top': {
                elem.style.bottom = anchorBox.top + "px"; // or elem.style.top = anchorBox.top - elem.offSetHeight + "px";
                elem.style.left = anchorBox.left + "px";
            } 
            case 'right': {
                elem.style.left = anchorBox.right  + "px";
                elem.style.top = anchorBox.top + "px";
            }
            case 'bottom':
            default: {
                elem.style.top = anchorBox.bottom + "px";
                elem.style.left = anchorBox.left  + "px";
            }
            
        }
    }
    // showNote(anchor, position, html);
}


// assume showNote(anchor, position, html) is implemented which shows an annotated note.