// verifica se existe usuário autenticado
function checkAuth(req, res, next) {
  if (req.session.isLoggedIn) next()
  else {
    req.session.redirectUrl = req.url
    res.redirect('/users/login')
  }
}

module.exports = {
  checkAuth
}