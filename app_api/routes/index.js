
var express = require('express');
var router = express.Router();
var ctrlAirplane = require('../controllers/airplaneController');
var ctrlClimbData = require('../controllers/climbController');


/* GET home page. */
router.get('/', ctrlAirplane.findPlane);

router.get('/climbdata/:weight', ctrlClimbData.findclimb);
      

      

router.get('/ask', function(req, res, next) {
  res.render('ask')
  
});


module.exports = router;
