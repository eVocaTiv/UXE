// loadscript using callback
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
  }

  
// promisify loadscript
// i.e convert it into a function that returns a promise (& uses loadScript()) & doesn't take in callback as a param.

function loadScriptPromise(src) {
    return new Promise(function(resolve, reject) {
        // we can see the callback logic is embedded in the executor code.
        // error-first style.
        loadScript(src, (err, script) => {
            if(err) reject(err)
            resolve(script);
        })
    })
}

function promisifyAsyncF(f) {
    function wrapper(data) {
        return new Promise(function(rs, rj) {
            f(num, (err, data) => {
                if(err) rj(err)
                rs(data)
            })
        })
    }

    return wrapper;
}

