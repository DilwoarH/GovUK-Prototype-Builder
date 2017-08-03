var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Route index page
router.get('/search', function (req, res) {
  res.render('template-editor/search')
})

// add your routes here
router.get('/designer', function (req, res) {
  res.render('designer/index')
})

module.exports = router
