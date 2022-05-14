require("http")
    .createServer((_, res) => res.end('Hi'))
    .listen(10, () => console.log('App started at http://localhost:10'))