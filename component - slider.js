<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <div id="slider" class="slider">
    <div class="thumb"></div>
  </div>

  <script>
      const thumb = slider.querySelector('.thumb');

      thumb.onmousedown = function(event) {
        event.preventDefault();
        // slider is relatively positioned wrt. slide area.
        const {clientX, clientY} = event;
        const shiftX = clientX - thumb.getBoundingClientRect().x;


        document.onmousemove = onMouseMove;
        document.onmouseup = onMouseUp;

        function onMouseMove(event) {
          let calcX = event.clientX - slider.getBoundingClientRect().x - shiftX;
          if(calcX < 0) calcX = 0;
          if(calcX > slider.clientWidth) calcX = slider.clientWidth - thumb.offsetWidth;
          thumb.style.left = calcX + 'px';
        }

        function onMouseUp(event) {
        document.onmousemove = null;
        document.onmouseup = null;
        }
      }
  </script>

</body>
</html>