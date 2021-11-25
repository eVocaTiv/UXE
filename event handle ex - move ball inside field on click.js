let field = document.getElementById('field');
let ball = document.getElementById('ball');

// #field {
//     width: 200px;
//     height: 150px;
//     position: relative;
//   }
  
//   #ball {
//     position: absolute; // BECAUSE IF FIXED => BALL MOVES ON SCROLLING PAGE.
//     left: 0; /* relative to the closest positioned ancestor (field) */
//     top: 0;
//     transition: 1s all; /* CSS animation for left/top makes the ball fly */
//   }

field.addEventListener('onclick', function(event) {
    const { clientX, clientY } = event;
    ball.style.top = clientY;
    ball.style.left = clientX;
});
