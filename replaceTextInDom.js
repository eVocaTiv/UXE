function replaceText(query, replacement, node) {
    if(!node || !query || typeof replacement !== 'string') return;

    if(node.nodeType === Node.TEXT_NODE) {
        console.log(node.nodeValue);
        node.nodeValue = node.nodeValue.replaceAll(new RegExp(query, 'g'), replacement);
        console.log(node.nodeValue);

    } else {
        node.childNodes.forEach(child => {
            replaceText(query, replacement, child);
        })
    }
}