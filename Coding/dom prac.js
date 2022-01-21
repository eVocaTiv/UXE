let el = document.createElement('div');
el.textContent = 'hello';
el.setAttribute('id','some-id')

document.body.after(el);

let child = document.createElement('div');
child.textContent = 'child'
el.prepend(child);