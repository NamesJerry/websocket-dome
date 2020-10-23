var express = require('express');
var router = express.Router();
var expressWs = require('express-ws')(router);

// var app = express();
// var expressWs = require('express-ws')(app);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 
router.ws('/echo', function(ws, req) {
  ws.on('message', function(msg) {
    ws.send('进来了');
  });
});


module.exports = router;
