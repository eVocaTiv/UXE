/**
 * @param {HTMLElement} 
 * @return {object} object literal presentation
 */
 function virtualize(element) {
    // your code here
    const el = element;
    let res = {};
    res.type = el.nodeName.toLowerCase();
    res.props = {};
    for(let attr of el.attributes) {
      const name = attr.name === 'class' ? 'className' : attr.name;
      res.props[name] = attr.value;
    }
    let childsss = [];
    for(let child of el.childNodes) {
      // IMPORTANT
      if(child.nodeType === 3) // text node 
       childsss.push(child.textContent);
      else
        childsss.push(virtualize(child));
    }
    res.props.children = childsss.length === 1 ? childsss[0] : childsss
  
    return res;
  }
  
  
  /**
   * @param {object} valid object literal presentation
   * @return {HTMLElement} 
   */
  function render(obj) {
    // your code here
    if(typeof obj === 'string') return obj;
    let el = document.createElement(obj.type);
    for(let [key, val] of Object.entries(obj.props)) {
      
      if(key === 'children') {
        let objChildren = obj.props.children;
        if(typeof objChildren !== "string") {
          for(let innerChild of objChildren) {
            if(typeof innerChild === 'string') {
              el.appendChild(document.createTextNode(innerChild))
            } else {
              el.appendChild(render(innerChild));
            }         
          }
        } else {
          let onlyChild = document.createTextNode(objChildren);
          el.appendChild(onlyChild);
        }
      }
      
      else {
        el[key] = val;
      }
    }
    return el;
  }
  