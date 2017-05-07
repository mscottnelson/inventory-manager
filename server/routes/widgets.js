var express = require('express'),
  router = express.Router(),
  dummy = require('../../assets/dummy/testWidgets.json'),
  Widget = require('../../models').Widget;

router.get('/', function(req, res) {
  if(!req.session.orderId){
    Widget.findAll()
    .then(function(widgets) {
      res.format({
        html: function() {
          //res.json(widgets);
          res.render('widgets', { widgets: JSON.stringify(widgets) });
        },
        json: function() {
          res.json(widgets);
        }
      });
    });
  } else
  {
    Widget.findAll({
      where: {
        id: req.session.orderId
      }
    })
    .then(function(widgets) {
      res.format({
        html: function() {
          res.render('widgets', { widgets: widgets });
        },
        json: function() {
          res.json(widgets);
        }
      });
    });
  }
});

router.post('/new', function(req, res) {
  Widget.create(
    {
      widget: req.body.widget
    })
    .then(function(widget){
      req.session.save(function() {
        res.redirect('/');
      })
    });
});

router.post('/delete', function(req, res) {
  Widget.findById(req.body.id)
  .then(function(widget){
    widget.markForRemoval();
  })
  .then(function(widget){
    req.session.save(function(){
      res.redirect('/');
    })
  })
});

module.exports = router;
