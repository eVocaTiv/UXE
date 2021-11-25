let elem = document.createElement('div');

elem.addEventListener('click', () => alert('you clicked me!'));


elem.removeEventListener('click', () => alert('you clicked me!'));
// Doesn't work because the function is a different object from the original assignment 
// i.e can't read back the handlers assigned unless stored in a variable!!


// For some events, handlers only work with addEventListener & not through attribute / dom property assignment
// eg.


// doesnt work
document.onDOMContentLoaded = function() {
    alert('dom built');
}

// works
document.addEventListener('DOMContentLoaded', function() {
    alert('dom built');
})

// When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.
// => can extract event details like pointer coordinates, which key was pressed, etc.

elem.onclick = function(event) {
    const { type, currentTarget, clientX, clientY } = event;

    // currentTarget is same as 'this' unless we use arrow functions in the handler or bound it to something else.
}

// can also assign an object as an event handler => handleEvent method is executed by default

let obj = {
    handleEvent(event) {}
}

elem.addEventListener('click', obj); // invokes obj's handleEvent.



