function replaceText(query, replacement, node) {
    if(!node || !query || typeof replacement !== 'string') return;

    if(node.nodeType === Node.TEXT_NODE) {
        console.log(node.nodeValue);
        node.nodeValue = node.nodeValue.replaceAll(new RegExp(query, 'g'), replacement);
        console.log(node.nodeValue);

    } else {
        Array.from(node.childNodes).forEach(child => { // use for loop to save space.
            replaceText(query, replacement, child);
        })
    }
}



Q1. implement EventManager

addEventListener
removeEventListener
dispatchEvent

EventManager.addEventListener('click', () => {} )


// follow ups
1. Memory leak prevention
2. runtime optimizn (use set?)
3. map vs object
4. 

Q2. find nextSibling of given tree.


       div
    /   |   \
div -> div -> div
/ \     |      |
a->p -> a  ->  p
|  |           |
a->span -> button 


       div
    /   |   \
div -> div -> div
/ \     |      |
a->p -> a  ->  p
|       |
a  -> button 




$('button')
.css('color', '#fff') 
.css('backgroundColor', '#000') 
.css('fontWeight', 'bold')


implement 




+ communications
+ thought process
+ able to pick up hints




- object vs map, not certain
- use examples
- outline your approach and discuss w/ interviewer
- confused w/ simple methods, maybe better to brush up, 
- uncertain about set iteration order
- minor mistakes - syntax error, == instead of ===, bugs.
- keep track of Time, focus on writing code vs long discussions (unless prompted by interviewer)