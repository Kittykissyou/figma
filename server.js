const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
const createPath = (page) => path.resolve(__dirname, `${page}.html`);
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.get('/', (req, res) => {
  res.sendFile(createPath('index'));
});
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Server started on ${PORT} port`);
});
