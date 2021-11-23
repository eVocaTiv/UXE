function createMessageUnder(elem, html) {
    let msg = document.createElement('div');
    msg.style.cssText = "position:fixed; color:red";
    let coords = elem.getBoundingClientRect();

    msg.style.left = coords.left + "px";
    msg.style.top = coords.top + "px";
    msg.innerHTML = html;
    return msg;
}

let message = createMessageUnder(elem, 'Hello World');
let elem = document.getElementById('coords-show-mark');

document.body.append(message);
setTimeout(() => message.remove(), 1000);
