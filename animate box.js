function animate(element, duration, distance) {
    if(!duration) return;
    let startTime = Date.now();
    const speed = distance/duration;
    requestAnimationFrame(function moveRight() {
      const curTime = Date.now();
      const elapsedTime = curTime - startTime;
      element.style.transform = `translateX(${elapsedTime*speed}px)`
      if(elapsedTime <= duration) {
        requestAnimationFrame(moveRight);
      }
    });
  }
  animate(el, 2000, 200);
// animate(element, MS, PIXELS)