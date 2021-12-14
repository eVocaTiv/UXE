let urls = [
  "https://api.github.com/users/evocativ",
  "https://api.github.com/users/evocativ",
  "https://api.github.com/users/evocativ",
];

let reqs = urls.map((url) => fetch(url));

// reading status
Promise.all(reqs).then((res) =>
  res.forEach((individualRes) =>
    console.log(individualRes.url, individualRes.status)
  )
);

// reading response
Promise.all(reqs)
  .then((res) => res.json())
  .then((users) => users.forEach((user) => console.log(user.name)));
