const express = require('express'),
  router = express.Router(),
  dummy = require('../assets/dummy/testWidgets.json');

/* GET all widgets. */
router.get('/', function(req, res, next) {
  res.format({
    html: function() {
      res.json(dummy);
    }
  })

});

module.exports = router;
