'use strict';

// Here's a brief sketch of the class
// with things that you'll need anyway
class HoverIntent {


  constructor({
    sensitivity = 0.1, // speed less than 0.1px/ms means "hovering over an element"
    interval = 100, // measure mouse speed once per 100ms: calculate the distance between previous and next points
    elem,
    over,
    out
  }) {
    this.sensitivity = sensitivity;
    this.interval = interval;
    this.elem = elem;
    this.over = over;
    this.out = out;
    this.speed = Infinity;
    this.lastX = null;
    this.lastY = null;
    this.newX = null;
    this.newY = null;
    this.lastTime = Date.now();
    this.hover = false;
    // make sure "this" is the object in event handlers.
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    // assign the handlers
    elem.addEventListener("mouseover", this.onMouseOver);
    elem.addEventListener("mouseout", this.onMouseOut);

    // continue from this point
    this.updateSpeed = this.updateSpeed.bind(this);
    this.speedInterval;
  }

  onMouseOver(event) {
    this.hover = true;
    this.speedInterval =  setInterval(this.updateSpeed, this.interval);
    // if(this.speed <= this.sensitivity) this.over();
    // this.lastTime = Date.now();
    /* ... */
    // calculate speed
    // if slow or 0, then call over().
  }

  onMouseOut(event) {
    /* ... */
    // call out()
    if(this.hover) {
      this.hover = false;
      this.out();
      clearInterval(this.speedInterval);
    }
  }

  onMouseMove(event) {
    /* ... */
    // update speed
    const { clientX, clientY } = event;
    if(!this.lastX) {
      this.lastX = clientX;
      this.lastY = clientY;
    } else if(!this.newX) {
      this.newX = clientX;
      this.newY = clientY;
    } else {
       this.lastX = this.newX;
       this.lastY = this.newY;
       this.newX = clientX;
       this.newY = clientY;
    }
  }

  updateSpeed() {
    if(!this.lastX || !this.newX) { // i.e cursor not moved yet.
      this.speed = 0;
      return;
    }

    const dist = Math.sqrt(
        Math.pow(this.newX - this.lastX, 2) +
        Math.pow(this.newY - this.lastY, 2)
      );
    this.speed = dist/((this.interval));

    if(this.speed <= this.sensitivity) {
      if(this.hover) this.over();
    }
    // this.lastTime = curTime;
  }

  destroy() {
    /* your code to "disable" the functionality, remove all handlers */
    /* it's needed for the tests to work */
    elem.removeEventListener("mouseover", this.onMouseOver);
    elem.removeEventListener("mouseout", this.onMouseOut);
    elem.removeEventListener('mousemove', this.onMouseMove);
  }

}