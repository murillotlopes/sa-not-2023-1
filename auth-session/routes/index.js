var express = require('express');
const { checkAuth } = require('../utils/utils');
var router = express.Router();

/* GET home page. */
router.get('/', checkAuth, function (req, res, next) {
  res.render('index', { title: 'Autenticação por sessão' });
});

module.exports = router;
