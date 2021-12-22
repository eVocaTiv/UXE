// measure time between 'n' requestAnimationFrames

let prevTime = performance.now();
let count = 0;

requestAnimationFrame(function measureTime(currentTime) {
    document.body.insertAdjacentHTML('beforeend', Math.floor(currentTime-prevTime) + " ")
    prevTime = currentTime;

    if(count++ < 10) requestAnimationFrame(measureTime);
}) 


// A helper animate function setup for most animations

function animate({timing, draw, duration}) {
    let start = performance.now();

    requestAnimationFrame(function doAnimate(time) {
        let timeFraction = (time-start)/duration;
        if(timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress);

        if(timeFraction < 1) {
            requestAnimationFrame(doAnimate);
        }
    })
}