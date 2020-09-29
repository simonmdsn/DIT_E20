const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/', (req, res, next) => {
    res.send("Hello, world!");
})