const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use(express.static("./public"));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function () {
    console.log('server running on port ' + port);
});
