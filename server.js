//Install express server
const express = require('express');
var fallback = require('express-history-api-fallback');
const path = require('path');
const app = express();

// Start the app by listening on the default Heroku port
var root = __dirname + '/dist/angular-practice-app'

// Serve static files
app.use(express.static(root));
app.use(fallback('index.html', { root: root }));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-practice-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
