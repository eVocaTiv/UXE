document.addEventListener('scroll', function() {
    let docBot = document.documentElement.getBoundingClientRect().bottom;
    let scrolled = document.pageOffsetY + document.documentElement.clientHeight;
    
    if(docBot - scrolled <= 100) {
        // add more content to keep endless scroll going on.
        document.body.insertAdjacentHTML("beforeend", `<p>Yo this is some new content!</p>`);
    }

})