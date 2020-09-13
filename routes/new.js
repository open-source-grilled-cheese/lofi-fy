var express = require('express');
var router = express.Router();

/* POST sample */
router.post('/', function(req, res, next) {
  res.status(200);
  const { exec } = require("child_process");
  exec("rm lofi/*.mp3 lofi/*.wav", (err, stdout, stderr) => {
	  if (err) {
		  console.error(err)
	  } else {
		  console.log(`${stdout}`);
	  }
  });
  exec("/home/bitnami/supercoll/foxsamply -f /home/bitnami/supercoll/sound.py -s 10 -o lofi/newsample", (err, stdout, stderr) => {
	  if (err) {
		  console.error(err)
	  } else {
		  console.log(`${stdout}`);
	  }
  });
  res.send('lofify');
  console.log(req.body);
});


router.get('/', function(req, res, next) {
  res.status(200);
  res.send('next');
});

module.exports = router;
