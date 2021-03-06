// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
// Get our API routes
const api = require('./server/routes/api');
//
// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

const app = express();

app.use(cors());
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/moenaDbApp')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/moenaDbApp/index.html'));
});

/**
 * Get port from environments and store in Express.
 */
const port = process.env.PORT || '4200';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost: ${port
  }`));
