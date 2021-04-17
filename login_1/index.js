var express = require('express');
var app = express();
var path = require('path');
const PORT = "8080"

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/public')));

// viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/src/index.html'));
// });

app.listen(PORT);
console.log(`Listening on port ${PORT}`)