var express = require('express');
var multer = require('multer');
var exec = require("child_process");
var spawn = require("child_process").spawn;
var router = express.Router();

var upload = multer({ dest: 'uploads/' });

/* POST sample */
router.post('/', upload.single('music'), function(req, res, next) {
  // res.send('lofi-fy');
  // res.status(200);
  console.log(req.file);
  console.log(req.file.filename);
  console.log(req.file.destination);
  console.log('body...');
  console.log(req.body);
  console.log(req.body['bpm']);
  var proc = spawn('/home/bitnami/projects/lofify/run_foxsamply.sh', [req.file.filename, req.body['bpm'], 'lofi/output']);
  proc.stdout.on('data', (data) => {
    console.log('stdout: ' + data.toString());
  });
  proc.stderr.on('data', (data) => {
    console.log('stderr: ' + data.toString());
  });
  proc.on('exit', (data) => {
    console.log('proc exited');
    res.redirect('/out.html');
  });
});

router.get('/', function(req, res, next) {
  var proc = spawn('ls');
  proc.stdout.on('data', (data) => {
    console.log('stdout: ' + data.toString());
  });
  proc.stderr.on('data', (data) => {
    console.log('stderr: ' + data.toString());
  });
  proc.on('exit', (data) => {
    console.log('exited');
    res.redirect('https://lofi-fy.space/out.html');
  });
});

module.exports = router;
