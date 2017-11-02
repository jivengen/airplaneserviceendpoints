
var express = require('express');
var router = express.Router();
var ctrlAirplane = require('../controllers/airplaneController');


/* GET home page. */
router.get('/', ctrlAirplane.findPlane);
      

      

router.get('/ask', function(req, res, next) {
  res.render('ask')
  
});


module.exports = router;
