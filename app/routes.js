var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/designer', function (req, res) {
  res.render('designer/index')
})

module.exports = router
