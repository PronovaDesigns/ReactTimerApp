var express = require('express');

// Create our app
var app = express();

// Access environement variable from heroku or start on 3000
const PORT = process.env.PORT || 3000;

// Express middle-ware -- lets us do something with every request
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
