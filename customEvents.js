let myMouseEvent = new MouseEvent("click", {
  bubbles: true,
  cancelable: true,
  clientX: 100,
});

let el = document.querySelector("body");

el.dispatchEvent(myMouseEvent);

el.dispatchEvent(
  new CustomEvent("hello", {
    detail: { name: "Kunal" },
  })
);
