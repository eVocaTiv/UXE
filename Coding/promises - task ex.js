// Rewrite below code using async/await

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("no-such-user.json").catch(alert); // Error: 404


async function loadJsonAsync(url) {
    let response = await fetch(url);

    if(response.status === 200) {
        let result = await response.json();
        return result;
    } 
        throw new Error(response.status)
}